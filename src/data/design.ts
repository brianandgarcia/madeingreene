/*
  GRAPHIC DESIGN CONTENT (/graphic-design).

  Services and inclusions follow Brian's Official Service List (updated
  2026-11-25). No prices are published: they come with the pricing sheet.
*/
import type { ServicePageContent } from "./types";

export const graphicDesign: ServicePageContent = {
  seo: {
    title: "Graphic Design & Branding in Greeneville, TN",
    description:
      "Logo design and simple brand identity for new businesses, farms, makers and local organizations in Greeneville and Greene County, Tennessee.",
  },
  header: {
    eyebrow: "Graphic Design",
    title: "Logos and branding for Greene County businesses.",
    subtitle:
      "A simple, professional brand foundation: your logo, colors and fonts, matched to the way your business actually looks and sounds.",
    primary: { label: "Ask About Branding", href: "/contact?interest=brand-starter#contact-form" },
    secondary: { label: "See What's Included", href: "#branding" },
    image: {
      src: "/the-funny-farm-full-logo.jpg",
      alt: "The Funny Farm logo: a Highland cow wearing a crown of sunflowers, refreshed by Made in Greene",
      caption: "The Funny Farm logo, refreshed by Made in Greene.",
    },
  },
  photos: {
    images: [
      { src: "/the-funny-farm.jpg", alt: "The Funny Farm homepage, carrying the refreshed logo and brand colors", caption: "The Funny Farm · Website" },
      { src: "/the-funny-farm-thumb.jpg", alt: "A donkey at The Funny Farm in Chuckey", caption: "The Funny Farm · Chuckey" },
    ],
    caption: "A new logo is just the start. We carry it through your website and your social profiles.",
  },
  groups: [
    {
      id: "branding",
      eyebrow: "Design & Brand",
      title: "Start with a brand that fits.",
      body: "For The Funny Farm in Chuckey, that meant a cleaner logo and a consistent brand look that carries across the website and their marketing.",
      image: {
        src: "/baf-funny-farm-logo.webp",
        alt: "Before and after of The Funny Farm logo refresh: a busy leopard-print logo on the left, the clean Highland cow logo on the right",
      },
      services: [
        {
          name: "Brand Starter Package",
          bestFor: "New businesses, side businesses, farms, makers and local organizations.",
          items: [
            "Primary logo design or refinement",
            "A simple alternate logo or logo variation",
            "Basic color palette",
            "Font pairing recommendations",
            "Brand direction matched to your business style",
            "Final logo files for web and print",
            "1 revision round",
          ],
          note: "Full brand systems, multiple logo concepts, advanced illustration, packaging, signage systems and detailed brand guidelines are larger projects.",
          interest: "brand-starter",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can you work from the logo we already have?",
      answer: "Yes. The Brand Starter Package covers designing a new primary logo or refining your current one.",
    },
    {
      question: "What files do we get?",
      answer: "Final logo files for both web and print use.",
    },
    {
      question: "How many revisions are included?",
      answer: "One revision round. Additional changes are billed hourly.",
    },
  ],
  closing: {
    title: "Give your business a look people remember.",
    body: "Tell us about your business and what you have so far. We'll get back to you within one business day.",
    primary: { label: "Ask About Branding", href: "/contact?interest=brand-starter#contact-form" },
    secondary: { label: "See Custom Websites", href: "/custom-websites" },
  },
};
