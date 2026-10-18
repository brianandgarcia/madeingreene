/*
  SMALL BUSINESS PACKAGES (/small-business).
  Copy only; layout is in src/pages/small-business.astro. Prices and inclusions
  follow Brian's Official Service List (updated 2026-10-18).
*/

export const seo = {
  title: "Small Business Website Packages",
  description:
    "Fixed-price websites for new and small businesses in Greene County, Tennessee, from $1,750, with a local photo session, copy written for you and optional care plans.",
};

export const intro = {
  eyebrow: "Small Business Packages",
  title: "Four packages, one fixed price each.",
  body:
    "For new and small businesses that need a professional website rather than a connected system. Every package includes a local photo session, 30 days of post-launch support and a 1-year bug-free guarantee.",
};

export const packages = [
  {
    name: "Local Landing Page",
    price: "$1,750",
    timeline: "About 4 weeks",
    bestFor: "Brand-new businesses, one-person operators, pop-ups, tiny farms and side businesses.",
    items: [
      "One-page custom landing page",
      "Basic written copy",
      "Business info and services or products sections",
      "Contact form or click-to-call button",
      "Google Maps and address section, if it applies",
      "One local photo session, up to 30 minutes",
      "Social media links and basic SEO",
      "30-minute handoff call",
    ],
    note: "Can be expanded into a full Business Website later.",
  },
  {
    name: "Business Website",
    price: "$3,500",
    timeline: "About 6 weeks",
    bestFor: "Small local businesses that need a clean, professional presence.",
    items: [
      "Custom design and development",
      "Professional copywriting for up to 5 pages",
      "Home, About, Services or Products, Contact with a form, and 1 more page",
      "One local photo or video session, up to 60 minutes",
      "In-person meetings and a 1-hour in-person training",
      "Accessibility-friendly, mobile-friendly build",
      "Basic SEO",
    ],
    note: "Additional pages $200 each.",
  },
  {
    name: "Growth Website",
    price: "$5,500",
    badge: "Most popular",
    bestFor: "Growing businesses that want more content and tools to attract and convert customers.",
    items: [
      "Everything in the Business Website",
      "Up to 10 pages, with written copy",
      "Blog, News or Projects section",
      "Enhanced SEO setup and content structure recommendations",
      "Google Business Profile review and recommendations",
      "Lead-focused calls to action, forms and inquiry pages",
      "Extended photo or video session, up to 2 hours, with up to 20 edited images",
      "Priority project scheduling",
    ],
    note: "Additional pages $200 each.",
  },
  {
    name: "Ecommerce Website",
    price: "From $6,000",
    bestFor: "Shops, farms, makers and service businesses selling online.",
    items: [
      "Everything in the Business Website",
      "Shopify setup with up to 10 products",
      "Product and category setup",
      "Payment, shipping and tax configuration guidance",
      "Store training so you can manage orders confidently",
    ],
    note: "Shopify subscription, payment fees and apps are billed by the provider.",
  },
];

export const care = {
  eyebrow: "Ownership & Care",
  title: "Own it outright, or let us look after it.",
  body: [
    "Pay once and the site is yours: we build it, train you and hand over the keys, and you handle hosting, domain, updates and backups.",
    "Or choose a care plan and we host, monitor, back up and update it, with time for edits each month and a real person to call. Plans never start automatically, and you can cancel with 30 days' notice.",
  ],
  plans: [
    { name: "Hosting", price: "$10/mo", sub: "Billed annually at $120", items: ["Website hosting and SSL", "Backups and security updates", "Edits billed as needed"] },
    { name: "Care", price: "$49/mo", sub: "Recommended", items: ["Everything in Hosting", "30 minutes a month of edits", "Technical monitoring"] },
    { name: "Care Plus", price: "$99/mo", sub: "For busy seasons", items: ["Everything in Care", "60 minutes a month of edits", "Priority turnaround", "Seasonal promos and event updates"] },
  ],
  edits: [
    "Included time doesn't roll over month to month.",
    "No plan? Edits are $35 per 15 minutes ($125/hour), or a 2-hour Edit Pack for $200, used within 12 months.",
  ],
};

export const addons = {
  title: "Add-ons",
  list: [
    { name: "Additional page", price: "$200 per page" },
    { name: "Blog / News / Projects setup, with 2 first posts", price: "$500" },
    { name: "Online store (Shopify), up to 10 products", price: "$1,500" },
    { name: "Simple integration (calendar, tap list, menu or CRM form)", price: "From $1,500" },
    { name: "Brand Starter Package", price: "From $750" },
    { name: "Website photography session", price: "From $299" },
    { name: "Digital Presence Setup (domain, business email, accounts)", price: "$199" },
    { name: "Social Media Starter Kit", price: "$199" },
    { name: "Email / SMS capture setup", price: "$350" },
  ],
};

export const terms = {
  title: "How it works",
  rows: [
    { label: "Payment", value: "50% to reserve your spot and start, 50% when your site goes live. Payment plans available, just ask." },
    { label: "Timeline", value: "Most Business Websites launch in about six weeks and a Local Landing Page in about four. Growth, Ecommerce and add-ons may take longer." },
    { label: "Extra work", value: "Anything beyond the agreed project or care plan is $125/hour." },
    { label: "Basic SEO", value: "Page titles and descriptions, clean headings, image alt text, an XML sitemap and Google Search Console submission." },
    { label: "Not included", value: "Domain fees, hosting or platform subscriptions, business email, Shopify, payment processing and third-party apps, billed to you by the provider." },
  ],
};

export const closing = {
  title: "Tell us about your business.",
  body: "We'll send the pricing sheet, point you to the right package, and get back to you within one business day.",
  primary: { label: "Start a Project", href: "/contact" },
  secondary: { label: "Need integrations or automation? See custom builds", href: "/services" },
};
