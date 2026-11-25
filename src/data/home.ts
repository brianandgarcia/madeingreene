/*
  HOMEPAGE CONTENT: small-business focus (redesign, Nov 2026).

  Every word on the homepage that isn't in a shared component lives here.
  The package cards come from src/data/websites.ts. The integrations story
  (systems map, three kinds of work, engagement) moved to src/data/integrations.ts.

  Anything wrapped in [PLACEHOLDER: ...] renders as a visible yellow tag and
  is waiting on Brian. Search this file for "PLACEHOLDER".
*/

export const bookingUrl = "https://cal.com/made-in-greene/phone-call?overlayCalendar=true";

export const seo = {
  title: "Web Design in Greeneville, TN | Custom Websites",
  description:
    "Custom web design in Greeneville, TN with real local photography. See a free demo of your new site before you pay. Serving Greene County and the Tri-Cities.",
};

export const fit = {
  eyebrow: "Who We Build For",
  title: "For companies in Greene County that need a website that works as hard as they do.",
  body:
    "Restaurants, farms, contractors, shops, practices and nonprofits across Greene County and the Tri-Cities. If customers need to find you, trust you and get in touch, your website should make all three easy.",
  cta: { label: "Get a Free Demo", href: "/free-demo" },
  /* Pictograms are drawn in src/components/art/Pictogram.astro. */
  who: [
    { icon: "dish", label: "Restaurants & taprooms" },
    { icon: "farm", label: "Farms & agritourism" },
    { icon: "hardhat", label: "Contractors & trades" },
    { icon: "store", label: "Shops & makers" },
    { icon: "practice", label: "Health & professional practices" },
    { icon: "heart", label: "Nonprofits" },
  ],
  signsTitle: "It usually sounds like this:",
  signs: [
    "Your website is out of date, or you don't have one yet.",
    "Customers find you on Facebook but can't find your hours, menu or prices on Google.",
    "You're paying for a website builder you never have time to update.",
    "Your site looks fine on a computer and falls apart on a phone.",
    "People call to ask questions your website should already answer.",
  ],
  aside:
    "We take on a handful of projects at a time, so the person you meet is the person who builds your site, start to finish.",
};

/* Full-width photo band. Real client photos. */
export const photoBand = {
  images: [
    { src: "/the-funny-farm-tile.jpg", alt: "A Scottish Highland calf at The Funny Farm in Chuckey", place: "The Funny Farm · Chuckey" },
    { src: "/echo-station-photo-shoot.jpg", alt: "The bar at Echo Station in Greeneville, under its neon Drinks sign", place: "Echo Station · Greeneville" },
  ],
  caption: "We come to you. Every website includes real photos of your people, your place and your work.",
};

export const whyUs = {
  eyebrow: "Why Made in Greene",
  title: "Senior experience, without the agency layers.",
  points: [
    {
      name: "15+ years building for the web",
      text: "Our team brings more than fifteen years of experience designing and developing websites for businesses and organizations that need dependable, thoughtful work.",
    },
    {
      name: "The person you meet builds it",
      text: "No account managers or handoffs to an offshore team. You talk to the people designing and writing your site.",
    },
    {
      name: "Local, and in person",
      text: "We come to you: to learn how your business works, and to photograph it ourselves.",
    },
  ],
  quote: {
    text: "He is local and not some guy over the phone! He came out multiple times to make sure we were on the same page about our offers.",
    name: "Tammy M.",
    business: "The Funny Farm, Chuckey TN",
  },
};

/* Thin band under Why Us pointing to the integrations work. */
export const integrationsNudge = {
  text: "Need your website connected to your CRM, calendar, inventory or menu?",
  link: { label: "See website integrations", href: "/integrations" },
};

export const closing = {
  title: "See your new website before you pay a dime.",
  body:
    "Tell us about your business and we'll build a free demo of your new homepage. No obligation, and we'll get back to you within one business day.",
  primary: { label: "Get a Free Demo", href: "/free-demo" },
  secondary: { label: "Send Us a Note", href: "/contact" },
};
