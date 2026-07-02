# MadeinGreene — Full Site Content (for audit & edit)

This is a complete snapshot of every word that appears on the live site, organized by page and section. Headings reflect what's on screen; component names in brackets refer to the underlying file so we can find things quickly.

---

## Site-wide

### Header / Top Navigation [Header.astro]

- Logo: MadeinGreene (image)
- Nav links: Services · Work · Compare · Network · About · Contact
- Phone CTA (desktop): **423-292-7294**
- Mobile CTA: **Call 423-292-7294**

**Services mega-menu** (shown on hover/focus over "Services"):

| Item | Description |
|---|---|
| Custom Websites | Starter, Growth, and Premium sites |
| Local SEO Setup | Google-ready pages and metadata |
| Copywriting | Clear pages written for your business |
| Logo & Brand | Identity add-ons when you need them |
| Online Store | Commerce, booking, and custom features |
| Hosting Included | For most brochure-style sites |
| Care Plans | Updates, edits, and direct support |
| Quote Builder | Pick options and see the price |

**Mega-menu footer strip:** "Not sure what you need? Build a quick estimate." → button **Build your quote**

---

### Footer [Footer.astro]

- **Tagline:** Affordable websites for Greene County businesses. Clear pricing. Local support. No runaround.
- **Navigation column:** Home · Services · Work · Vs. GoDaddy · About · Contact · Partner Network
- **Contact column:**
  - Greene County, TN
  - hello@madeingreene.com
- **Copyright line:** © {current year} MadeinGreene. All rights reserved.
- **Right-side line:** Proudly built in Greene County, Tennessee.

---

## Home Page [src/pages/index.astro]

> Author note (from prior draft): On the homepage I want it to be clear that we are locally owned and serve the local clientele. We believe that you can DIY, but if you don't have time we want clear pricing and no monthly junk that might be unneeded. Support is local and not overseas. Pricing reflects the local economy and is priced for them — we can definitely charge more but we respect them. I want them to know that I am located in Greeneville, family owned operation. Our goal is to help local businesses navigate the digital landscape without getting taken advantage of by national providers.

### 1. Hero [Hero.astro]

- **Eyebrow chip:** For the businesses that keep Greene County running.
- **Heading (rotating words):** *[adjective]* websites made for Greene County's *[industry]*.
  - Adjective cycles: **Dependable / Reliable / Affordable / Modern**
  - Industry cycles: **contractors / plumbers / electricians / shops / farms / churches**
- **Bullets:**
  - **Affordable and locally made** — built right here in Greene County — not by a national company that has never set foot in town.
  - **Modern, fast, and built to last** — clean code that loads quick on real phones and won't need a rebuild every other year.
  - **Easy to update yourself** — change hours, swap photos, and keep things current without calling a developer.
- **Buttons:**
  - **Get a free quote** → /contact
  - **See pricing** → /services
- Background: looping `/hero.mp4` video with dark overlay.

---

### 2. Why a Website Matters [WhyWebsite.astro]

- **Eyebrow:** Why A Website
- **Heading:** Your website does not have to be pushy to do its job.
- **Sub:** It just needs to answer the questions people already have, help them trust you, and make the next step easy when they are ready.

**Reason 01 — Quick check** — *People want the basics before they reach out.*
Before someone calls, they usually check your hours, your services, your work, and whether you look active. A clear website gives them those answers without making them hunt around.

**Reason 02 — Home base** — *Social pages help, but they are not the whole home base.*
Facebook is useful, but not everyone uses it, and it can be hard to find the exact details people need. Your website is the place you control: your services, your contact info, your story, all in one spot.

**Reason 03 — Trust signal** — *A good site helps a local business look ready.*
You do not need a huge marketing budget to look organized and credible. A clean, fast site shows people you are real, reachable, and ready to do the job.

---

### 3. Greene County Grit Quote [GreeneQuote.astro]

- **Eyebrow:** Greene County grit
- **Pull quote:** "We fight, get beat, rise, and fight again."
- **Attribution:** Nathanael Greene
- Background: same hero video, darker overlay.

---

### 4. Why Choose Us / Services Overview [ServicesOverview.astro]

- **Eyebrow:** Why Choose Us
- **Heading:** Built local, priced clearly, and easy to live with.
- **Sub:** Made in Greene is for local businesses that want a professional website without getting talked into more than they need.
- **Link:** See packages & pricing → /services

