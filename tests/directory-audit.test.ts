// Run with: npm test   (Node's built-in test runner; no extra dependencies)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  compareAddress, compareName, comparePhone, compareNap, consistencyScore, band,
} from "../src/lib/nap.ts";
import { extractWebsiteNap } from "../src/lib/website-nap.ts";

test("names ignore case, punctuation, & vs and, and LLC-style endings", () => {
  assert.equal(compareName("Brown's Custom Fencing LLC", "Browns Custom Fencing"), "match");
  assert.equal(compareName("Smith & Sons Plumbing, Inc.", "smith and sons plumbing"), "match");
  assert.equal(compareName("The Hobby Hideaway", "Hobby Hideaway"), "match");
  assert.equal(compareName("Brown's Custom Fencing", "Brown's Custom Fencing of Greeneville"), "minor");
  assert.equal(compareName("Brown's Custom Fencing", "Greene County Fence Co"), "mismatch");
});

test("addresses use USPS abbreviations and 5-digit ZIPs", () => {
  assert.equal(
    compareAddress("123 West Main Street, Greeneville, TN 37743, USA", "123 W Main St., Greeneville, Tennessee 37743-1234"),
    "match",
  );
  assert.equal(compareAddress("1500 Tusculum Blvd, Suite 4, Greeneville, TN 37745", "1500 Tusculum Boulevard #4, Greeneville, TN 37745"), "match");
  assert.equal(compareAddress("1500 Tusculum Blvd Ste 4, Greeneville, TN 37745", "1500 Tusculum Blvd, Greeneville, TN 37745"), "minor");
  assert.equal(compareAddress("123 W Main St, Greeneville, TN 37743", "123 W Main St"), "minor");
  assert.equal(compareAddress("123 W Main St, Greeneville, TN 37743", "123 W Main St, Greeneville, TN 37745"), "mismatch");
  assert.equal(compareAddress("123 W Main St, Greeneville, TN 37743", "98 Depot St, Greeneville, TN 37743"), "mismatch");
});

test("phones compare digits only and drop a leading 1", () => {
  assert.equal(comparePhone("(423) 555-0100", "+1 423-555-0100"), "match");
  assert.equal(comparePhone("(423) 555-0100", ["423.555.0199", "4235550100"]), "match");
  assert.equal(comparePhone("(423) 555-0100", "423-555-0199"), "mismatch");
  assert.equal(comparePhone("(423) 555-0100", []), "missing");
});

test("score and bands follow the spec", () => {
  assert.equal(consistencyScore(["match", "minor", "mismatch", "missing"]), 38);
  assert.equal(consistencyScore([]), null);
  assert.equal(band(90), "great");
  assert.equal(band(70), "good");
  assert.equal(band(50), "needs-work");
  assert.equal(band(49), "needs-attention");
});

const schemaPage = `<!doctype html><html><head>
<meta property="og:site_name" content="Ignored Site Name">
<script type="application/ld+json">{"@context":"https://schema.org","@graph":[
  {"@type":"WebSite","name":"Site"},
  {"@type":"HomeAndConstructionBusiness","name":"Brown&#39;s Custom Fencing",
   "telephone":"+1-423-555-0100",
   "address":{"@type":"PostalAddress","streetAddress":"123 W Main St","addressLocality":"Greeneville","addressRegion":"TN","postalCode":"37743"}}
]}</script></head><body><a href="tel:+14235550199">Call</a></body></html>`;

test("website reader prefers LocalBusiness JSON-LD and collects tel: links", () => {
  const nap = extractWebsiteNap(schemaPage);
  assert.equal(nap.hasBusinessSchema, true);
  assert.equal(nap.name, "Brown's Custom Fencing");
  assert.equal(nap.address, "123 W Main St, Greeneville, TN 37743");
  assert.deepEqual(nap.phones, ["+1-423-555-0100", "+14235550199"]);
});

test("website reader falls back to footer text and og:site_name", () => {
  const nap = extractWebsiteNap(`<html><head><meta property="og:site_name" content="Rebel Fork Kitchen"><title>Home | Rebel Fork</title></head>
    <body><footer><p>Rebel Fork Kitchen<br>210 N. Main Street<br>Greeneville, TN 37745</p>
    <a href="tel:4235550123">(423) 555-0123</a></footer></body></html>`);
  assert.equal(nap.hasBusinessSchema, false);
  assert.equal(nap.name, "Rebel Fork Kitchen");
  assert.equal(nap.sources.address, "page text");
  assert.equal(compareAddress("210 N Main St, Greeneville, TN 37745, USA", nap.address!), "match");
  assert.deepEqual(nap.phones, ["4235550123"]);
});

test("a site with no business details reports everything missing", () => {
  const nap = extractWebsiteNap("<html><head><title>Welcome</title></head><body>Hello</body></html>");
  const results = compareNap(
    { name: "Hydra Thrive", address: "1 Main St, Greeneville, TN 37743", phone: "4235550100" },
    { name: nap.name, address: nap.address, phones: nap.phones },
  ).map((c) => c.result);
  assert.deepEqual(results, ["missing", "missing", "missing"]);
});
