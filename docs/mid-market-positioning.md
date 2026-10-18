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

Prices, phase lengths and yearly capacity are visible `[PLACEHOLDER]` tags in
`src/data/home.ts`. Suggestions for Brian to decide: credit the discovery fee
toward the build, and publish a "builds from" number rather than full pricing.

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
- Prices, phase lengths, builds per year.
- Domenique's last name and title.
- Founded year.
- Photos: leadership portrait (4:5), and a more formal About hero than the
  current family hiking photo (landscape, 16:9).
- The /services, /contact and /work pages still speak to small businesses;
  next pass if this direction holds.
