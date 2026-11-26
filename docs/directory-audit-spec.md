# Local Directory Audit: scope and approach

Requested by Brian in the project chat, 2026-10-17. No Trello card yet; the PM agent can make one from this file.
Status: draft for Brian's review. Commit to the tools repo once it exists.

## Goal

A business owner enters their business and sees whether their **name, address and phone (NAP)** match across their website, Google, Facebook, Yelp and Bing, with a plain-English list of what to fix. Mismatched details confuse customers and weaken local search rankings, and fixing them is a natural paid job for Made in Greene.

## Recommendation (short version)

Only Google can be checked automatically at a reasonable cost. Facebook, Yelp and Bing either have no usable public API or charge a monthly fee that a free tool can't justify. So version 1 should:

1. **Automatically** compare the business's **website** with its **Google Business Profile**.
2. Give the visitor a **guided check** for Facebook, Yelp and Bing: we show the "correct" details side by side with a one-tap link to search each site, and they mark each one Matches / Different / Not listed.
3. Produce one combined report and the "want us to fix these?" call to action.

If Brian later wants Facebook, Yelp and Bing fully automatic, the realistic route is a paid listings data provider (for example BrightLocal), not the four sites' own APIs.

## What each source offers (checked 2026-10-17)

| Source | Usable for automatic lookup? | Cost | Notes |
|---|---|---|---|
| **Website** | Yes | Free | We fetch the homepage and read `LocalBusiness` JSON-LD, `tel:` links and the footer address. Reuses the Health Check fetcher and its safety rules. |
| **Google** | Yes, Places API (New) | Business search via Autocomplete: 10,000 free requests a month. Reading the **phone number** puts the details call in Google's Enterprise tier: about 1,000 free a month, then roughly $20 to $35 per 1,000 (third-party figures; check Google's pricing page before enabling billing). | Needs a Google Cloud project with billing on, same key as the Review Kit's optional search. Name and address alone are in a cheaper tier. |
| **Facebook** | Not practical | Free, but gated | Meta's Page search needs the "Page Public Metadata Access" feature, which requires App Review **and** business verification, and is limited to narrow uses. Approval is uncertain and can be revoked. Facebook pages can't be fetched without login. |
| **Yelp** | Technically yes, but paid | Yelp ended free API access in 2024. Reports range from about $8 per 1,000 calls (2024) to plans from $229 a month (2026 third-party review); only a 30-day trial is free. | Not worth it for a free lead tool unless volume is high. |
| **Bing** | No | n/a | The Bing Search APIs were retired on 2025-08-11. Bing Maps for Enterprise is being retired in favor of Azure Maps, which uses different map data and does not read Bing Places listings. |
| Scraping any of these | No | n/a | Against each site's terms and breaks often. Not recommended. |

## What the visitor does

1. Types their business name and town; picks their business from Google's suggestions (Autocomplete).
2. Enters their website address (pre-filled from Google if Google has it).
3. Waits a few seconds while we read Google and their website.
4. Sees **Step 1: Website vs Google**, done automatically.
5. Sees **Step 2: Check your other listings**: for Facebook, Yelp and Bing, a card showing the details we expect, an "Open [site] search" button, and three buttons: Matches / Something's different / I'm not listed.
6. Sees the final report: an overall consistency score, a list of fixes, and the call to action.

Step 2 is optional; the report works with Step 1 alone.

## Matching rules

Compare each field after normalizing it, so small style differences don't count as errors:

- **Name:** ignore case, punctuation, "&" vs "and", and endings like LLC, Inc, Co. "Brown's Custom Fencing LLC" matches "Browns Custom Fencing".
- **Address:** standard USPS abbreviations (Street/St, Road/Rd, Highway/Hwy, Suite/Ste/#), ignore case and punctuation, compare 5-digit ZIP. A missing suite number is a "minor difference", not a mismatch.
- **Phone:** digits only, drop a leading 1. Different number = mismatch.

Each field gets one of: **Match**, **Minor difference** (show both versions), **Mismatch**, or **Missing** (for example, no phone on the website).

## Scoring

- Each source and field pair scores Match 1, Minor 0.5, Mismatch or Missing 0.
- Consistency score = points earned / points possible x 100, counting only sources that were checked.
- Same bands as the Health Check: 90+ Great, 70 to 89 Good, 50 to 69 Needs work, under 50 Needs attention.

## Findings (draft wording for Brian's tone review)

| Situation | Title | Fix |
|---|---|---|
| Phone differs | "Your phone number on Google doesn't match your website." | "Pick one number and update the other, so customers don't call a dead line." |
| Address differs | "Your address is listed differently on {source}." | "Update {source} to match your Google listing exactly." |
| Name differs | "Your business name is spelled differently on {source}." | "Use the same name everywhere, the way it appears on your sign." |
| No business info on website | "Google can't confirm your details from your website." | "Add your name, address and phone to the footer and as business info Google can read." |
| Not on Google | "We couldn't find your business on Google." | "Claim a free Google Business Profile, the single most important local listing." |
| Not on Yelp / Bing / Facebook | "You're not listed on {source}." | "Free listings help customers find you. We can set them up for you." |

## Abuse protection and cost control

- Rate limit 5 audits per IP per hour; cache Google results by Place ID for 24 hours.
- Set a Google Cloud budget alert (for example $10) and a hard daily cap on Enterprise-tier calls, so a traffic spike can't run up a bill.
- API key restricted to Places API and called from our server only.

## Privacy

The details checked are public business information. We store nothing about the visitor unless they submit the lead form, and Step 2 answers are kept only for that report.

## Out of scope for version 1

Automatic Facebook, Yelp or Bing lookups; other directories (Apple Maps, Nextdoor, Angi, BBB); fixing listings for the visitor; monitoring over time.

## Decisions for Brian

1. **Approach:** automatic website + Google with a guided check for the rest (recommended), or budget for a paid listings provider to automate all four.
2. **Google billing:** OK to enable a Google Cloud billing account with a budget cap? This tool needs it, and the Review Kit's business search would share it.
3. **Build order:** after the Health Check and Review Kit, or share their build (it reuses the Health Check fetcher and the Review Kit's Google search).

## Biggest risk

Cost: the phone number is an Enterprise-tier field on Google. A traffic spike or a bot could turn a free tool into a monthly bill, so the budget cap and daily limit are required before launch, not optional.
