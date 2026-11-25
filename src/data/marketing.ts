/*
  DIGITAL MARKETING CONTENT (/digital-marketing).

  Services and inclusions follow Brian's Official Service List (updated
  2026-11-25). No prices are published: they come with the pricing sheet.
*/
import type { ServicePageContent } from "./types";

export const digitalMarketing: ServicePageContent = {
  seo: {
    title: "Local SEO & Digital Marketing in Greeneville, TN",
    description:
      "Google SEO, Google Business Profile audits, local Google Ads and social media setup for small businesses in Greeneville and Greene County, Tennessee.",
  },
  header: {
    eyebrow: "Digital Marketing",
    title: "Get more leads in Greeneville with local SEO and digital marketing.",
    subtitle:
      "Local-first marketing for Greene County businesses: a stronger Google Business Profile, the right keywords, targeted Google Ads, and the accounts and tools set up properly.",
    primary: { label: "Ask About Marketing", href: "/contact?interest=local-seo#contact-form" },
    secondary: { label: "See the Services", href: "#google-seo" },
  },
  photos: {
    images: [
      { src: "/echo-station-photo-shoot.jpg", alt: "The bar at Echo Station in Greeneville, under its neon Drinks sign", caption: "Echo Station · Greeneville" },
      { src: "/the-funny-farm-tile.jpg", alt: "A Scottish Highland calf at The Funny Farm in Chuckey", caption: "The Funny Farm · Chuckey" },
    ],
    caption: "Real photos of your business make your Google profile and social posts stand out. We shoot them ourselves.",
  },
  groups: [
    {
      id: "google-seo",
      eyebrow: "Google SEO Services",
      title: "Show up when people search nearby.",
      body: "A stronger Google Business Profile, the right keywords, a website built to rank, and targeted local Google Ads to bring in customers while your rankings grow.",
      services: [
        {
          name: "Google Business Profile Audit",
          bestFor: "Businesses that already have a profile and want to know what is holding it back in local search.",
          items: [
            "Full review of your profile info, categories, services, hours and photos",
            "Reviews and ratings check, with response recommendations",
            "Comparison against top local competitors in your area",
            "Prioritized list of fixes to improve your local Google ranking",
          ],
          note: "Included with every website package.",
          interest: "gbp-audit",
        },
        {
          name: "Local SEO Plan",
          sub: "Monthly",
          bestFor: "Businesses that want to steadily climb local search results and track their progress.",
          items: [
            "Organic keyword research for your services and service area",
            "On-page website optimization: page titles, headings, content and meta descriptions",
            "Additional local landing pages created around your target keywords",
            "Local Google Ads campaign setup and management",
            "Monthly reporting on keyword rankings, Google Ads performance and website traffic",
          ],
          note: "Google Ads spend is billed in addition to the monthly plan fee.",
          interest: "local-seo",
        },
      ],
    },
    {
      id: "visibility",
      eyebrow: "Marketing & Visibility",
      title: "Get the basics set up right.",
      body: "Customers check your Google listing, your Facebook page and your website before they call. We make sure all three are set up and say the same thing.",
      services: [
        {
          name: "Digital Presence Setup",
          bestFor: "New businesses that need the basic online accounts and tools set up correctly.",
          items: [
            "Google Business Profile setup, including Google Reviews",
            "Domain setup guidance",
            "Business email setup guidance",
            "Basic account setup support",
          ],
          note: "Domain fees, email subscriptions and third-party platform costs are not included.",
          interest: "digital-presence",
        },
        {
          name: "Social Media Starter Kit",
          bestFor: "Businesses that need a simple, branded foundation for social media.",
          items: [
            "Profile setup or cleanup recommendations",
            "Profile image and cover image design",
            "Short business bio and about copy",
            "A suggested first post",
            "Basic content direction",
            "Link and QR code guidance",
          ],
          note: "Ongoing posting, engagement, photography and paid ads are not included.",
          interest: "social-starter",
        },
        {
          name: "Email / SMS Capture Setup",
          bestFor: "Businesses that want a way to collect email addresses and phone numbers from interested customers.",
          interest: "email-sms",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does local SEO take?",
      answer:
        "Organic SEO builds over time, and rankings typically improve gradually over several months. Google Ads help bring in local traffic in the meantime.",
    },
    {
      question: "Is the Google Ads budget included in the Local SEO Plan?",
      answer: "No. Ad spend is billed in addition to the monthly plan fee.",
    },
    {
      question: "Does the Social Media Starter Kit include posting for us?",
      answer: "No. It sets up the foundation. Ongoing posting, engagement, photography and paid ads are not included.",
    },
  ],
  closing: {
    title: "Let's help more neighbors find you.",
    body: "Tell us about your business and where you'd like to be found. We'll get back to you within one business day.",
    primary: { label: "Ask About Marketing", href: "/contact?interest=local-seo#contact-form" },
    secondary: { label: "See Custom Websites", href: "/custom-websites" },
  },
};
