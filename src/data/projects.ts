export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
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

  // --- Case study (a project with a `slug` gets a /work/<slug> page) ---
  slug?: string;
  tagline?: string;
  meta?: { label: string; value: string }[];
  /** The goal / what the client needed — one or more paragraphs. */
  goal?: string[];
  /** What we built — feature list. */
  built?: ProjectFeature[];
  /** Outcomes / results. */
  results?: string[];
  testimonial?: ProjectTestimonial;
  /** Redesigned logo / brand image to showcase. */
  logo?: ProjectImage;
  /** YouTube video ID (just the ID, e.g. "0gFtCXXkAgg"). */
  youtubeId?: string;
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
    url: "https://funnyfarmtn.com",

    slug: "the-funny-farm",
    tagline: "A website as welcoming as a visit — hours, events, and every reason to come see the farm.",
    meta: [
      { label: "Client", value: "The Funny Farm" },
      { label: "Location", value: "Chuckey, Tennessee" },
      { label: "Industry", value: "Agritourism / Family Farm" },
      { label: "Services", value: "Website · Logo & Brand · Photo & Video" },
    ],
    goal: [
      "The Funny Farm is a working family farm and agritourism destination — the kind of place where you can hand-feed goats, ride a miniature pony, and meet a fuzzy Highland cow. They had a growing local following, but no real home base online.",
      "They needed a website that felt as warm and fun as visiting in person: clear hours and directions, an easy way to see what the farm offers, and a place to point people when someone asks, “where can I find you?”",
    ],
    built: [
      {
        title: "The homepage leads with the farm's personality.",
        description:
          "We led with the farm's fun, family feel — bold imagery and copy that sounds like them, not a template.",
      },
      {
        title: "Hours, location, and directions come first.",
        description:
          "Visitors can see when the farm is open and get directions in a couple of taps — the questions people ask most, answered first.",
      },
      {
        title: "Every farm experience is spelled out.",
        description:
          "Feeding calves, mini pony and horse rides, petting donkeys, goats & chickens, and the Highland cows — laid out so families know exactly what to expect.",
      },
      {
        title: "Events and visit planning get their own space.",
        description:
          "Sections for upcoming events and everything a first-time visitor needs to plan a trip.",
      },
      {
        title: "The logo and brand got a refresh.",
        description:
          "A cleaner logo and a consistent brand look that carries across the website and their marketing.",
      },
      {
        title: "We shot real local photos and video on-site.",
        description:
          "We captured the animals and the property on-site, so the site shows the actual experience — not stock photos.",
      },
    ],
    results: [
      "A professional home base the owners can send every new visitor to.",
      "Hours, directions, and offerings are self-serve — fewer repeat questions.",
      "A credible, polished presence when someone searches for the farm.",
    ],
    testimonial: {
      quote:
        "Brian at Made in Greene elevated our brand with a new logo and website. Not only did he go above and beyond but he provided numerous tips and strategies to help the farm's digital presence. I can tell that he really cares about his clients and isn't just out there for pure profits.",
      name: "Tammy M.",
      role: "The Funny Farm · Chuckey, TN",
    },
    logo: {
      src: "/the-funny-farm-full-logo.jpg",
      alt: "The Funny Farm — refreshed logo by Made in Greene",
    },
    youtubeId: "0gFtCXXkAgg",
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

    slug: "freedomfortate",
    tagline: "An advocacy site built to tell one veteran's story and turn visitors into supporters.",
    meta: [
      { label: "Client", value: "Freedom For Tate" },
      { label: "Industry", value: "Non-profit / Advocacy" },
      { label: "Services", value: "Website · Donation Setup · Content" },
      { label: "Focus", value: "Awareness & fundraising" },
    ],
    goal: [
      "Freedom For Tate is a campaign advocating for Patrick “Tate” Adamiak, a U.S. Navy veteran and collector whose case has drawn national attention.",
      "The campaign needed a credible, emotionally clear home base — a single place to tell his story, lay out the facts of the case, and make it simple for supporters to donate, take action, and share.",
    ],
    built: [
      {
        title: "The homepage leads with the story.",
        description:
          "The site leads with the stakes and a clear call to action, so first-time visitors understand the situation and what they can do in seconds.",
      },
      {
        title: "Donating is front and center.",
        description:
          "Prominent “Donate” and “Take Action” paths make supporting the cause the easiest thing to do on the page.",
      },
      {
        title: "The case is laid out clearly.",
        description:
          "Dedicated sections walk through Tate's story and the details of the case for both supporters and press.",
      },
      {
        title: "Updates and media get a home.",
        description:
          "A place to share news, coverage, and campaign updates as the story develops.",
      },
      {
        title: "It's built to be shared on mobile.",
        description:
          "Built to look right when supporters share it on social media and open it on their phones.",
      },
    ],
    results: [
      "A clear, shareable hub for the entire campaign.",
      "A simple, direct path for visitors to donate and get involved.",
      "A credible presence for supporters, press, and social sharing.",
    ],
  },
];