**Cards:**
1. **Fast, custom sites without the agency runaround.** — We build lean, modern websites that load quickly and feel polished on real phones. No bloated template stack, no confusing process, no mystery handoff.
2. **Local search basics are handled from the start.** — We set up the fundamentals that help Greene County customers find you: clear page structure, location-aware copy, and consistent business information.
3. **The message sounds like your business.** — We help turn what you do into clear website copy, so visitors can understand your services, your area, and why they should call without reading a novel.
4. **Everyday updates stay simple.** — At handoff, we show you how to change hours, swap photos, and make routine edits without needing a developer for every little thing.
5. **You work with someone local after launch.** — If you want ongoing help, our care plans cover updates, routine changes, and support. If you do not, you still own the site and can take it with you.

---

### 5. Featured Work [FeaturedWork.astro]

- **Eyebrow:** Our Work
- **Heading:** Recent work and sample concepts.
- **Sub:** One live project and a few local-style sample sites that show the kind of work we build.
- **Link:** See all our work → /work
- Pulls the four "featured" projects from `src/data/projects.ts` (FreedomForTate.org plus three sample concepts). Full descriptions live under the **Work Page** section below.

---

### 6. Pricing Preview [PricingPreview.astro]

- **Eyebrow:** Pricing
- **Heading:** Clear prices. No surprises.
- **Sub:** One-time build fee. No monthly fee required. Every package shows exactly what you pay for — and what you don't.

**Plans (condensed):**

| Plan | Price | Description | Features |
|---|---|---|---|
| Starter | $1,500 one-time | A clean, professional presence for businesses that need to look established and easy to contact. | 1–3 pages · Custom design (not a template) · Contact form · Basic local search setup |
| **Growth (Most Popular)** | $3,500 one-time | A fuller site for businesses that need more pages, a blog, and stronger trust signals. | 5–10 pages · Blog or news section · Analytics · Expanded local search setup |
| Premium | $5,000+ one-time | For stores, bookings, memberships, or custom functionality beyond a brochure site. | 10+ pages · Online store or booking · Logo & brand identity · Advanced search strategy |

- Starter / Growth CTA: **Get a free quote** → /contact
- Premium CTA: **Let's talk** → /contact
- **Footer line:** No monthly fee required. Optional care plans from $75/mo. → "See full pricing & what's included" → /services

---

### 7. Testimonials [Testimonials.astro]

- **Eyebrow:** What Clients Say
- **Heading:** From Greene County business owners.
- **Sub:** Real feedback from local businesses we've worked with.

1. "We had a Facebook page but customers kept asking if we had a real website. Brian built us something clean and professional in under two weeks. Now when someone looks us up, we actually look like we know what we're doing."
   — Sarah M., Farm Stand, Greeneville TN
2. "I was skeptical — I'd been burned by a web guy before who disappeared after getting paid. Brian stayed in touch the whole way through, showed me exactly what I was paying for, and answered questions for weeks after launch."
   — Mike T., HVAC Contractor, Greeneville TN
3. "What I appreciated most was the honest pricing. No hidden fees, no upsells I didn't ask for. We knew exactly what we were getting before we signed anything."
   — Pastor James R., Community Church, Mosheim TN

> ⚠️ **Audit flag:** These testimonials read like placeholders. Confirm they're real and that initials/locations are approved before launch.

---

### 8. CTA (bottom of home) [CTA.astro]

- **Heading:** Ready to put your business on the map?
- **Body:** Tell us about your business and what you need. We'll point you to the right package and send a no-pressure quote within 1 business day.
- **Buttons:** Get my free quote → /contact · See what's included → /services

---

## Services Page [src/pages/services.astro]

### Page header

- **Eyebrow:** Services & Pricing
- **Heading:** Honest pricing. No fine print.
- **Sub:** Every package shows exactly what you pay, what's included, and what isn't. No hidden fees, no surprise renewals.

**Trust strip (icons + lines):**
- Based in Greene County, TN
- Real person picks up the phone
- We meet in person — Greeneville, Mosheim, Tusculum & beyond
- Quote back within 1 business day

---

### Package cards

#### Starter — $1,500 one-time
- **Monthly required:** None required
- **Optional care plan:** $75–150/mo for updates, edits, and support
- **Description:** A clear, professional web presence for businesses that need to look established and easy to contact.
- **Specs:** Pages 1–3 · Performance-first build · Mobile-ready: Yes · Hosting: Included* · Search setup: Basic local · Revisions: 1 round
- **Included:**
  - Custom-designed site (not a template)
  - Contact form so customers can reach you
  - Google Maps embed
  - Local SEO setup — meta tags, structured data, Google-ready
  - Accessibility-ready markup (WCAG-friendly)
  - Simple content editor you control
  - Handoff walkthrough (30 min)
