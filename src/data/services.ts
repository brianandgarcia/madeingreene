/*
  WHAT WE OFFER (/services) — mid-market redesign.
  Copy only; layout is in src/pages/services.astro. The engagement phases and
  the three kinds of work are shared with the homepage (src/data/home.ts).
  "[PLACEHOLDER: ...]" renders as a visible tag until Brian confirms it.
*/

export const seo = {
  title: "What We Offer: Custom Websites, Integrations & Automation",
  description:
    "Custom website design and development, software integrations and business automation for established companies, from a free walkthrough to a fixed-price build and ongoing support.",
};

export const header = {
  eyebrow: "What We Offer",
  title: "Custom websites, integrations and automation.",
  subtitle:
    "One team designs your website, connects it to the software you already run, and automates the work in between. Every engagement starts with a free walkthrough and a fixed price.",
};

/* Jump links under the header */
export const jumps = [
  { label: "How an engagement works", href: "#engagement" },
  { label: "What we build", href: "#build" },
  { label: "Included in every project", href: "#included" },
  { label: "Marketing services", href: "#found" },
  { label: "Questions", href: "#faq" },
  { label: "Small business packages", href: "/small-business" },
];

/* Deeper detail per kind of work, keyed to the homepage lanes by number. */
export const buildDetail = [
  {
    number: "01",
    question: "When it fits",
    text: "Your customers, dealers or staff need to do something on the site, not just read it: get a price, check a status, place a request, find the right product.",
  },
  {
    number: "02",
    question: "When it fits",
    text: "The same information lives in two or more places and someone keeps them in step by hand. We connect them so it's entered once.",
  },
  {
    number: "03",
    question: "When it fits",
    text: "A task happens the same way every time and still depends on someone remembering to do it. We hand it to software and keep a person in charge of the exceptions.",
  },
];

export const proofLine = {
  text: "Running now: Echo Station's tap list syncs from Untappd and its events sync from Google Calendar.",
  link: { label: "See the case study", href: "/work/echo-station" },
};

export const included = {
  eyebrow: "Included in Every Project",
  title: "The craft doesn't change with the scope.",
  items: [
    { name: "Custom design", text: "Designed for your business from a blank page. No templates." },
    { name: "Copy written for you", text: "We interview your team and write the words. You review and approve." },
    { name: "On-location photography", text: "Real photos of your people, place and work, shot by us." },
    { name: "Accessibility", text: "Built to WCAG 2.1 AA: keyboard navigation, contrast, labels, alt text." },
    { name: "Search foundations", text: "Titles and descriptions, clean headings, structured data, sitemap and Search Console." },
    { name: "Performance", text: "Lightweight builds that load fast on real phones and real connections." },
    { name: "Staff training", text: "Hands-on training for the people who will use and update it." },
    { name: "You own it", text: "Your domain, content and site files stay in your name." },
  ],
};

export const terms = {
  eyebrow: "Pricing",
  title: "A fixed price, agreed before the build.",
  body: [
    "We start with a free walkthrough of your business, then send a written proposal with a fixed price. Every integration and automation is its own line item, so you can see what each piece costs and choose what to build now and what to save for later.",
  ],
  rows: [
    { label: "Systems Walkthrough", value: "Free. 60 to 90 minutes on site, followed by a written fixed-price proposal." },
    { label: "Connected Website", value: "From $8,000. A custom website with one simple integration included. Additional integrations and automations are quoted as their own line items." },
    { label: "Run", value: "$300/month ($3,000/year). Hosting, monitoring, security updates, integration upkeep and up to 2 hours a month of support. Profile Care and Ads Management can be added at their own prices." },
    { label: "Improve", value: "$750/month ($7,500/year). Everything in Run, plus up to 5 hours a month of new features and automations, priority turnaround, a monthly review call and Google Business Profile Care. Ads Management can be added at its own price." },
    { label: "Plan terms", value: "6-month minimum, then month to month with 30 days' notice. Pay annually and save two months. Included hours don't roll over." },
    { label: "Payment schedule", value: "40% at signing, 30% at design approval, 30% at launch" },
    { label: "Out-of-scope work", value: "$150/hour, approved before it starts" },
    { label: "Warranty", value: "90 days after launch on custom builds" },
    { label: "Third-party costs", value: "Software subscriptions, API fees and other third-party costs are billed to you directly by the provider" },
  ],
  /* Typical line items in a Design & Build quote, from the pricing sheet. */
  lineItemsTitle: "Typical line items in a build",
  lineItems: [
    { label: "Connected Website", detail: "Design, copy, photography, up to 10 pages, training, plus one simple integration", price: "From $8,000" },
    { label: "Additional page", detail: "Design and content for each page beyond 10", price: "$200 per page" },
    { label: "Simple integration", detail: "One-way sync, e.g. form to CRM, calendar, menu or inventory feed", price: "$1,500 – $2,500 each" },
    { label: "Standard integration", detail: "Two-way sync, e.g. CRM, inventory, booking, payments", price: "$3,000 – $6,000 each" },
    { label: "Complex integration", detail: "Accounting or ERP, customer or dealer portal", price: "Quoted per project" },
    { label: "Automation", detail: "E.g. lead routing, follow-ups, scheduled reports", price: "$1,000 – $3,000 each" },
  ],
};

