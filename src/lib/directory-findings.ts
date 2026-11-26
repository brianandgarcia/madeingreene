// Turns Local Directory Audit results into a score and plain-English findings.
// Wording is a draft for Brian's tone review (see directory-audit-spec.md).

import { consistencyScore, type Field, type FieldComparison, type FieldResult } from "./nap.ts";

export type Directory = "facebook" | "yelp" | "bing";
export const DIRECTORY_LABEL: Record<Directory, string> = { facebook: "Facebook", yelp: "Yelp", bing: "Bing" };

/** What the visitor told us in the guided check. `null` = not answered yet. */
export interface GuidedAnswer {
  listed: boolean | null;
  fields: Record<Field, "match" | "different" | null>;
}

export type Priority = "fix-first" | "worth-fixing" | "nice-to-have";
export const PRIORITY_LABEL: Record<Priority, string> = {
  "fix-first": "Fix first",
  "worth-fixing": "Worth fixing",
  "nice-to-have": "Nice to have",
};

export interface Finding {
  priority: Priority;
  title: string;
  fix: string;
}

export interface AuditInput {
  referenceSource: "google" | "manual";
  notOnGoogle: boolean;
  website: { checked: boolean; hasBusinessSchema: boolean; comparisons: FieldComparison[] } | null;
  guided: Partial<Record<Directory, GuidedAnswer>>;
}

const FIELD_WORD: Record<Field, string> = { name: "business name", address: "address", phone: "phone number" };
const PRIORITY_ORDER: Priority[] = ["fix-first", "worth-fixing", "nice-to-have"];

function fieldFinding(field: Field, result: FieldResult, where: string, reference: string): Finding | null {
  if (result === "match") return null;
  if (result === "minor") {
    return {
      priority: "nice-to-have",
      title: `Your ${FIELD_WORD[field]} is written a little differently on ${where}.`,
      fix: `Copy it exactly as it appears on ${reference}, so every listing reads the same.`,
    };
  }
  if (field === "phone") {
    return {
      priority: "fix-first",
      title: `Your phone number on ${where} doesn't match ${reference}.`,
      fix: "Pick one number and update the other, so customers don't call a dead line.",
    };
  }
  if (field === "address") {
    return {
      priority: "fix-first",
      title: `Your address is listed differently on ${where}.`,
      fix: `Update ${where} to match ${reference} exactly.`,
    };
  }
  return {
    priority: "worth-fixing",
    title: `Your business name is spelled differently on ${where}.`,
    fix: "Use the same name everywhere, the way it appears on your sign.",
  };
}

export function summarize(input: AuditInput): { score: number | null; findings: Finding[]; checked: number } {
  const results: FieldResult[] = [];
  const findings: Finding[] = [];
  const reference = input.referenceSource === "google" ? "your Google listing" : "the details you gave us";

  if (input.notOnGoogle) {
    findings.push({
      priority: "fix-first",
      title: "We couldn't find your business on Google.",
      fix: "Claim a free Google Business Profile. It's the single most important local listing.",
    });
  }

  if (input.website?.checked) {
    for (const c of input.website.comparisons) {
      if (!c.expected) continue; // Nothing to compare against.
      results.push(c.result);
      if (c.result !== "missing") {
        const f = fieldFinding(c.field, c.result, "your website", reference);
        if (f) findings.push(f);
      }
    }
    const missing = input.website.comparisons.filter((c) => c.expected && c.result === "missing").map((c) => FIELD_WORD[c.field]);
    if (!input.website.hasBusinessSchema || missing.length) {
      findings.push({
        priority: missing.length ? "worth-fixing" : "nice-to-have",
        title: missing.length
          ? `Your website doesn't show your ${missing.join(" or ")} where Google can find it.`
          : "Google can't read your business details from your website.",
        fix: "Add your name, address and phone to the footer and as business info Google can read.",
      });
    }
  }

  for (const [key, answer] of Object.entries(input.guided) as [Directory, GuidedAnswer][]) {
    const label = DIRECTORY_LABEL[key];
    if (answer.listed === false) {
      results.push("missing", "missing", "missing");
      findings.push({
        priority: "worth-fixing",
        title: `You're not listed on ${label}.`,
        fix: "Free listings help customers find you. We can set them up for you.",
      });
      continue;
    }
    if (answer.listed !== true) continue;
    for (const field of ["name", "address", "phone"] as Field[]) {
      const a = answer.fields[field];
      if (!a) continue;
      const result: FieldResult = a === "match" ? "match" : "mismatch";
      results.push(result);
      const f = fieldFinding(field, result, label, reference);
      if (f) findings.push(f);
    }
  }

  findings.sort((a, b) => PRIORITY_ORDER.indexOf(a.priority) - PRIORITY_ORDER.indexOf(b.priority));
  return { score: consistencyScore(results), findings, checked: results.length };
}