- **Not included (you pay separately):**
  - Domain name — ~$12–20/yr, paid to registrar — not us
  - Stock photos — Free options provided. Premium ~$10–100 each
  - Logo design — $500–1,000 add-on
  - Extra training sessions — $150/hr
- **CTA:** Get Started → /contact

#### Growth — $3,500 one-time *(Most Popular)*
- **Monthly required:** None required
- **Optional care plan:** $75–150/mo for updates, edits, and support
- **Description:** A fuller site for businesses that need stronger trust, more pages, and more room to explain what they do.
- **Specs:** Pages 5–10 · Performance-first build · Mobile-ready: Yes · Hosting: Included* · Search setup: Expanded local · Revisions: 2 rounds
- **Included:**
  - Custom-designed site (5–10 pages)
  - Blog or news section
  - Analytics — see who's visiting
  - Social media links
  - Local SEO setup — meta tags, structured data, Google-ready
  - Accessibility-ready markup (WCAG-friendly)
  - Page copywriting — we write all the content
  - Content editor + 1-hour training session
- **Not included:**
  - Domain name — ~$12–20/yr, paid to registrar — not us
  - Stock photos beyond free tier — ~$10–100 each if you want premium
  - Logo design — $500–1,000 add-on
  - Online store / booking — upgrade to Premium
- **CTA:** Most Popular → /contact

#### Premium — $5,000+ one-time
- **Monthly required:** None required
- **Optional care plan:** $75–150/mo for updates, edits, and support
- **Description:** For stores, bookings, memberships, or custom functionality that goes beyond a standard brochure site.
- **Specs:** Pages 10+ · Performance-first build · Mobile-ready: Yes · Hosting: Included* · Search setup: Advanced strategy · Revisions: Unlimited
- **Included:**
  - Custom design, 10+ pages
  - Online store or booking system
  - Logo & brand identity
  - Local SEO setup — meta tags, structured data, Google-ready
  - Accessibility-ready markup (WCAG-friendly)
  - Page copywriting — we write all the content
  - Advanced search and launch support
  - Performance monitoring
  - Full training + written how-to guide
- **Not included:**
  - Domain name — ~$12–20/yr, paid to registrar — not us
  - Payment processing fees — Stripe/Square charge ~2.9% + 30¢
  - Stock photos beyond free tier — ~$10–100 each if you want premium
  - Professional photography — quoted separately
- **CTA:** Let's Talk → /contact

**Asterisk note:** * Most brochure-style small business sites are covered by our included hosting setup. If your project needs paid hosting or extra third-party services, we tell you up front and show you the cost before work starts.

---

### Built into every package

- **Eyebrow:** Built into every package
- **Heading:** No upsells. These come standard.

1. **SEO Built In** — Every page ships with proper meta tags, structured data markup, and a Google-ready sitemap. Not an afterthought — baked in from the first line of code.
2. **Accessibility Ready** — WCAG-friendly markup, semantic HTML, and proper contrast ratios so your site works for everyone — and holds up under screen readers and audits.
3. **We Write the Content** — You tell us what you do, we turn it into clear, professional copy that speaks to your customers. No blank pages for you to stare at — we handle the writing.

**Photographer callout box:**
> **Need photos? Brian is a photographer.**
> As a local business owner himself, Brian offers discounted shoots for Greene County clients — starting from $250. Real photos of your space, team, and work perform significantly better than stock.

---

### Pricing Calculator / Add-On Estimator [PricingCalculator.astro]

- **Eyebrow:** Add-On Estimator
- **Heading:** Want to estimate add-ons?
- **Sub:** Start with a base package, then try the extras your business might need. This gives you a useful ballpark before we send a final quote.

**Group 1 — Start with a package** (radio, choose one)
- *Choose your base — everything else builds on this.*
- Starter Site — $1,500 — 1–3 pages. Custom design, contact form, Google Maps embed, and basic local search setup.
- Growth Site — $3,500 *(Most Popular)* — 5–10 pages. Blog, analytics, expanded local SEO, and 2 rounds of revisions.
- Premium Site — $5,000 — 10+ pages. Unlimited revisions, logo & brand identity, and advanced SEO strategy.

**Group 2 — Design & Brand** (multi-select)
- *Make your business look the part everywhere customers find you.*
- Logo & Brand Identity — $750 — Custom logo, color palette, and font pairing — everything to look consistent across print and digital.
- Brand Style Guide — $400 — A one-page reference that keeps your brand consistent on signage, social, and any future work.
- Professional Photography — $400 — On-site shoot for product, team, or location photos. Priced per session in Greene County.

