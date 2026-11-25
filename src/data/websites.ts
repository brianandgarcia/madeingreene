/*
  WEBSITE CONTENT, shared by the homepage packages section (/#packages) and
  the Custom Websites page (/custom-websites).

  Package prices and inclusions follow Brian's Official Service List (updated
  2026-10-18). Care plans and add-ons are described without prices on purpose
  (Brian, 2026-11-24): pricing comes with the pricing sheet, not the website.
*/

export const seo = {
  title: "Custom Website Design in Greene County, TN",
  description:
    "Custom website design for Greene County small businesses: designed from a blank page, written for you, with real local photos and a free demo before you pay.",
};

export const header = {
  eyebrow: "Custom Websites",
  title: "Custom website design for Greene County businesses.",
  subtitle:
    "No templates and no do-it-yourself builder. We design your site from a blank page, write the words with you, photograph your business, and show you a free demo before you pay a dime.",
  primary: { label: "Get a Free Demo", href: "/free-demo" },
  secondary: { label: "See Website Packages", href: "/#packages" },
};

/* Packages section on the homepage. */
export const intro = {
  eyebrow: "Website Packages",
  title: "Four packages, one fixed price each.",
  body:
    "Every package includes a local photo session, copy written for you, 30 days of post-launch support and a 1-year bug-free guarantee.",
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

export const included = {
  eyebrow: "Included in Every Website",
  title: "The craft doesn't change with the size of the business.",
  items: [
    { name: "Custom design", text: "Designed for your business from a blank page. No templates." },
    { name: "Copy written for you", text: "We interview you and write the words. You review and approve." },
    { name: "Real local photos", text: "Photos of your people, place and work, shot on location by us." },
    { name: "Built for phones", text: "Most of your visitors are on a phone, so that's where we design first." },
    { name: "Search foundations", text: "Page titles and descriptions, clean headings, structured data, a sitemap and Search Console." },
    { name: "Fast and accessible", text: "Lightweight builds that load fast and work with a keyboard and screen reader." },
    { name: "Training", text: "In-person training for the people who will use and update it." },
    { name: "You own it", text: "Your domain, content and site files stay in your name." },
  ],
};

export const terms = {
  eyebrow: "How It Works",
  title: "From free demo to launch.",
  rows: [
    { label: "Free demo", value: "Tell us about your business and we build a demo of your new homepage. You see it before you pay anything, and there's no obligation." },
    { label: "Payment", value: "50% to reserve your spot and start, 50% when your site goes live. Payment plans available, just ask." },
    { label: "Timeline", value: "Most Business Websites launch in about six weeks and a Local Landing Page in about four. Growth, Ecommerce and add-ons may take longer." },
    { label: "After launch", value: "30 days of support, then you can run it yourself or let us look after it on a care plan." },
    { label: "Basic SEO", value: "Page titles and descriptions, clean headings, image alt text, an XML sitemap and Google Search Console submission." },
    { label: "Not included", value: "Domain fees, hosting or platform subscriptions, business email, Shopify, payment processing and third-party apps, billed to you by the provider." },
  ],
};

export const addons = {
  eyebrow: "Add-ons",
  title: "Add what your business needs.",
  body: "Any of these can be added to a package. Ask and we'll include them in your quote.",
  list: [
    "Additional pages",
    "Blog, news or projects section",
    "Online store (Shopify)",
    "Simple integrations: calendar, tap list, menu or CRM form",
    "Brand starter package",
    "Extra photography session",
    "Domain, business email and account setup",
    "Social media starter kit",
    "Email and SMS sign-up setup",
  ],
};

export const care = {
  eyebrow: "Ownership & Care",
  title: "Own it outright, or let us look after it.",
  body: [
    "Pay once and the site is yours: we build it, train you and hand over the keys, and you handle hosting, domain, updates and backups.",
    "Or choose a care plan and we host, monitor, back up and update it, with time for edits each month and a real person to call. Plans never start automatically, and you can cancel with 30 days' notice.",
  ],
  plans: [
    { name: "Hosting", items: ["Website hosting and SSL", "Backups and security updates", "Edits billed as needed"] },
    { name: "Care", sub: "Recommended", items: ["Everything in Hosting", "Monthly time for edits", "Technical monitoring"] },
    { name: "Care Plus", sub: "For busy seasons", items: ["Everything in Care", "More monthly edit time", "Priority turnaround", "Seasonal promos and event updates"] },
  ],
};

export const faqs = [
  {
    question: "How does the free demo work?",
    answer:
      "Tell us about your business and we design a demo of your new homepage using your real name, details and photos. If you like it, we build the rest. If not, you owe nothing.",
  },
  {
    question: "Why not use Wix, Squarespace or GoDaddy?",
    answer:
      "You can, and for some businesses that's fine. With us you get a site designed and written for your business, real photos instead of stock, and a local person to call when something needs changing.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Most of our clients would rather send us a quick note than log in to an editor. Care plans include time for edits each month, and we can set up a blog or news section you manage yourself.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every site is built on solid search foundations: titles, descriptions, headings, structured data, a sitemap and Search Console. Ranking also depends on your Google Business Profile and reviews, and we'll point you in the right direction on both.",
  },
  {
    question: "Who owns the website?",
    answer: "You do. Your domain, your content and your site files stay in your name.",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes. We're based in Greeneville and we come to you, both to learn about your business and to photograph it.",
  },
];

export const closing = {
  title: "See your new website before you pay a dime.",
  body: "Tell us about your business and we'll build a free demo of your new homepage. No obligation, and we'll get back to you within one business day.",
  primary: { label: "Get a Free Demo", href: "/free-demo" },
  secondary: { label: "Send Us a Note", href: "/contact" },
};
