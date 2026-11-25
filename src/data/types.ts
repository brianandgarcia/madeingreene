/* Content shape for the service pages rendered by components/ServicePage.astro. */

type Link = { label: string; href: string };
type Image = { src: string; alt: string; caption?: string };

export type Service = {
  name: string;
  sub?: string;
  bestFor: string;
  items?: string[];
  note?: string;
  /** Pre-selects this option in the contact form. Must match a <select> value. */
  interest: string;
};

export type ServicePageContent = {
  seo: { title: string; description: string };
  header: { eyebrow: string; title: string; subtitle: string; primary: Link; secondary: Link; image?: Image };
  groups: { id: string; eyebrow: string; title: string; body?: string; image?: Image; services: Service[] }[];
  /** Edge-to-edge photo pair shown after the first group. */
  photos?: { images: Image[]; caption: string };
  faqs: { question: string; answer: string }[];
  closing: { title: string; body: string; primary: Link; secondary: Link };
};
