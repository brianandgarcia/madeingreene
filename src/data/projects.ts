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
}

export const projects: Project[] = [
  {
    name: "Project Name",
    category: "Farm & Agriculture",
    description:
      "A short paragraph describing what this business does, what they needed, and what we built for them. Keep it plainspoken — who they are, what problem they had, and how the new site helps them.",
    highlights: [
      "Custom-built, loads in under a second",
      "Online ordering for fresh produce",
      "Owner updates hours and specials herself",
    ],
    images: [
      { src: "/work/placeholder-1.svg", alt: "Homepage screenshot" },
      { src: "/work/placeholder-2.svg", alt: "Product page screenshot" },
    ],
    featured: true,
  },
  {
    name: "Project Name",
    category: "Trades & Contracting",
    description:
      "Another short paragraph. What do they do, who do they serve, what was wrong with what they had before (or did they have nothing?), and what did the new site change for them.",
    highlights: [
      "Quote form that actually gets answered",
      "Shows up on Google for local searches",
      "Mobile-first — 70% of visitors on phones",
    ],
    images: [
      { src: "/work/placeholder-3.svg", alt: "Homepage screenshot" },
      { src: "/work/placeholder-4.svg", alt: "Services page screenshot" },
    ],
    featured: true,
  },
  {
    name: "Project Name",
    category: "Food & Hospitality",
    description:
      "Third example. Swap these placeholder images and copy with real work as it's ready. Each project can show 1–3 images — homepage, a detail page, or a phone mockup work best.",
    highlights: [
      "Menu updates in under a minute",
      "Google Maps + directions built in",
      "Took over from a broken WordPress site",
    ],
    images: [
      { src: "/work/placeholder-5.svg", alt: "Homepage screenshot" },
    ],
    featured: true,
  },
];
