// Pull a business's name, address and phone out of a homepage's HTML.
// Order of trust: LocalBusiness JSON-LD, then tel: links, then a US-style
// street address in the visible text, then og:site_name.

export interface WebsiteNap {
  name: string | null;
  address: string | null;
  phones: string[];
  /** Where each value came from, so the report can explain itself. */
  sources: { name?: string; address?: string; phone?: string };
  hasBusinessSchema: boolean;
}

type Json = Record<string, unknown>;

function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&apos;|&rsquo;|&#8217;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function jsonLdNodes(html: string): Json[] {
  const nodes: Json[] = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const m of html.matchAll(re)) {
    let data: unknown;
    try {
      data = JSON.parse(m[1].trim());
    } catch {
      continue;
    }
    const stack = [data];
    while (stack.length) {
      const item = stack.pop();
      if (Array.isArray(item)) stack.push(...item);
      else if (item && typeof item === "object") {
        const obj = item as Json;
        nodes.push(obj);
        if (obj["@graph"]) stack.push(obj["@graph"]);
      }
    }
  }
  return nodes;
}

// Schema.org types that are, or behave like, a local business.
const BUSINESS_TYPE = /business|store|shop|restaurant|service|contractor|dentist|physician|clinic|pharmacy|agency|office|salon|spa|plumber|electrician|roofing|hvac|locksmith|mover|cafe|bakery|bar|hotel|winery|brewery|organization/i;

function isBusinessNode(node: Json): boolean {
  const types = ([] as unknown[]).concat(node["@type"] ?? []).map(String);
  return types.some((t) => BUSINESS_TYPE.test(t) && t !== "WebSite" && t !== "WebPage");
}

function schemaAddress(value: unknown): string | null {
  if (!value) return null;
  if (typeof value === "string") return value.trim() || null;
  if (Array.isArray(value)) return schemaAddress(value[0]);
  const a = value as Json;
  const street = a.streetAddress ? String(a.streetAddress) : "";
  if (!street) return null; // City and state alone isn't an address to compare.
  const cityLine = [a.addressLocality, [a.addressRegion, a.postalCode].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  return [street, cityLine].filter(Boolean).join(", ");
}

function visibleText(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<br\s*\/?>/gi, ", ")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ");
}

// "123 W Main St, Suite 4, Greeneville, TN 37743" and close variants.
const US_ADDRESS =
  /\b\d{1,6}\s+(?:[A-Za-z0-9.'-]+\s+){0,6}?(?:St|Street|Rd|Road|Ave|Avenue|Hwy|Highway|Dr|Drive|Ln|Lane|Blvd|Boulevard|Ct|Court|Pkwy|Parkway|Pl|Place|Cir|Circle|Way|Pike|Trl|Trail)\.?(?:[\s,]+(?:Ste|Suite|Unit|#)\.?\s*[A-Za-z0-9-]+)?[\s,]+[A-Za-z .'-]{2,30},?\s+(?:TN|Tennessee|[A-Z]{2})\.?\s+\d{5}(?:-\d{4})?\b/;

export function extractWebsiteNap(html: string): WebsiteNap {
  const result: WebsiteNap = { name: null, address: null, phones: [], sources: {}, hasBusinessSchema: false };

  const business = jsonLdNodes(html).find(isBusinessNode);
  if (business) {
    result.hasBusinessSchema = true;
    if (business.name) {
      result.name = decodeEntities(String(business.name)).trim();
      result.sources.name = "business info for Google";
    }
    const address = schemaAddress(business.address);
    if (address) {
      result.address = decodeEntities(address);
      result.sources.address = "business info for Google";
    }
    if (business.telephone) {
      result.phones.push(String(business.telephone));
      result.sources.phone = "business info for Google";
    }
  }

  for (const m of html.matchAll(/href=["']tel:([^"']+)["']/gi)) {
    const phone = decodeURIComponent(m[1]).trim();
    if (phone && !result.phones.includes(phone)) result.phones.push(phone);
    result.sources.phone ??= "tap-to-call link";
  }

  if (!result.address) {
    const m = visibleText(html).match(US_ADDRESS);
    if (m) {
      result.address = m[0].trim();
      result.sources.address = "page text";
    }
  }

  if (!result.name) {
    const og = html.match(/<meta[^>]+property=["']og:site_name["'][^>]+content=["']([^"']+)["']/i)
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:site_name["']/i);
    // <title> is skipped on purpose: "Home | Business" vs "Business | Home"
    // order varies too much to compare fairly.
    if (og) {
      result.name = decodeEntities(og[1]).trim();
      result.sources.name = "site name";
    }
  }

  return result;
}
