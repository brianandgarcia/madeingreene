// Local Directory Audit back end (Netlify Functions v2, no dependencies).
//
// POST /api/directory-audit
//   { action: "suggest", input, sessionToken }          -> Google business suggestions
//   { action: "audit", placeId, sessionToken, website }  -> Google listing vs website
//   { action: "audit", manual: { name, address, phone }, website }
//                                                        -> typed-in details vs website
//
// Env vars:
//   GOOGLE_PLACES_API_KEY       Places API (New) key, server-side only. Without it the
//                               page falls back to typed-in details (no Google cost).
//   DIRECTORY_AUDIT_HOURLY_LIMIT  audits per visitor IP per hour (default 5)
//   DIRECTORY_AUDIT_DAILY_GOOGLE_CAP  Google detail lookups per day (default 50)
//
// The limits and cache below live in memory, so they reset whenever Netlify starts a
// fresh function instance. They slow down a casual abuser; the hard spending cap is the
// daily quota and budget alert set on the key in Google Cloud.

import { lookup } from "node:dns/promises";
import net from "node:net";
import { compareNap, type Nap } from "../../src/lib/nap.ts";
import { extractWebsiteNap } from "../../src/lib/website-nap.ts";

const PLACES = "https://places.googleapis.com/v1";
// Bias suggestions toward Greeneville, TN (50 km radius).
const GREENEVILLE = { latitude: 36.1632, longitude: -82.831 };
const DETAIL_FIELDS = "id,displayName,formattedAddress,nationalPhoneNumber,websiteUri,googleMapsUri";

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const hourlyLimit = Number(process.env.DIRECTORY_AUDIT_HOURLY_LIMIT ?? 5);
const dailyGoogleCap = Number(process.env.DIRECTORY_AUDIT_DAILY_GOOGLE_CAP ?? 50);

const auditsByIp = new Map<string, number[]>();
const suggestsByIp = new Map<string, number[]>();
const placeCache = new Map<string, { at: number; place: GooglePlace }>();
let googleDay = { start: Date.now(), count: 0 };

interface GooglePlace {
  name: string | null;
  address: string | null;
  phone: string | null;
  website: string | null;
  mapsUrl: string | null;
}

/** An error whose message is safe and useful to show the visitor. */
class VisitorError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function allow(bucket: Map<string, number[]>, ip: string, limit: number): boolean {
  const now = Date.now();
  const recent = (bucket.get(ip) ?? []).filter((t) => now - t < HOUR);
  if (recent.length >= limit) return false;
  recent.push(now);
  bucket.set(ip, recent);
  return true;
}

