/*
  WEBSITE CONTENT, shared by the homepage packages section (/#packages) and
  the Custom Websites page (/custom-websites).

  Package prices and inclusions follow Brian's Official Service List (updated
  2026-11-25). Hosting and add-ons are described without prices on purpose
  (Brian, 2026-11-25): pricing comes with the pricing sheet, not the website.
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
    "Our websites are custom coded to be responsive, accessible and to perform well. We don't use DIY platforms or WordPress; we use modern tools.",
  primary: { label: "Get a Free Demo", href: "/free-demo" },
  secondary: { label: "See Website Packages", href: "/#packages" },
  /* Real screenshots of a client site, framed in the hero. Real work only: no AI or stock images. */
  showcase: {
    domain: "rebelforkkitchen.com",
    desktop: { src: "/rebel-fork-kitchen-desktop.jpg", alt: "The Rebel Fork Kitchen website on a desktop computer" },
    mobile: { src: "/rebel-fork-kitchen-mobile.jpg", alt: "The Rebel Fork Kitchen website on a phone" },
    caption: "Rebel Fork Kitchen · Chuckey",
  },
};

/* Packages section on the homepage. */
export const intro = {
  eyebrow: "Website Packages",
  title: "Four packages, one fixed price each.",
  body:
    "Every package includes Google SEO groundwork (website copy written for search, local keyword research and a Google Business Profile audit), a local photo session, 30 days of post-launch support and a 1-year bug-free guarantee.",
};

export const packages = [
  {
    name: "Starter Website",
    price: "$1,950",
    timeline: "About 4 weeks",
    bestFor: "Brand-new businesses, one-person operators, pop-ups, tiny farms and side businesses.",
    items: [
      "Up to 5 custom pages: Home, Services and 3 individual service pages",
      "Website copy written for SEO",
      "Business info and services or products sections",
      "Contact form or click-to-call button",
      "Mobile-friendly design",
      "One photography session, 30 minutes",
      "Social media links, plus Google Maps and address if it applies",
      "Basic local SEO setup and local keyword research",
      "Google Business Profile audit",
      "30-minute handoff call",
    ],
    note: "Can be expanded into a full Business Website later.",
  },
  {
    name: "Business Website",
    price: "$4,000",
    timeline: "About 6 weeks",
    bestFor: "Small local businesses that need a clean, professional presence.",
    items: [
      "Custom design and development",
      "Up to 8 pages, with website copy written for SEO",
      "Home, About, Services overview, 3 service pages, 1 service area page and Contact with a form",
      "One local photo or video session, up to 60 minutes",
      "In-person meetings and a 1-hour in-person training",
      "Accessibility-friendly, mobile-friendly build",
      "Basic SEO and local keyword research",
      "Google Business Profile audit",
    ],
    note: "Additional pages $200 each.",
  },
  {
    name: "Growth Website",
    price: "$6,000",
    badge: "Most popular",
    bestFor: "Growing businesses that want more content and tools to attract and convert customers.",
    items: [
      "Everything in the Business Website",
      "Up to 15 pages, with website copy written for SEO",
      "Room for more service and location pages",
      "Blog, News or Projects section",
      "Enhanced on-page SEO built around your keyword research",
      "Google Business Profile optimization based on your audit",
      "Lead-focused calls to action, forms and inquiry pages",
      "Extended photo session, up to 2 hours, with up to 20 edited images",
      "Priority project scheduling",
    ],
    note: "Additional pages $200 each.",
  },
  {
    name: "Ecommerce Website",
    price: "From $7,500",
    bestFor: "Shops, farms, makers and service businesses selling online.",
    items: [
      "Everything in the Growth Website",
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
  title: "It's a lot more than just a website you get:",
  items: [
    { name: "Custom design", text: "Designed for your business from a blank page. No templates." },
    { name: "Copy written for you", text: "We interview you and write the words. You review and approve." },
    { name: "Real local photos", text: "Photos of your people, place and work, shot on location by us." },
    { name: "Built for phones", text: "Most of your visitors are on a phone, so that's where we design first." },
    { name: "Search foundations", text: "Page titles and descriptions, clean headings, structured data, a sitemap and Search Console." },
    { name: "Fast and accessible", text: "Lightweight builds that load fast and work with a keyboard and screen reader." },
    { name: "Training", text: "A handoff call or in-person training, depending on your package." },
    { name: "You own it", text: "Your domain, content and site files stay in your name." },
  ],
};

export const terms = {
  eyebrow: "How It Works",
  title: "From free demo to launch.",
  rows: [
    { label: "Free demo", value: "Tell us about your business and we build a demo of your new homepage. You see it before you pay anything, and there's no obligation." },
    { label: "Timeline", value: "Most Business Websites launch in about six weeks and a Starter Website in about four. Growth, Ecommerce and add-ons may take longer." },
    { label: "After launch", value: "30 days of support, then you can run it yourself or add our hosting plan." },
    { label: "Basic SEO", value: "Page titles and descriptions, clean headings, image alt text, an XML sitemap and Google Search Console submission." },
    { label: "Not included", value: "Domain fees, hosting or platform subscriptions, business email, Shopify, payment processing and third-party apps, billed to you by the provider." },
  ],
};

export const addons = {
  eyebrow: "Add-ons",
  title: "Add what your business needs.",
  body: "Any of these can be added to a package. Ask and we'll include them in your quote.",
  list: [
    { label: "Additional pages" },
    { label: "Blog, news or projects section" },
    { label: "Online store (Shopify)" },
    { label: "Integrations: MLS, Google Calendar, booking tools and more", href: "/integrations" },
    { label: "Extra photography session" },
    { label: "Google SEO, social media, email and text sign-ups", href: "/digital-marketing" },
    { label: "Logo and brand design", href: "/graphic-design" },
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
      "Yes, we train you when the site launches. If you'd rather not, send us a note and we'll make the change at our hourly rate. We can also set up a blog or news section you manage yourself.",
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
