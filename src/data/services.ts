/*
  WHAT WE OFFER (/services) — mid-market redesign.
  Copy only; layout is in src/pages/services.astro. The engagement phases and
  the three kinds of work are shared with the homepage (src/data/home.ts).
  "[PLACEHOLDER: ...]" renders as a visible tag until Brian confirms it.
*/

export const seo = {
  title: "What We Offer: Custom Websites, Integrations & Automation",
  description:
    "Custom website design and development, software integrations and business automation for established companies, delivered as a roadmap, a fixed-price build and ongoing support.",
};

export const header = {
  eyebrow: "What We Offer",
  title: "Custom websites, integrations and automation.",
  subtitle:
    "One team designs your website, connects it to the software you already run, and automates the work in between. Every engagement starts with a roadmap and a fixed price.",
};

/* Jump links under the header */
export const jumps = [
  { label: "How an engagement works", href: "#engagement" },
  { label: "What we build", href: "#build" },
  { label: "Included in every project", href: "#included" },
  { label: "Questions", href: "#faq" },
  { label: "Small business packages", href: "#packages" },
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
    "We don't quote a build until discovery is done, because the right price depends on what's worth building. Discovery is a fixed fee and ends with a written roadmap and a fixed-price proposal. You decide from there.",
  ],
  rows: [
    { label: "Discovery & Roadmap", value: "[PLACEHOLDER: discovery fee]" },
    { label: "Design & Build", value: "[PLACEHOLDER: builds from $XX,XXX]" },
    { label: "Run & Improve", value: "[PLACEHOLDER: $X,XXX / month]" },
    { label: "Payment schedule", value: "[PLACEHOLDER: e.g. milestone billing across the build]" },
  ],
};

export const faqs = [
  {
    question: "Do we have to replace the software we already use?",
    answer:
      "Usually not. Most projects connect the tools you already pay for. If something truly isn't working for you, the roadmap will say so and why.",
  },
  {
    question: "What if our software doesn't have an API?",
    answer:
      "Many tools still offer exports, email notifications, webhooks or scheduled reports we can work from. We'll tell you during discovery what's possible and what isn't.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on what the roadmap includes. Discovery tells you the timeline along with the price, before you commit to the build.",
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

/* The existing small-business packages, kept in a compact form. */
export const packages = {
  eyebrow: "Small Business Packages",
  title: "Smaller business? Our website packages are still here.",
  body:
    "For new and small businesses that need a professional website rather than a connected system. Same care, real photography, and copy written for you. Projects start at $950, and every package can be paid once or monthly.",
  list: [
    { name: "Local Landing Page", scope: "1 page", text: "For new businesses, solo operators and side businesses." },
    { name: "Business Website", scope: "Up to 5 pages", text: "A clean, professional presence for a local business." },
    { name: "Growth Website", scope: "Up to 10 pages", text: "More content and tools to attract and convert customers." },
    { name: "Ecommerce Website", scope: "Business + store", text: "Shopify setup for shops, farms and makers ready to sell online." },
  ],
  notes: [
    "Every package includes a local photo session and a 1-year bug-free guarantee.",
    "Optional monthly care plans cover hosting, updates and content changes.",
  ],
  cta: { label: "Ask for the pricing sheet", href: "/contact" },
};