async function suggest(input: string, sessionToken: string, key: string) {
  const res = await fetch(`${PLACES}/places:autocomplete`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      input,
      sessionToken,
      includedRegionCodes: ["us"],
      locationBias: { circle: { center: GREENEVILLE, radius: 50000 } },
    }),
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) throw new Error(`Places autocomplete ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { suggestions?: any[] };
  return (data.suggestions ?? [])
    .map((s) => s.placePrediction)
    .filter(Boolean)
    .slice(0, 5)
    .map((p) => ({
      placeId: p.placeId as string,
      main: p.structuredFormat?.mainText?.text ?? p.text?.text ?? "",
      secondary: p.structuredFormat?.secondaryText?.text ?? "",
    }));
}

async function placeDetails(placeId: string, sessionToken: string | undefined, key: string): Promise<GooglePlace> {
  const cached = placeCache.get(placeId);
  if (cached && Date.now() - cached.at < DAY) return cached.place;

  if (Date.now() - googleDay.start > DAY) googleDay = { start: Date.now(), count: 0 };
  if (googleDay.count >= dailyGoogleCap) {
    throw new VisitorError("We've hit today's limit for Google lookups. Please type your details in instead.", 429);
  }
  googleDay.count++;

  const qs = sessionToken ? `?sessionToken=${encodeURIComponent(sessionToken)}` : "";
  const res = await fetch(`${PLACES}/places/${encodeURIComponent(placeId)}${qs}`, {
    headers: { "x-goog-api-key": key, "x-goog-fieldmask": DETAIL_FIELDS },
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) throw new Error(`Places details ${res.status}: ${await res.text()}`);
  const p = (await res.json()) as any;
  const place: GooglePlace = {
    name: p.displayName?.text ?? null,
    address: p.formattedAddress ?? null,
    phone: p.nationalPhoneNumber ?? null,
    website: p.websiteUri ?? null,
    mapsUrl: p.googleMapsUri ?? null,
  };
  placeCache.set(placeId, { at: Date.now(), place });
  return place;
}

// ---- Website fetch, with guards so visitors can't point our server at private networks.

function isPrivateIp(ip: string): boolean {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    return (
      a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168)
    );
  }
  const v6 = ip.toLowerCase();
  if (v6.startsWith("::ffff:")) return isPrivateIp(v6.slice(7));
  return v6 === "::" || v6 === "::1" || /^f[cd]/.test(v6) || /^fe[89ab]/.test(v6);
}

export function normalizeWebsite(input: string): URL {
  const trimmed = input.trim();
  let url: URL;
  try {
    url = new URL(/^[a-z]+:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
  } catch {
    throw new VisitorError("That doesn't look like a website address.");
  }
  if (!["http:", "https:"].includes(url.protocol)) throw new VisitorError("We can only check public websites.");
  if (url.port && !["80", "443"].includes(url.port)) throw new VisitorError("We can only check public websites.");
  if (net.isIP(url.hostname.replace(/^\[|\]$/g, "")) || !url.hostname.includes(".") || url.hostname.endsWith(".local")) {
    throw new VisitorError("We can only check public websites.");
  }
  url.hash = "";
  return url;
}

async function assertPublicHost(hostname: string) {
  let addresses: { address: string }[];
  try {
    addresses = await lookup(hostname, { all: true });
  } catch {
    throw new VisitorError("We couldn't reach that website. Check the address and try again.");
  }
  if (addresses.length === 0 || addresses.some((a) => isPrivateIp(a.address))) {
    throw new VisitorError("We can only check public websites.");
  }
}

const MAX_BYTES = 1_500_000;

async function fetchHomepage(start: URL): Promise<{ url: string; html: string }> {
  let url = start;
  for (let hop = 0; hop <= 5; hop++) {
    await assertPublicHost(url.hostname);
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        headers: { "user-agent": "MadeInGreeneDirectoryAudit/1.0 (+https://madeingreene.com)", accept: "text/html" },
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      throw new VisitorError("We couldn't reach that website. Check the address and try again.");
    }
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      url = normalizeWebsite(new URL(res.headers.get("location")!, url).href);
      continue;
    }
    if (!res.ok) throw new VisitorError("We couldn't reach that website. Check the address and try again.");
    if (!(res.headers.get("content-type") ?? "").includes("html")) {
      throw new VisitorError("That address isn't a web page. Try your homepage.");
    }
    const reader = res.body!.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (size < MAX_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      size += value.length;
    }
    reader.cancel().catch(() => {});
    return { url: url.href, html: new TextDecoder().decode(Buffer.concat(chunks)) };
  }
  throw new VisitorError("That website redirects too many times.");
}

// ---- Handler

export default async (req: Request, context: { ip?: string }) => {
  if (req.method !== "POST") return json({ error: "Use POST." }, 405);
  const ip = context?.ip ?? req.headers.get("x-nf-client-connection-ip") ?? "unknown";
  const key = process.env.GOOGLE_PLACES_API_KEY;

  let body: any;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Bad request." }, 400);
  }

  try {
    if (body.action === "suggest") {
      if (!key) return json({ configured: false, suggestions: [] });
      const input = String(body.input ?? "").slice(0, 120).trim();
      if (input.length < 3) return json({ configured: true, suggestions: [] });
      if (!allow(suggestsByIp, ip, 120)) throw new VisitorError("Too many searches. Please try again in a bit.", 429);
      return json({ configured: true, suggestions: await suggest(input, String(body.sessionToken ?? ""), key) });
    }

    if (body.action === "audit") {
      if (!allow(auditsByIp, ip, hourlyLimit)) {
        throw new VisitorError("You've run a lot of checks. Please try again in an hour.", 429);
      }

      let reference: Nap & { source: "google" | "manual"; mapsUrl?: string | null };
      let googleWebsite: string | null = null;
      if (body.placeId) {
        if (!key) throw new VisitorError("Google search isn't switched on yet. Please type your details in instead.");
        const place = await placeDetails(String(body.placeId), body.sessionToken, key);
        reference = { source: "google", name: place.name, address: place.address, phone: place.phone, mapsUrl: place.mapsUrl };
        googleWebsite = place.website;
      } else {
        const m = body.manual ?? {};
        const clean = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 200) : null);
        reference = { source: "manual", name: clean(m.name), address: clean(m.address), phone: clean(m.phone) };
        if (!reference.name) throw new VisitorError("Please enter your business name.");
      }

      const websiteInput = String(body.website ?? "").trim() || googleWebsite || "";
      let website: Record<string, unknown> = { checked: false };
      if (websiteInput) {
        try {
          const page = await fetchHomepage(normalizeWebsite(websiteInput));
          const nap = extractWebsiteNap(page.html);
          website = {
            checked: true,
            url: page.url,
            nap,
            comparisons: compareNap(reference, { name: nap.name, address: nap.address, phones: nap.phones }),
          };
        } catch (err) {
          if (!(err instanceof VisitorError)) throw err;
          website = { checked: false, url: websiteInput, error: err.message };
        }
      }

      return json({ configured: Boolean(key), reference, website });
    }

    return json({ error: "Unknown action." }, 400);
  } catch (err) {
    if (err instanceof VisitorError) return json({ error: err.message }, err.status);
    console.error("directory-audit", err);
    return json({ error: "Something went wrong on our end. Please try again." }, 502);
  }
};

export const config = { path: "/api/directory-audit" };
