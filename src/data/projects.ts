export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  images: ProjectImage[];
  featured?: boolean;
  /** Domain shown on the card (display text). */
  url?: string;
  /** Actual link target — falls back to `url` when omitted. Use to point a not-yet-live domain at a temporary URL. */
  href?: string;
}

export const projects: Project[] = [
  {
    name: "The Funny Farm",
    category: "Local Agritourism Farm",
    description:
      "An agritourism destination in Chuckey, TN that offers experiences like feeding calves, riding a miniature pony and horse, petting donkeys, playing with goats & chickens, and seeing Scottish Highland cows. Field trips & parties too!",
    highlights: [
      "Hours, location, and directions front and center",
      "Events and “What We Offer” sections to help plan a visit",
      "Mobile-friendly for visitors on the go",
    ],
    images: [
      { src: "/the-funny-farm.jpg", alt: "The Funny Farm homepage — an agritourism farm in Chuckey, Tennessee" },
    ],
    featured: true,
    url: "https://thefunnyfarmtn.com",
    href: "https://the-funny-farm.pages.dev/",
  },
  {
    name: "FreedomForTate.org",
    category: "Non-profit & Advocacy",
    description:
      "A donation-friendly advocacy site built to raise awareness and support for a local cause, with clear calls to action and a simple path to get involved.",
    highlights: [
      "Donation and contact forms front and center",
      "Mobile-friendly for supporters on the go",
      "Fully owned by the organization",
    ],
    images: [
      { src: "/freedom-for-tate.jpg", alt: "FreedomForTate.org homepage screenshot" },
    ],
    featured: true,
    url: "https://freedomfortate.org",
  },
  {
    name: "Trade Services Sample Concept",
    category: "Trades & Contracting",
    description:
      "A sample site for a local contractor who needs to look established online, explain services clearly, and make quote requests easy from a phone.",
    highlights: [
      "Clear quote request form",
      "Service-area and trust-building details up front",
      "Mobile-first layout for customers on the go",
    ],
    images: [
      { src: "/work/placeholder-3.svg", alt: "Trade services sample homepage" },
      { src: "/work/placeholder-4.svg", alt: "Trade services sample services page" },
    ],
    featured: true,
  },
  {
    name: "Restaurant Sample Concept",
    category: "Food & Hospitality",
    description:
      "A sample site for a local restaurant that needs menu updates, clear directions, and a better first impression than an outdated builder site.",
    highlights: [
      "Easy menu and hours updates",
      "Directions, contact info, and call button front and center",
      "Built to replace an outdated DIY site",
    ],
    images: [
      { src: "/work/placeholder-5.svg", alt: "Restaurant sample homepage" },
    ],
    featured: true,
  },
];
