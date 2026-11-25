/*
  INTEGRATIONS PAGE CONTENT (/integrations).

  This was the mid-market homepage. It now lives under Services as an extra
  for businesses whose website needs to talk to the software they already run.
  No prices are published here: every integration is quoted after a free
  walkthrough.
*/

export const walkthroughUrl = "/contact?interest=walkthrough#contact-form";

export const seo = {
  title: "Custom Website Integrations in Greeneville, TN",
  description:
    "Custom website integrations for Greeneville and East Tennessee businesses: connect your site to your CRM, calendar, inventory, menu or accounting tools so information is entered once.",
};

export const hero = {
  eyebrow: "Website Integrations",
  title: "Custom website integrations in",
  titleAccent: "Greeneville, TN.",
  body:
    "Your website, wired into the way your business actually runs. We connect your site to the tools your team already uses, so information is entered once and shows up everywhere it should.",
  primary: { label: "Book a Free Walkthrough", href: walkthroughUrl },
  secondary: { label: "See How It Works", href: "#engagement" },
  /* The systems map. `x`/`y` are percentages of the map box; the website sits
     in the middle and every node is wired back to it. */
  nodes: [
    { label: "CRM", detail: "Leads land with a source and an owner", x: 15, y: 24 },
    { label: "Scheduling", detail: "Bookings and crews in one calendar", x: 85, y: 22 },
    { label: "Inventory / ERP", detail: "What's in stock, shown live", x: 87, y: 56 },
    { label: "Accounting", detail: "Quotes turn into invoices", x: 70, y: 80 },
    { label: "Email & SMS", detail: "Follow-ups that send themselves", x: 25, y: 78 },
    { label: "Reporting", detail: "Monday numbers in your inbox", x: 11, y: 50 },
  ],
  proof: {
    label: "Running now at Echo Station",
    text: "All 40 taps sync from Untappd. Events sync from Google Calendar.",
    href: "/work/echo-station",
  },
};

export const capabilities = {
  eyebrow: "What We Build",
  title: "Three kinds of work, usually in the same project.",
  lanes: [
    {
      number: "01",
      icon: "gear",
      name: "Custom features",
      summary:
        "The parts of your site that do something specific to your business, built for it rather than bolted on from a plugin.",
      examples: [
        "Product finders and configurators",
        "Quote and pricing calculators",
        "Searchable catalogs and listings",
        "Customer, dealer or vendor portals",
        "Booking and service requests",
        "Order, job or project status lookup",
      ],
    },
    {
      number: "02",
      icon: "belt",
      name: "Integrations",
      summary:
        "Your website talks to the software you already pay for, so information is entered once and shows up everywhere it should.",
      examples: [
        "CRMs such as HubSpot, Pipedrive or Salesforce",
        "Google Calendar and Microsoft 365 calendars",
        "MLS, menu, tap list and inventory feeds",
        "QuickBooks and other accounting tools",
        "Stripe and other payment processors",
        "Any tool with an API, and some without one",
      ],
    },
    {
      number: "03",
      icon: "arm",
      name: "Automations",
      summary:
        "The small jobs that eat a week, handed to software that never forgets, with a person still in charge of anything that matters.",
      examples: [
        "Lead routing and instant first replies",
        "Review requests after a finished job",
        "Weekly reports delivered to your inbox",
        "Availability and pricing kept current on the site",
        "Quote-to-invoice and onboarding handoffs",
        "Alerts when something needs a human",
      ],
    },
  ],
};

/* "When it fits" line per lane, matched by number. */
export const buildDetail = [
  {
    number: "01",
    question: "When it fits",
    text: "Your customers need to do something on the site, not just read it: find the right product, get a price, check a status, place a request.",
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

export const proof = {
  eyebrow: "Already Running",
  title: "A website that updates itself.",
  client: "Echo Station · Greeneville, Tennessee",
  body: [
    "Echo Station is a pour-your-own taproom with forty taps that rotate constantly and something on most nights. Keeping a website current on all of it by hand is a second job.",
    "So the site keeps itself current. A custom integration pulls what's pouring straight from their Untappd account, with brewery, style, ABV and label art for all forty taps. Events come from the Google Calendar the owners already use. Nobody retypes anything.",
  ],
  points: [
    { value: "40", label: "taps synced live from Untappd" },
    { value: "0", label: "second systems to keep in step" },
  ],
  image: {
    src: "/echo-station-tap-list.jpg",
    alt: "Echo Station's Pouring Now page, listing every beer on the wall with brewery, style, ABV and IBU, pulled live from Untappd",
  },
  link: { label: "Read the Echo Station case study", href: "/work/echo-station" },
  note:
    "The same approach works for real estate listings, a menu, a service schedule or a product catalog.",
};

/* More integrations running on sites we've built. */
export const moreExamples = {
  title: "More integrations we've built",
  items: [
    {
      client: "Greeneville & Co",
      text: "Their MLS listings are built natively into the website, with no embedded widgets, so every listing looks and searches like the rest of the site.",
    },
    {
      client: "Hydra ThrIVe",
      text: "A drip finder tool that walks visitors to the right IV treatment for how they feel.",
    },
  ],
};

export const engagement = {
  eyebrow: "How It Works",
  title: "One walkthrough, one build, one team that keeps it running.",
  body:
    "Every integration project starts with a free walkthrough of how work actually moves through your business. You get a written proposal and a fixed price before anything is built.",
  phases: [
    {
      number: "01",
      name: "Walkthrough",
      length: "60 to 90 minutes, on site",
      items: [
        "We walk through how work moves through your business",
        "We note where information gets retyped or lost",
        "We tell you plainly what's worth connecting and what isn't",
        "You get a written, fixed-price proposal, with no obligation",
      ],
    },
    {
      number: "02",
      name: "Design & Build",
      length: "6 to 12 weeks",
      items: [
        "A custom-designed website, written for you",
        "The integrations and automations from your proposal",
        "Testing against your real accounts and data",
        "Training for your staff, and you own your domain and site files",
      ],
    },
    {
      number: "03",
      name: "Run & Improve",
      length: "Monthly",
      items: [
        "Hosting, monitoring and security updates",
        "We watch every integration and fix it if a vendor changes theirs",
        "A standing review of what's working",
        "New features and automations as the business changes",
      ],
    },
  ],
};

/* Shown under the phases so someone who just needs a website isn't lost here. */
export const websiteNudge = {
  text: "Just need a great website? That's most of what we build.",
  link: { label: "See custom websites", href: "/custom-websites" },
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
    question: "Can you add an integration to the website we already have?",
    answer:
      "Sometimes. It depends on how the site is built. We'll look at it during the walkthrough and tell you whether adding to it or rebuilding makes more sense.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most integration projects take 6 to 12 weeks, depending on what's being connected. Your proposal includes the timeline along with the price, before you commit to anything.",
  },
  {
    question: "Who owns the website and the code?",
    answer: "You do. Your domain, your content and your site files stay in your name.",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes. We're based in Greeneville and we come to you, to see how the work actually gets done.",
  },
];

export const closing = {
  title: "Bring us the process that eats your week.",
  body:
    "Tell us what your team does by hand that your website should be doing. We'll tell you plainly whether it's worth building.",
  primary: { label: "Book a Free Walkthrough", href: walkthroughUrl },
  secondary: { label: "Send Us a Note", href: "/contact" },
};
