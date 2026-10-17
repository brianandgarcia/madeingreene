// Name, address and phone (NAP) matching for the Local Directory Audit.
// Shared by the page (scoring the guided checks) and the Netlify function
// (comparing a website against Google). Plain TypeScript, no dependencies.

export type FieldResult = "match" | "minor" | "mismatch" | "missing";
export type Field = "name" | "address" | "phone";

export interface Nap {
  name?: string | null;
  address?: string | null;
  phone?: string | null;
}

export interface FieldComparison {
  field: Field;
  result: FieldResult;
  expected: string | null;
  found: string | null;
}

const BUSINESS_SUFFIXES = new Set([
  "llc", "inc", "co", "corp", "corporation", "company", "ltd", "pllc", "pc", "lp", "llp",
]);

export function normalizeName(name: string): string {
  const words = name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
  if (words[0] === "the") words.shift();
  while (words.length > 1 && BUSINESS_SUFFIXES.has(words[words.length - 1])) words.pop();
  return words.join(" ");
}

// USPS-style abbreviations, applied word by word after lower-casing.
const ADDRESS_WORDS: Record<string, string> = {
  street: "st", road: "rd", avenue: "ave", av: "ave", highway: "hwy", drive: "dr",
  lane: "ln", boulevard: "blvd", court: "ct", parkway: "pkwy", place: "pl",
  circle: "cir", trail: "trl", terrace: "ter", square: "sq", pike: "pike",
  north: "n", south: "s", east: "e", west: "w",
  northeast: "ne", northwest: "nw", southeast: "se", southwest: "sw",
  suite: "ste", apartment: "apt", building: "bldg", floor: "fl",
  tennessee: "tn",
};
const UNIT_WORDS = new Set(["ste", "apt", "unit", "bldg", "fl", "rm"]);

interface ParsedAddress {
  core: string;
  unit: string;
  zip: string;
}

export function parseAddress(address: string): ParsedAddress {
  let text = address.toLowerCase();
  text = text.replace(/\b(usa|united states( of america)?|us)\s*$/, " ");
  const zipMatch = text.match(/\b(\d{5})(?:-\d{4})?\b(?!.*\b\d{5}\b)/);
  const zip = zipMatch ? zipMatch[1] : "";
  if (zipMatch) text = text.replace(zipMatch[0], " ");
  text = text.replace(/#\s*/g, " ste ").replace(/[^a-z0-9]+/g, " ");

  const words = text.trim().split(" ").filter(Boolean).map((w) => ADDRESS_WORDS[w] ?? w);
  const core: string[] = [];
  const unit: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (UNIT_WORDS.has(words[i]) && i + 1 < words.length) {
      unit.push(words[i + 1]);
      i++;
    } else {
      core.push(words[i]);
    }
  }
  return { core: core.join(" "), unit: unit.join(" "), zip };
}

export function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  return digits;
}

export function formatPhone(phone: string): string {
  const d = normalizePhone(phone);
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : phone;
}

export function compareName(expected: string, found: string): FieldResult {
  const a = normalizeName(expected);
  const b = normalizeName(found);
  if (!a || !b) return "missing";
  if (a === b) return "match";
  // "Brown's Custom Fencing" vs "Brown's Custom Fencing of Greeneville".
  if (a.includes(b) || b.includes(a)) return "minor";
  return "mismatch";
}

export function compareAddress(expected: string, found: string): FieldResult {
  const a = parseAddress(expected);
  const b = parseAddress(found);
  if (!a.core || !b.core) return "missing";
  if (a.zip && b.zip && a.zip !== b.zip) return "mismatch";
  if (a.core === b.core) return a.unit === b.unit ? "match" : "minor";
  // A website footer often drops the city or state that Google shows.
  if (a.core.startsWith(b.core) || b.core.startsWith(a.core)) return "minor";
  return "mismatch";
}

/** `found` may hold several numbers (a site with more than one tel: link). */
export function comparePhone(expected: string, found: string | string[]): FieldResult {
  const want = normalizePhone(expected);
  const have = (Array.isArray(found) ? found : [found]).map(normalizePhone).filter(Boolean);
  if (!want || have.length === 0) return "missing";
  return have.includes(want) ? "match" : "mismatch";
}

export function compareNap(expected: Nap, found: Nap & { phones?: string[] }): FieldComparison[] {
  const phones = found.phones?.length ? found.phones : found.phone ? [found.phone] : [];
  const phoneResult: FieldResult = expected.phone ? comparePhone(expected.phone, phones) : "missing";
  const matchingPhone = phones.find((p) => expected.phone && normalizePhone(p) === normalizePhone(expected.phone));
  return [
    {
      field: "name",
      result: expected.name && found.name ? compareName(expected.name, found.name) : "missing",
      expected: expected.name ?? null,
      found: found.name ?? null,
    },
    {
      field: "address",
      result: expected.address && found.address ? compareAddress(expected.address, found.address) : "missing",
      expected: expected.address ?? null,
      found: found.address ?? null,
    },
    {
      field: "phone",
      result: phoneResult,
      expected: expected.phone ? formatPhone(expected.phone) : null,
      found: matchingPhone ? formatPhone(matchingPhone) : phones[0] ? formatPhone(phones[0]) : null,
    },
  ];
}

export const POINTS: Record<FieldResult, number> = { match: 1, minor: 0.5, mismatch: 0, missing: 0 };

/** Score = points earned / points possible x 100, over the fields that were checked. */
export function consistencyScore(results: FieldResult[]): number | null {
  if (results.length === 0) return null;
  const earned = results.reduce((sum, r) => sum + POINTS[r], 0);
  return Math.round((earned / results.length) * 100);
}

export type Band = "great" | "good" | "needs-work" | "needs-attention";

export function band(score: number): Band {
  if (score >= 90) return "great";
  if (score >= 70) return "good";
  if (score >= 50) return "needs-work";
  return "needs-attention";
}

export const BAND_LABEL: Record<Band, string> = {
  great: "Great",
  good: "Good, with a few fixes",
  "needs-work": "Needs work",
  "needs-attention": "Needs attention",
};