**Group 3 — E-commerce & Bookings** (multi-select)
- *Take orders, appointments, or memberships directly through your site.*
- Online Store — $1,200 — Up to 50 products with checkout and inventory basics. Payment processing fees go direct to Stripe.
- Booking & Scheduling — $800 — Let customers book appointments online. Syncs with Google Calendar or your calendar app.
- Membership / Subscriptions — $1,000 — Gated content, member logins, or recurring billing — for gyms, clubs, or subscription services.

**Group 4 — Marketing & Visibility** (multi-select)
- *Get found, build trust, and stay top-of-mind with the right people.*
- Google Business Profile — $200 — We claim, verify, and fully optimize your listing so you show up on Google Maps and local searches.
- Social Media Starter Kit — $300 — Branded profile graphics and a posting template for Facebook, Instagram, and Google.
- SEO Audit & Keyword Strategy — $500 — A full report on how you rank today, which keywords to target, and a 90-day action plan.
- Email Newsletter Setup — $400 — Mailchimp or similar, configured with a branded template and a signup form on your site.
- Google Ads Campaign Setup — $600 — We build and launch your first campaign. Ad spend is separate and billed directly by Google.
- Facebook / Instagram Ads Setup — $500 — Audience targeting, ad creative, and your first campaign launched. Ad spend is separate.

**Group 5 — Ongoing Monthly Services** (multi-select)
- *Keep your site healthy and your marketing active without doing it yourself.*
- Essential Care Plan — $75/mo — Hosting, monthly checkup, up to 30 min of edits/month, and direct email support.
- Growth Care Plan — $150/mo — Everything in Essential plus 2 hrs of changes/month, monthly ranking report, and priority support.
- Social Media Management — $400/mo — 2 posts per week across your platforms. We write, design, and schedule everything.
- Monthly SEO Reporting — $150/mo — A plain-English breakdown of your rankings, traffic trends, and what to focus on next.

**Sidebar summary:**
- "Your Estimate" · "0 items"
- Empty state: "Pick a package above to get started."
- "One-time total" / "+ monthly"
- Button: **Get this quote →** → /contact
- Fine print: "Free. No commitment. Back within 1 business day."
- Link: "Clear all selections"

---

### Add-Ons section (flat list)

- **Eyebrow:** Add-Ons
- **Heading:** Need a little extra?
- **Sub:** Add any of these to your package. Just say the word.

| Add-On | Price |
|---|---|
| Logo & Brand Identity | $500–1,000 |
| Google Business Profile Setup | $200 |
| Social Media Starter Kit | $300 |
| Page Copywriting (per page) | $75–150 |
| Professional Photography | From $250 (local discount) |
| Email Setup (Your Own Domain) | $150 |
| Extra Training Session (1 hr) | $150 |
| Monthly Care Plan | $75–150/mo |

> ⚠️ **Audit flag:** Logo & Brand Identity is listed at $500–1,000 here but $750 in the calculator above. Pick one.
> ⚠️ Photography is "From $250" here, "$400" in the calculator, and "Starting from $250" in the photographer callout. Reconcile.

---

### Training

- **Eyebrow:** Training
- **Heading:** We teach you how to run it.
- **Sub:** Every site we build comes with training — not a 40-page PDF, but a real sit-down where we walk through everything you can update yourself. If you want more, we're happy to help.

- **Starter — 30-min handoff:** A walkthrough of your site and editor. How to change hours, swap a photo, update a page. Included at no extra charge.
- **Growth & Premium — 1-hour training:** In-depth session covering the editor, blog posts, image optimization, and basic SEO. Bring questions — we'll record it if you want to revisit.
- **Add-on — Extra session — $150/hr:** Bring on a new employee? Forgot how something works? Book another hour whenever you need it — no monthly commitment.

---

### Monthly Care Plans

- **Eyebrow:** Monthly Care Plans
- **Heading:** We keep it running. You keep growing.

**Essential — $75/mo**
- Hosting for most brochure-style sites
- Monthly checkup
- Up to 30 min of changes/month
- Direct email support
- Priority response to any site issues

**Growth — $150/mo**
- Everything in Essential
- Up to 2 hours of changes/month
- Monthly search ranking report
- Priority support
- See your visitor numbers anytime

