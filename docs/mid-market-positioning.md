# Mid-market redesign: positioning notes

Branch `redesign/mid-market`. Nothing here is deployed.

## Who the homepage now speaks to
Established companies that run on more systems than their website knows about:
manufacturers, distributors, contractors, medical and professional practices,
and multi-location businesses across East Tennessee. They feel the pain as
retyped data, leads nobody follows up, and staff answering questions the site
could answer.

## The offer the homepage sells
One engagement in three phases, so the bigger price is anchored to a plan:

1. **Discovery & Roadmap** (paid): working sessions, a systems map, ranked
   automations, a written roadmap and a fixed-price proposal.
2. **Design & Build**: custom site plus the integrations (CRM, accounting,
   calendars, inventory/ERP, payments) and automations from the roadmap,
   photography, staff training.
3. **Run & Improve** (monthly): hosting, integration monitoring, a monthly
   review, new automations over time. This is the recurring revenue that makes
   fewer clients work.

Prices (set by Brian 2026-10-18): Discovery $3,500, credited toward the build
if signed within 60 days; Design & Build from $20,000, quoted after discovery;
Run $750/mo and Improve $1,500/mo, 6-month minimum; custom builds paid
40/30/30, $150/hr out of scope, 90-day warranty. Small-business packages
(updated to Brian's service list 2026-10-18): Landing $1,750, Business $3,500,
Growth $5,500, Ecommerce from $6,000, 50/50 payment, care plans Hosting $10/mo,
Care $49/mo, Care Plus $99/mo, edits $35 per 15 min, add-ons listed compactly
on /services#packages. The 1-year guarantee stays until Brian settles it
against the PDF's 3-month warranty. The typical Design & Build line items from
the sheet are shown under Pricing. Phase lengths and yearly capacity are still
`[PLACEHOLDER]` tags. The old farm-stands
offer page ("$150 down / own it for $850") was removed at Brian's request;
/farm-stands now redirects to /services#packages.

## Proof used (all real, from src/data/projects.ts)
- Echo Station: 40 taps synced from Untappd, events from Google Calendar.
- Tammy M. (The Funny Farm) quote about coming out in person.
No new client names, numbers or testimonials were added.

## What moved out of the spotlight
- "$950 starting price", package cards and pricing preview on the homepage.
- "Affordable websites for Greene County" in page titles, share text, schema
  and footer. The share image (public/og-image.png) was redrawn.
- Small-business sections (Why a website, Facebook vs website, blog strip).
  The components are untouched; /services still sells the packages and the
  homepage links there in one line.

## About page
Rewritten in a formal, studio-first voice: the studio, leadership bios,
principles, approach. Removed the personal family story and the line that
Made in Greene is run part-time alongside a higher-ed job (worth deciding
whether that stays anywhere: mid-market buyers will ask about capacity).

## Still to decide or supply
- Phase lengths, builds per year.
- Domenique's last name and title.
- Founded year.
- Photos: leadership portrait (4:5), and a more formal About hero than the
  current family hiking photo (landscape, 16:9).
- The /services, /contact and /work pages still speak to small businesses;
  next pass if this direction holds.

## Getting found (added 2026-10-18)
Google Business Profile Setup ($400 one-time), Profile Care ($200/mo, 3-month
minimum) and Google Ads Management ($750 setup, then $400/mo or 15% of ad
spend, whichever is higher, 3-month minimum) are on /services#found, with
wording as approved. Improve includes Profile Care and Ads Management with no
management fee; Run does not.

## Small-business page (2026-10-18)
Brian asked to split the packages off What We Offer onto their own landing page
with the original tile-collage hero. `/small-business` (copy in
src/data/small-business.ts) carries the hero, full package inclusions from the
service list, care plans, add-ons, terms and the two client testimonials.
/services keeps a short band linking to it; /farm-stands redirects there.
Serif accents (the quote, the small-business headline) use Fraunces again.

## Visual pass: "Fence line" (2026-10-18)
Brian asked for elements from Greene County's farms and manufacturing, more
white space, fewer boxes and bigger images. One hand-drawn horizon
(src/components/art/FenceLine.astro: mountains, barn and silo, cattle, hay,
power poles carrying a gold signal, water tower, sawtooth-roof plant, box
truck, grain bins) closes the homepage hero and opens the footer on every
page. Line pictograms (src/components/art/Pictogram.astro) mark who we build
for and the three kinds of work. New warm `hay` background, section padding
raised sitewide, hairline rules removed, a full-width photo band (The Funny
Farm, Echo Station) and a larger Echo Station screenshot. Engagement phases sit
on fence rails. Farms and agricultural operations added to who we build for.
Needs Brian's photos: a client plant floor or farm operation for the band.