/* Advertising and Google Business Profile services. Wording is final (Brian, 2026-10-18). */
export const found = {
  eyebrow: "Getting Found",
  title: "Google Business Profile and Google Ads.",
  body:
    "Paid marketing and local visibility, available with any website we build, from a small-business package to a custom build.",
  /* Short version for the homepage */
  teaser: {
    title: "Get found on Google, too.",
    body: "Once the site is built, we can manage your Google Business Profile and your Google Ads, so the people searching for what you do find you first.",
    link: { label: "See marketing services and pricing", href: "/services#found" },
  },
  services: [
    {
      name: "Google Business Profile Setup",
      price: "$400, one-time (add-on to any package)",
      short: "$400 one-time",
      summary: "Your profile claimed, cleaned up and filled in, with photos from your shoot.",
      text: "We claim or clean up your Google Business Profile, set your categories, services and hours, write your business description, and add professional photos from your shoot. You own the profile, and we're added as a manager.",
    },
    {
      name: "Google Business Profile Care",
      price: "$200/month, 3-month minimum",
      short: "$200/month",
      summary: "Posts, fresh photos, review replies and a monthly report.",
      text: "Two posts a month, new photos each quarter, review replies written for your approval, and a short monthly report on calls, direction requests and website clicks.",
    },
    {
      name: "Google Ads Management",
      price: "$750 setup, then $400/month or 15% of ad spend, whichever is higher. 3-month minimum.",
      short: "$750 setup, then from $400/month",
      summary: "Paid search campaigns built, tracked and managed, on an ad account you own.",
      text: "Setup covers the account structure, keywords, ad copy, and tracking for calls, forms and bookings. Each month we manage bids, keywords and ads, and send a short report on what the spend brought in. Ad spend is paid by you directly to Google from an account you own. We recommend at least $500 a month in ad spend.",
    },
  ],
  note:
    "Custom builds: the Improve plan ($750/month) includes Profile Care. Ads Management can be added to Run or Improve at the price above, and ad spend is always paid by you directly to Google.",
};

export const faqs = [
  {
    question: "Do we have to replace the software we already use?",
    answer:
      "Usually not. Most projects connect the tools you already pay for. If something truly isn't working for you, we'll say so and why.",
  },
  {
    question: "What if our software doesn't have an API?",
    answer:
      "Many tools still offer exports, email notifications, webhooks or scheduled reports we can work from. We'll tell you during the walkthrough what's possible and what isn't.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most Connected Website projects take 6 to 12 weeks, depending on the integrations. Your proposal includes the timeline along with the price, before you commit to anything.",
  },
  {
    question: "What happens after launch?",
    answer:
      "On a Run & Improve plan we host the site, watch every integration, apply security updates, review what's working with you each month, and keep building as the business changes.",
  },
  {
    question: "Who owns the website and the code?",
    answer: "You do. Your domain, your content and your site files stay in your name.",
  },
  {
    question: "Who will we actually work with?",
    answer:
      "The people designing the site and writing the code. There are no account managers or outsourced developers in between.",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes. We're based in Greeneville and we come to you, both to understand how the work gets done and to photograph the business.",
  },
];

/* Small-business packages now live on their own page (/small-business). */
export const smallBusinessBand = {
  eyebrow: "Small Business Packages",
  title: "Smaller business? Our website packages have their own page.",
  body: "Fixed-price websites for new and small businesses, from $1,750, with a local photo session and copy written for you.",
  cta: { label: "See the small business packages", href: "/small-business" },
};