> ⚠️ Older draft mentioned "Keeps your 3-year guarantee active" on the Essential plan. Currently the page does **not** say that. Confirm whether the 3-year guarantee is still part of the offer (the standalone Guarantee component exists but isn't used on any page).

---

### FAQ

- **Eyebrow:** FAQ
- **Heading:** The questions most people ask before they reach out.

1. **Do I need to have all my content ready before I reach out?**
   No. If you know what your business does and what you want the site to help with, that is enough to start. We can help you organize the rest.
2. **Is hosting included?**
   For most brochure-style small business sites, yes. If your site needs paid hosting or third-party software, we show that cost before work starts.
3. **Is the domain name included?**
   No. We recommend you buy the domain directly so it stays in your name. We can help you choose it and get it connected.
4. **Can I edit the site myself?**
   Yes. Every build includes a handoff session and editor access for routine updates like hours, photos, and text.
5. **Do you write the page content?**
   Yes — we write all of it. You tell us what you do, who your customers are, and what makes you different. We turn that into clear, professional copy. You review it and we make it right. No blank pages, no guessing.
6. **Can you take photos of my business?**
   Yes. Brian is a photographer and offers discounted shoots for Greene County clients starting from $250. Real photos of your space, your team, and your work connect with local customers far better than stock images.
7. **Is this WordPress?**
   Not by default. We use a leaner setup designed to stay fast, easier to manage, and less dependent on plugins.
8. **Are you actually based in Greene County?**
   Yes — we live and work here. We're not an agency in Columbus or a freelancer overseas. That means we know the area, we're reachable by phone, and we're not going anywhere.
9. **Can we meet in person?**
   Absolutely. We're happy to meet at your business, a coffee shop in Greeneville, or wherever is easiest. A lot of our best projects start with a 30-minute conversation.

Page ends with the shared **CTA** block (see Home → CTA).

---

## Work Page [src/pages/work.astro]

- **Eyebrow:** Our Work
- **Heading:** Recent work and sample concepts.
- **Sub:** A live project plus a few local-style sample sites to show the kind of work we build for farms, trades, shops, and small organizations.

**Projects (from src/data/projects.ts):**

### FreedomForTate.org — *Non-profit & Advocacy*
A donation-friendly advocacy site built to raise awareness and support for a local cause with clear calls to action and a simple path to get involved.
- Donation and contact forms front and center
- Mobile-friendly for supporters on the go
- Fully owned by the organization

### Farm Stand Sample Concept — *Farm & Agriculture*
A sample site for a local farm stand that needs clear hours, seasonal updates, and an easy way for customers to see what is available this week.
- Clear hours, location, and contact info
- Simple produce or order inquiry flow
- Owner-friendly updates for specials and seasonal changes

### Trade Services Sample Concept — *Trades & Contracting*
A sample site for a local contractor who needs to look established online, explain services clearly, and make quote requests easy from a phone.
- Clear quote request form
- Service-area and trust-building details up front
- Mobile-first layout for customers on the go

### Restaurant Sample Concept — *Food & Hospitality*
A sample site for a local restaurant that needs menu updates, clear directions, and a better first impression than an outdated builder site.
- Easy menu and hours updates
- Directions, contact info, and call button front and center
- Built to replace an outdated DIY site

**Closing band:**
Want to see something specific, or have a project in mind? We're happy to walk you through more examples and talk through what'd work for your business.
→ **Start a conversation** → /contact

Page ends with the shared **CTA** block.

---

## About Page [src/pages/about.astro]

### Page header

- **Eyebrow:** About Us
- **Heading:** A family-operated agency built for Greeneville and beyond.
- **Body (two paragraphs):**
  - Made in Greene is a family-operated website agency in Greeneville, Tennessee. Brian is the owner and operator, bringing more than 15 years of professional experience designing and developing websites for organizations that need dependable, thoughtful digital work.
  - Brian also works in higher-education technology while running Made in Greene part-time. That balance shapes the way we serve local businesses: practical advice, affordable rates, clear communication, and a finished product we would be proud to put our family name on.

**Family photo caption box (overlapping image):**
- **The Family Behind Made in Greene**
- Brian, Domenique, and Mason - local roots, practical service, and a heart for small business.

---

### Our Story

- **Eyebrow:** Our Story
- **Heading:** Local service, real experience, and a family name behind the work.
- **Body (three paragraphs):**
  - Brian believes small businesses are part of what makes this country work. The goal of Made in Greene is simple: give business owners access to high-quality websites and honest guidance without pricing them like a national corporation.
  - Domenique brings more than 10 years of experience supporting C-suite executives at Verizon's corporate headquarters. Today she spends her time homeschooling our son, Mason, spreading the word about Made in Greene, helping manage projects, and answering questions from the businesses we serve.
  - And Mason? He is our future mayor. For now, he is a daily reminder of why local matters: the work we do should help build the kind of place families are proud to call home.

---

### What we stand on (Values)

- **Eyebrow:** How We Work
- **Heading:** What we stand on.

1. **Family-Operated** — When you work with Made in Greene, you are working with a local family that cares about your business, your reputation, and the community we share.
2. **Affordable Without Cutting Corners** — We keep rates realistic for small businesses while still delivering clean design, solid development, and thoughtful service.
3. **Built for Small Business** — Small businesses are the backbone of our towns and our country. We build websites that help them look established, get found, and grow with confidence.
4. **Tennessee First** — Made in Greene believes in keeping good work close to home and supporting the people who keep Tennessee moving.

---

### The Tools We Use

- **Eyebrow:** The Tools We Use
- **Heading:** Modern tools. Old-fashioned work ethic.
- **Sub:** We use a lean modern setup instead of plugin-heavy builders, so your site stays easier to manage and easier to trust.

1. **Performance-First Build** — A lightweight setup focused on speed, clarity, and reliability on real phones and real connections.
2. **Simple Content Editor** — A clean dashboard where you can change text, swap photos, and update your hours. If you can use email, you can use this. No code, no headaches.
3. **Reliable Hosting Setup** — Secure hosting for most brochure-style sites, plus ongoing updates available if you want us handling the technical side.

Page ends with the shared **CTA** block.

---

## Contact Page [src/pages/contact.astro]

### Left column

- **Eyebrow:** Get In Touch
- **Heading:** Tell us about your business.
- **Body:** Tell us what you do and what you want the site to help with. We'll recommend the best fit and send a no-pressure quote within 1 business day.

**Contact details:**
- **Email:** hello@madeingreene.com
- **Location:** Greene County, Tennessee
- **Response Time:** Within 1 business day

**"What happens next" box:**
- We read through your note and figure out what kind of site fits best.
- We recommend a package or tell you if a custom quote makes more sense.
- We send a free quote within 1 business day.
- You do not need your photos, wording, or package picked out before reaching out.

---

### Form (right column)

| Field | Label | Placeholder | Required |
|---|---|---|---|
| name | Name | Your name | Yes |
| email | Email | you@example.com | Yes |
| business | Business Name | Your business name | No |
| package | What are you looking for? | Pick one… (Starter $1,500 / Growth $3,500 / Premium $5,000+ / Not sure yet — just want to talk) | No |
| message | Tell us about your business | What do you do? What would you want your website to help with? | Yes |

- **Submit button:** Get My Free Quote
- **Fine print under button:** Free quote. No pressure. You do not need all your content ready yet.

> ⚠️ Form has no `action` / Netlify handler attached — submissions don't go anywhere yet. Flag for build, not copy.

---

## Compare / Vs. GoDaddy Page [src/pages/vs-godaddy.astro]

### Page header
- **Eyebrow:** The Comparison
- **Heading:** Why not just use GoDaddy?
- **Body:** It's a fair question. Entry-level DIY builder pricing can sound great until renewals, add-ons, and limitations show up. That does not make it bad. It just makes it a different choice.

---

### What they sell you. What they don't.
- GoDaddy's website builder is a subscription product. For some businesses, that is a fine fit. You trade a lower upfront cost for a more DIY setup, a platform-based workflow, and a stack of add-ons or upgrades if your needs grow.
- Hiring a local shop like us is a different model. You are paying for a site to be planned, written, designed, and built around your business instead of assembled by you inside a template builder.

---

### Side-by-side comparison

- **Eyebrow:** Side by Side
- **Heading:** The honest comparison.

| What you're comparing | GoDaddy | MadeinGreene |
|---|---|---|
| Pricing model | Lower upfront cost with ongoing subscription pricing and add-ons | One-time build with optional care plan |
| How it gets built | DIY website builder with templates | Custom site built for your business |
| Ownership | Your domain can be yours, but the builder experience stays tied to the platform | You own your domain and site files |
| Editing after launch | You handle edits inside the builder | Edit it yourself or have us help |
| Local search setup | DIY tools and paid add-ons | Done-for-you setup as part of the build |
| Support | Large support organization | Direct local support |
| Best fit | Good for fast DIY launches | Good for businesses that want it built for them |
| Design flexibility | Template-based | Built around your brand and goals |

**Footnote:** Platform features and pricing change often, so it is worth checking current details directly before you compare.

---

### Two paths online

- **Eyebrow:** Two Paths Online
- **Heading:** What you're really choosing between.
- **Sub:** This is less about one company being good or bad, and more about which setup fits how you want to work.

**Option A — DIY builder route**
*Best when you need something online quickly and you are comfortable building it, editing it, and managing the tradeoffs yourself.*
- Lower entry cost
- Template-based design
- You do most of the setup and ongoing changes
- Good for simple DIY launches

**Option B — Done-for-you local route**
*Best when you want a site that feels professional, fits your business, and comes with a local person to talk to if you need help.*
- Custom build around your business
- Clear upfront pricing
- Local search setup handled with you
- Direct support after launch if you want it

---

### Where GoDaddy does make sense

- **Heading:** Where GoDaddy does make sense
- **Sub:** We don't think they're villains. A few honest cases where they're the right call.

1. **You just need to park a domain name** — GoDaddy's fine for buying and holding a domain. So is Cloudflare, Namecheap, or Porkbun — often cheaper. Buy your domain there; don't let anyone else hold it for you.
2. **You want a one-page site up tonight and you'll never touch it again** — Drag-and-drop builders are quick. If you genuinely need something live in the next hour and the budget is zero, go for it. Know what you're getting.
3. **You're testing an idea and might abandon it** — For a side project you're not sure will stick, the low first-year cost makes sense. Just remember to cancel before the renewal hits if it doesn't pan out.

**Closing line:** If your business is any of those, we'll tell you honestly — and send you on your way. For everything else, there's a better way.

Page ends with the shared **CTA** block.

---

## Network / Partner Network Page [src/pages/network.astro]

### Hero
- **Eyebrow:** Made in Greene Partner Network
- **Heading:** Local websites, local exposure, and neighbors helping neighbors.
- **Body:** A free network of Greene County businesses designed to help local farms, shops, makers, restaurants, service providers, and organizations get discovered online and in person.
- **Button:** Join the network for free → #join

---

### How It Works
- **Eyebrow:** How it works
- **Heading:** A simple way to share local visibility.

1. **Get listed for free** — Eligible Greene County businesses can join at no cost. We review each submission, confirm the details, and add approved listings to the network.
2. **Get found online** — Each listing can include your business name, category, short description, location, website, social link, and a Made in Greene badge when applicable.
3. **Promote each other** — Partners can share the network through tasteful website links, QR code cards, counter displays, and local recommendations.

---

### Included at No Cost
- **Eyebrow:** Included at No Cost
- **Heading:** More than a listing. A small local ecosystem.
- **Body:** When you work with Made in Greene, you can become part of a local business network designed to help Greene County businesses promote each other online and in person. Participation is optional and free for eligible local businesses.

**Benefits list:**
- Free listing on the Made in Greene Partner Network page
- Optional website badge and footer credit
- Opportunities for local cross-promotion
- Access to shared QR code cards and counter displays
- Social media spotlight opportunities
- Local referral opportunities when a trusted business is needed

---

### Online and In Person
- **Eyebrow:** Online and In Person
- **Heading:** Built for real-world local discovery.

**Card 1 — Tasteful website placement**
Made in Greene clients can include an optional footer note or badge that links back to this network. We keep it subtle so your website still feels like your website.
- *Preview box:* "Built locally by Made in Greene. Part of the Made in Greene Partner Network supporting local businesses across Greene County, TN."

**Card 2 — Shared QR cards and displays**
Physical locations can use a simple counter card or QR display that sends customers to the network page, making it easy to discover other local businesses.
- *Preview box:* "Explore Greene County Local Businesses. Farms. Shops. Services. Events. Makers. A local network powered by Made in Greene."

---

### Member Businesses
- **Eyebrow:** Member Businesses
- **Heading:** Greene County businesses worth knowing.

**Empty-state (current — list in `src/data/network.ts` is empty):**
- **Headline:** Greene County's best-kept secret could be yours.
- **Body:** No businesses listed yet. Be one of the first local partners customers see as this network grows.
- **Button:** Join for free → #join

---

### Join the Network form (`#join`)
- **Eyebrow:** Join the Network
- **Heading:** Join the Partner Network. Free.
- **Body:** No cost, no recurring fees, and no paid tiers. We review each submission to keep the network local, useful, and trustworthy.

**Form fields:**
| Field | Required | Placeholder / options |
|---|---|---|
| Business Name | yes | Greene Valley Hardware |
| Your Name | yes | Sarah Miller |
| Business Category | yes | Farm & Agriculture · Farms & Food · Local Shops · Family Activities · Home Services · Creative Services · Events & Tourism · Nonprofits · Wellness · Restaurants & Cafes · Professional Services · Other |
| Email Address | yes | sarah@example.com |
| Website | no | https://yoursite.com |
| Phone | no | (423) 555-0100 |
| Social Link | no | https://facebook.com/yourbusiness |
| Tell us about your business | no | What do you do, who do you serve, where are you located? |

**Checkboxes:**
- You may contact me for our logo, listing details, and approval before publishing.
- I am interested in a free QR card or counter display for my location.

- **Submit button:** Apply to Join for Free
- **Fine print under button:** Participation is optional and does not guarantee traffic or sales. It is designed to increase local visibility and encourage community support.

---

## Unused content (built but not wired into any page yet)

These components exist in the codebase and may be planned for use later. Including their copy here so we don't lose it during the audit.

### Process [Process.astro] — *not currently rendered*

- **Eyebrow:** How It Works
- **Heading:** No runaround. No fine print.
- **Sub:** Four steps. That's it. We keep the process as straightforward as the people we serve.

1. **01 — We Talk** — Tell us about your business — what you do, who your customers are, and what you need. No tech talk, just a straight conversation over coffee or a phone call.
2. **02 — We Build It** — We design and build your site from scratch. You'll see it take shape along the way and have a chance to say 'change this' before anything goes live.
3. **03 — We Hand You the Keys** — Your site is ready. We walk you through how to update it yourself — it's simpler than you think. You're in control from day one.
4. **04 — You Grow. We've Got Your Back.** — Your site is live and bringing in customers. We stick around for hosting, updates, and support. You focus on what you do best.

---

### Why Us / The Specifics [WhyUs.astro] — *not currently rendered*

- **Eyebrow:** The Specifics
- **Heading:** What you actually get, spelled out.
- **Sub:** Enough with the trust talk. Here are the details most web shops won't put on their homepage — timeline, ownership, revisions, and how to reach us when you need to.

| Spec | Value | Title | Description |
|---|---|---|---|
| Timeline | Usually 2–4 weeks | Most sites launch in 2 to 4 weeks. | We kick off with a conversation, design within the first week, build in the second, and review with you before anything goes live. Starter sites are usually up inside 14 days. |
| Ownership | 100% yours | It's yours to keep. | Your website, your content, and your domain stay in your name. If you ever want to move the site elsewhere, it goes with you. |
| Revisions | Included | Revisions are built in. | 1 round on Starter, 2 rounds on Growth, unlimited on Premium. We'd rather get it right before launch than argue about it after. Changes after launch go through the care plan or billed hourly — no surprise invoices. |
| Support | Direct support | Call, text, or email us. | Not a ticket queue, not a chatbot. You'll hear from an actual person, usually within 1 business day. Care plans get priority, but everyone gets answered. |

**Footer line:** Hosting is included for most brochure-style small business sites. If your project needs paid hosting or third-party tools, we'll show you the cost before we start.

---

### 3-Year Guarantee [Guarantee.astro] — *not currently rendered*

- **Eyebrow:** Our Promise
- **3 Year Guarantee** (visual)
- **Heading:** Built so you should not need a rebuild in two years.
- **Body:** For brochure-style small business sites on an active care plan, if the original build needs a full rebuild within 3 years just to stay secure and functional, we handle it at no rebuild fee.
- **Buttons:** See guarantee details → /services#guarantee · Why not GoDaddy? → /vs-godaddy

> ⚠️ The Guarantee section links to `/services#guarantee`, but the services page has no `#guarantee` anchor and no full guarantee detail block. Decide: ship the guarantee or remove the component.

---

## Audit checklist (things to confirm while editing)

- [ ] **Phone number** — `423-292-7294` only appears in the header. Add to footer / contact page? Or remove if it's not the right number.
- [ ] **Testimonials** — confirm these are real quotes from real clients before launch.
- [ ] **Pricing reconciliation** — Logo & Brand price varies ($500–1,000 vs $750), Photography varies ($250 vs $400), Care plan range vs Essential $75 specifically. Pick canonical numbers.
- [ ] **3-Year Guarantee** — decide whether it's part of the offer. If yes, add a detailed section to /services with a `#guarantee` anchor. If no, delete the Guarantee component and remove the "Keeps your 3-year guarantee active" line from any care plan copy.
- [ ] **Process component** — currently unused; either add to home or services, or delete.
- [ ] **WhyUs / The Specifics component** — currently unused; same call as above.
- [ ] **Contact form submission** — has no backend. Decide on Netlify Forms, Formspree, or a custom handler.
- [ ] **/quote** — currently 301 redirects to /services#quote-builder. Confirm that's still the desired behavior or whether quote should be its own page.
- [ ] **Network page** — member list is empty (`networkMembers: []`). Plan to seed it before the page goes live in nav.
- [ ] **"We Write the Content"** — Starter package doesn't include copywriting in the included list, but the FAQ and the "Built into every package" band say we write all the content. Reconcile.
