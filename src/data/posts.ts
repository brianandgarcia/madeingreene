// ─────────────────────────────────────────────────────────────────────────────
//  Blog posts
//
//  Write posts right here in code — no markdown files needed. Each post is an
//  object in the `posts` array below, and its body is a list of "blocks".
//
//  To add a post: copy an existing object, change the fields, and give it a new
//  `slug`. It automatically shows up at /blog and gets its own page at
//  /blog/<slug>. Newest posts (by `date`) appear first.
//
//  The block types you can use in `body`:
//    { type: "heading",   text }                 → a section heading
//    { type: "paragraph", text }                 → a paragraph (text may include
//                                                   simple HTML like <strong>,
//                                                   <em>, or <a href="…">)
//    { type: "list",      items: [] }            → a bulleted list
//    { type: "list",      ordered: true, items } → a numbered list
//    { type: "callout",   text, title? }         → a highlighted box
//    { type: "quote",     text, cite? }          → a pull quote
//    { type: "image",     src, alt, caption? }   → an image (from /public)
// ─────────────────────────────────────────────────────────────────────────────

export type PostBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string; title?: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** Short one-liner used on the card and for SEO description. */
  excerpt: string;
  /** e.g. "Behind the Build", "Technology", "Warranties" */
  category: string;
  /** ISO date, e.g. "2026-07-28". Controls ordering (newest first). */
  date: string;
  author?: string;
  /** Optional cover image from /public (e.g. "/03-trust-signal.png"). */
  cover?: string;
  body: PostBlock[];
  /** Hide from the site without deleting it. */
  draft?: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: "we-joined-the-greene-county-partnership",
    title: "We joined the Greene County Partnership",
    excerpt:
      "Made in Greene is now a proud member of the Greene County Partnership chamber of commerce, another step in our commitment to the local businesses we build for.",
    category: "Community",
    date: "2026-07-27",
    author: "Brian",
    cover: "/greene-county-partnership-plaque.jpg",
    body: [
      {
        type: "paragraph",
        text: "As of July 27th, Made in Greene is officially a member of the <strong>Greene County Partnership</strong>, our local chamber of commerce. It's a small milestone, but one that means a lot to us, because everything we do is rooted right here in Greene County.",
      },
      {
        type: "paragraph",
        text: "Here's how the Partnership welcomed us:",
      },
      {
        type: "quote",
        text: "Please join us in welcoming Made in Greene to the Greene County Partnership! This Greeneville-based creative agency helps local businesses build a stronger presence through professional websites, branding, and marketing support, with a focus on transparent pricing, personal service, and practical solutions. We are glad to have them as part of our chamber family, and we cannot wait to see the local businesses they help grow along the way.",
        cite: "Greene County Partnership",
      },
      {
        type: "heading",
        text: "Why this matters to us",
      },
      {
        type: "paragraph",
        text: "We build websites for local businesses, farms, shops, and organizations, so being part of the same community we serve isn't just a nice extra. It's the whole point. Joining the Partnership puts us right alongside the very people we want to help grow online.",
      },
      {
        type: "paragraph",
        text: 'If you\'re a Greene County business wondering whether it\'s time for a real website, we\'d love to talk. <a href="/contact">Get in touch</a> and a local person will get back to you within one business day.',
      },
    ],
  },
];

// Published posts, newest first. Use this everywhere the blog is displayed.
export const publishedPosts: BlogPost[] = posts
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

/** Format an ISO date like "2026-07-28" → "July 28, 2026". */
export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Rough read time from the post body, in whole minutes (min 1). */
export function readingTime(post: BlogPost): number {
  const words = post.body
    .map((b) => {
      if ("text" in b) return b.text;
      if (b.type === "list") return b.items.join(" ");
      return "";
    })
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
