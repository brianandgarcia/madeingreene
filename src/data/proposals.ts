/**
 * Client proposals / service agreements.
 *
 * Each entry becomes a standalone page at /proposal/<slug>. Pages are noindex,
 * excluded from the sitemap, and disallowed in robots.txt — the slug carries a
 * random token so client names can't be guessed or enumerated.
 *
 * To add a proposal:
 *   1. Generate a token:  node -e "console.log(require('crypto').randomBytes(3).toString('hex'))"
 *   2. Copy an existing entry, change the slug/client/sections.
 *   3. Send the client https://madeingreene.com/proposal/<slug>
 *
 * Everything on the page is driven by the `sections` array below — see the
 * `Block` union for the layouts available (paragraphs, lists, tables, numbered
 * steps, callouts, and the signature block).
 */

/** A single table cell. Use the object form for emphasis or a struck-through original price. */
export type Cell =
  | string
  | {
      text: string;
      /** Renders before `text` with a line through it — e.g. { text: "Included", strike: "$500" }. */
      strike?: string;
      bold?: boolean;
    };

export interface TableRow {
  cells: Cell[];
  /** Highlights the row — used for totals. */
  emphasis?: boolean;
}

export interface Party {
  /** Organization name, e.g. "Greeneville & Co". */
  org: string;
  /** Pre-filled fields print as text; omitted fields print as a signature line. */
  printedName?: string;
  title?: string;
}

export type Block =
  /** Body paragraph. `**bold**` is supported inline. */
  | { type: "p"; text: string }
  /** Sub-heading within a section. */
  | { type: "h3"; text: string }
  /** Bulleted list. `check` and `x` are for included / not-included lists. */
  | { type: "list"; items: string[]; style?: "bullet" | "check" | "x" }
  /** Table. Omit `head` for a headerless table. `align` sets per-column alignment. */
  | {
      type: "table";
      head?: string[];
      rows: TableRow[];
      align?: ("left" | "right")[];
    }
  /** Numbered process steps. */
  | { type: "steps"; items: { title: string; text: string }[] }
  /** Pulled-out note. `accent` for schedule/highlight, `warn` for constraints. */
  | { type: "callout"; label?: string; text: string; tone?: "info" | "accent" | "warn" }
  /** Signature block. Prints with ruled lines. */
  | { type: "signature"; parties: Party[] };

export interface Section {
  /** Anchor id — also used by the table of contents. */
  id: string;
  /** Small label above the title, e.g. "Part 1 — Project Proposal". */
  part?: string;
  title: string;
  blocks: Block[];
  /** Start a new sheet when printed. */
  pageBreakBefore?: boolean;
}

export interface Proposal {
  /** URL slug, including the random token. */
  slug: string;
  client: string;
  /** Small caps line on the cover. */
  eyebrow: string;
  title: string;
  /** Headline price shown on the cover. */
  price: string;
  priceNote: string;
  /** ISO date (YYYY-MM-DD). An expiry banner appears after this date. */
  validThrough: string;
  demoUrl?: string;
  preparedBy: {
    name: string;
    company: string;
    email: string;
  };
  sections: Section[];
}

export const proposals: Proposal[] = [
  {
    slug: "greeneville-co-8cc09a",
    client: "Greeneville & Co",
    eyebrow: "Custom Real Estate Website + MLS Integration",
    title: "Website Design & Development Proposal",
    price: "$6,500",
    priceNote: "Fixed project investment",
    validThrough: "2026-09-10",
    // demoUrl: "https://...",
    preparedBy: {
      name: "Brian Garcia",
      company: "Made in Greene",
      email: "brian@madeingreene.com",
    },
    sections: [
      {
        id: "overview",
        part: "Part 1 — Project Proposal",
        title: "Project Overview",
        blocks: [
          {
            type: "p",
            text: "Greeneville & Co needs more than a standard marketing website. The proposed site will combine a professionally designed local real estate presence with live property data from the Tennessee Virginia Regional MLS through the Spark Platform.",
          },
          {
            type: "p",
            text: "The website will give prospective buyers a direct way to search eligible MLS listings while giving Greeneville & Co dedicated space to feature its own listings, market its services, build local authority, and convert visitors into inquiries.",
          },
          {
            type: "p",
            text: "The MLS integration will be developed as a custom data-driven feature of the website rather than embedded as a generic third-party IDX widget. This gives Greeneville & Co greater control over the visual experience, navigation, content, and lead-generation flow.",
          },
          { type: "h3", text: "Primary Project Goals" },
          {
            type: "list",
            items: [
              "Create a polished, locally focused real estate website for Greeneville & Co.",
              "Integrate live TVR MLS IDX listing data through the Spark Platform.",
              "Surface Greeneville & Co broker/agent listings separately from the broader IDX search.",
              "Make property discovery simple on desktop and mobile.",
              "Build an editable marketing website that Greeneville & Co can manage through TinaCMS or an equivalent content-management system.",
              "Create a strong foundation for future community content, local SEO, and lead generation.",
            ],
          },
        ],
      },
      {
        id: "strategy",
        part: "Part 1 — Project Proposal",
        title: "Recommended Website Strategy",
        blocks: [
          { type: "h3", text: "Two Connected Content Systems" },
          {
            type: "table",
            head: ["Marketing Content", "Live MLS Data"],
            rows: [
              {
                cells: [
                  "TinaCMS (or equivalent) will manage the homepage, buyer/seller content, community content, brokerage information, calls to action, testimonials, and SEO fields.",
                  "Spark Platform will remain the authoritative source for MLS listing data, pricing, status, property details, and permitted listing media. MLS records will not be manually maintained in the CMS.",
                ],
              },
            ],
          },
          { type: "h3", text: "MLS Data Access" },
          {
            type: "p",
            text: "The project assumes Greeneville & Co maintains active access to the Tennessee Virginia Regional MLS data plans available through the Spark Platform, including IDX data and broker/agent-owned listing data. Made in Greene will connect server-side to Spark's RESO Web API Version 3 OData endpoint using the credentials and permissions supplied for the project.",
          },
        ],
      },
      {
        id: "scope",
        part: "Part 1 — Project Proposal",
        title: "Website Scope",
        blocks: [
          {
            type: "p",
            text: "The project includes up to 10 primary marketing pages, plus dynamic MLS search and property-detail experiences generated from approved listing data. The final sitemap will be confirmed during discovery.",
          },
          { type: "h3", text: "Recommended Sitemap" },
          {
            type: "table",
            head: ["Page", "Purpose"],
            rows: [
              {
                cells: [
                  { text: "1. Home", bold: true },
                  "Local positioning, featured listings, buyer/seller paths, market calls to action.",
                ],
              },
              {
                cells: [
                  { text: "2. Search Homes", bold: true },
                  "Live IDX property search and filter interface.",
                ],
              },
              {
                cells: [
                  { text: "3. Our Listings", bold: true },
                  "Greeneville & Co broker/agent-owned listings and featured inventory.",
                ],
              },
              {
                cells: [
                  { text: "4. Buying", bold: true },
                  "Buyer-focused services and lead generation.",
                ],
              },
              {
                cells: [
                  { text: "5. Selling", bold: true },
                  "Seller-focused services and lead generation.",
                ],
              },
              {
                cells: [
                  { text: "6. Communities", bold: true },
                  "Overview of the primary markets Greeneville & Co serves.",
                ],
              },
              {
                cells: [
                  { text: "7. Community Detail", bold: true },
                  "Initial local community page designed to combine editorial content with relevant live listings.",
                ],
              },
              {
                cells: [
                  { text: "8. About Greeneville & Co", bold: true },
                  "Company/agent positioning, experience, and local expertise.",
                ],
              },
              {
                cells: [
                  { text: "9. Resources / Guides", bold: true },
                  "Framework for market guides, real estate resources, or future articles.",
                ],
              },
              {
                cells: [
                  { text: "10. Contact", bold: true },
                  "Contact information, inquiry form, and brokerage calls to action.",
                ],
              },
            ],
          },
          {
            type: "callout",
            label: "Dynamic MLS pages do not count toward the 10-page marketing-page cap.",
            text: "Property-detail URLs, paginated/search-result states, and listing-filter combinations are generated from the MLS integration rather than treated as individually designed content pages.",
          },
          { type: "h3", text: "Supporting Legal Pages" },
          {
            type: "p",
            text: "Privacy Policy and Terms of Service pages may use a shared legal-content layout and do not count toward the 10-page marketing-page cap. Greeneville & Co will supply or approve the legal policy text. Made in Greene does not provide legal advice or legal-policy drafting.",
          },
        ],
      },
      {
        id: "mls-experience",
        part: "Part 1 — Project Proposal",
        title: "MLS Property Search & Listing Experience",
        blocks: [
          {
            type: "p",
            text: "The custom MLS experience will be designed specifically for Greeneville & Co and connected server-side to the Spark RESO Web API Version 3 OData endpoint so API credentials are not exposed in browser code. The initial build will query the authorized MLS source directly and use application-level caching where appropriate rather than maintaining a separate local copy of the MLS database.",
          },
          {
            type: "callout",
            label: "Simplified initial architecture",
            text: "No local MLS warehouse, bulk replication job, user accounts, saved searches, automated alerts, or CRM synchronization are included in the initial build. This keeps the integration focused on live search, listing details, and Greeneville & Co's own inventory while leaving those features available for a later phase.",
          },
          { type: "h3", text: "Included in Version 1" },
          {
            type: "list",
            style: "check",
            items: [
              "Live eligible TVR MLS IDX listing retrieval through Spark.",
              "Search by city or area.",
              "Minimum and maximum price filters.",
              "Bedroom and bathroom filters.",
              "Property-type filtering based on available Spark/MLS lookup values.",
              "Responsive property-result cards and result grids.",
              "Pagination or an equivalent controlled result-loading pattern.",
              "Dynamic property-detail pages using permitted MLS fields and media.",
              "Property photo gallery using available listing images.",
              "Listing status and core property information handling.",
              "Dedicated Greeneville & Co / broker-owned listing views using the available own-data access.",
              "Inquiry or showing-request calls to action from property pages.",
              "Graceful handling of removed, unavailable, incomplete, or changed listings.",
            ],
          },
          { type: "h3", text: "Not Included in Version 1" },
          {
            type: "list",
            style: "x",
            items: [
              "User accounts or login systems.",
              "Saved properties or favorites.",
              "Saved searches and automated listing alerts.",
              "Polygon or Zillow-style interactive map search.",
              "Mortgage calculators or third-party lending integrations.",
              "CRM automation or advanced lead-routing workflows.",
              "Automated SMS notifications.",
              "Historical listing-data warehouse or independent MLS data archive.",
              "Functionality not permitted by the applicable MLS/IDX agreement.",
            ],
          },
        ],
      },
      {
        id: "technology",
        part: "Part 1 — Project Proposal",
        title: "Technology & Content Management",
        blocks: [
          {
            type: "table",
            head: ["Layer", "Recommended Technology"],
            rows: [
              { cells: [{ text: "Frontend", bold: true }, "Next.js with TypeScript"] },
              { cells: [{ text: "Styling", bold: true }, "Tailwind CSS"] },
              {
                cells: [
                  { text: "Content Management", bold: true },
                  "TinaCMS or technically equivalent CMS",
                ],
              },
              {
                cells: [
                  { text: "MLS / Property Data", bold: true },
                  "Spark RESO Web API Version 3 / OData (Tennessee Virginia Regional MLS)",
                ],
              },
              {
                cells: [{ text: "Search State", bold: true }, "URL-based filters and query parameters"],
              },
              { cells: [{ text: "Validation", bold: true }, "Zod or equivalent typed validation"] },
              {
                cells: [{ text: "Hosting", bold: true }, "Managed Next.js hosting, anticipated on Vercel"],
              },
              {
                cells: [
                  { text: "Analytics", bold: true },
                  "Google Analytics and Google Search Console when account access is provided",
                ],
              },
              {
                cells: [
                  { text: "MLS Data Storage", bold: true },
                  "No separate MLS database in the initial scope; authorized data is queried from Spark server-side and cached as appropriate.",
                ],
              },
            ],
          },
          { type: "h3", text: "TinaCMS Training" },
          {
            type: "p",
            text: "Made in Greene will provide one training session of up to 60 minutes within 30 days after launch. Training will cover routine website content edits, page updates, community content, calls to action, SEO fields, and other CMS-managed areas. MLS listing data will continue to be managed through the MLS/Spark source rather than edited manually in TinaCMS.",
          },
          { type: "h3", text: "Search-Engine Foundation" },
          {
            type: "list",
            items: [
              "Clean page titles and meta descriptions for the primary marketing pages.",
              "Semantic heading structure and descriptive URLs.",
              "Image alternative-text support for client-managed imagery.",
              "XML sitemap and search-engine indexing configuration.",
              "Google Search Console connection when access is provided.",
              "Community-page framework designed to support original local real-estate content alongside live property results.",
            ],
          },
          {
            type: "p",
            text: "Ongoing SEO campaigns, guaranteed rankings, link building, recurring content creation, and guaranteed traffic or leads are not included.",
          },
        ],
      },
      {
        id: "process",
        part: "Part 1 — Project Proposal",
        title: "Project Process & Schedule",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Discovery & MLS Verification",
                text: "Confirm final sitemap, client goals, service area, Spark credentials, IDX permissions, listing fields, filters, brokerage information, and required accounts.",
              },
              {
                title: "Design Direction",
                text: "Establish the visual system, homepage direction, property-card design, listing search experience, mobile behavior, and content hierarchy.",
              },
              {
                title: "MLS Proof of Concept",
                text: "Connect to the Spark RESO Web API Version 3 endpoint, verify authorized OData retrieval, confirm the required Property fields and media access, and validate the agreed search/filter model before full MLS interface development.",
              },
              {
                title: "Content & Development",
                text: "Build the marketing pages, TinaCMS editing model, MLS results, property-detail templates, forms, and responsive components.",
              },
              {
                title: "Review & Testing",
                text: "Test the site across common devices, validate listing states and filters, verify forms, and collect consolidated client feedback.",
              },
              {
                title: "Launch",
                text: "Complete production deployment, domain/DNS connection assistance, SSL verification, analytics/search indexing setup, final MLS checks, and public launch.",
              },
            ],
          },
          {
            type: "callout",
            tone: "accent",
            label: "Estimated schedule: approximately 4–6 weeks",
            text: "The schedule begins after the agreement is signed, the initial payment is received, required account/API access is available, and the initial content required to begin is provided. Client or third-party delays extend the project schedule.",
          },
        ],
      },
      {
        id: "investment",
        part: "Part 1 — Project Proposal",
        title: "Project Investment",
        blocks: [
          {
            type: "table",
            head: ["Project Component", "Investment"],
            align: ["left", "right"],
            rows: [
              { cells: ["Growth-level custom website foundation", "$4,500"] },
              { cells: ["Spark / TVR MLS IDX integration", "$1,000"] },
              { cells: ["Property search + filtering interface", "$500"] },
              { cells: ["Dynamic property-detail system", "$500"] },
              {
                cells: [
                  "Broker/agent-owned listing integration + testing",
                  { text: "Included", strike: "$500" },
                ],
              },
              {
                emphasis: true,
                cells: [
                  { text: "Total Fixed Project Investment", bold: true },
                  { text: "$6,500", bold: true },
                ],
              },
            ],
          },
          {
            type: "p",
            text: "This is a custom project price based on the approved initial scope. It is not a standard Growth Website package with a simple plug-in add-on; the investment includes a custom property-search experience built around Greeneville & Co's authorized Spark RESO Web API access.",
          },
          { type: "h3", text: "Payment Schedule" },
          {
            type: "table",
            head: ["Milestone", "Amount", "Due"],
            rows: [
              {
                cells: [
                  { text: "Project Deposit — 25%", bold: true },
                  "$1,625.00",
                  "Upon signing",
                ],
              },
              {
                cells: [
                  { text: "Design + MLS Proof of Concept — 37.5%", bold: true },
                  "$2,437.50",
                  "After design direction is approved and authorized Spark data retrieval is working",
                ],
              },
              {
                cells: [
                  { text: "Final Payment — 37.5%", bold: true },
                  "$2,437.50",
                  "After final review and before public launch",
                ],
              },
            ],
          },
          {
            type: "p",
            text: "The initial payment reserves production capacity and authorizes discovery, design, and development to begin. The website will not be publicly launched or transferred for production use until all project invoices are paid.",
          },
          { type: "h3", text: "Ongoing Hosting & MLS Infrastructure" },
          {
            type: "callout",
            tone: "accent",
            label: "$29/month",
            text: "Managed hosting for the completed Next.js website and the server-side infrastructure used to securely communicate with Spark. The initial architecture does not require a separate MLS database or scheduled full-feed replication service. This fee does not include MLS membership/data-plan fees, paid map services, email services, premium third-party tools, or other provider charges billed to Greeneville & Co.",
          },
          {
            type: "p",
            text: "Greeneville & Co may request a current copy of the website files at any time. Ownership and production-use rights transfer after payment in full. Thirty days' written notice is required to discontinue Made in Greene hosting. Off-loading or migration assistance beyond delivery of the project files is billed at the Project Hourly Rate of $125/hour.",
          },
          { type: "h3", text: "Optional Enhancements" },
          {
            type: "table",
            head: ["Optional Add-On", "Price"],
            align: ["left", "right"],
            rows: [
              { cells: ["Additional custom marketing page", "$200/page"] },
              {
                cells: [
                  "Additional community page using the approved reusable community layout",
                  "$200/page",
                ],
              },
              {
                cells: [
                  "Advanced functionality such as saved searches, alerts, accounts, CRM automation, or map-based search",
                  "Quoted separately",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "scope-terms",
        part: "Part 2 — Terms & Conditions",
        title: "Scope, Revisions & Additional Work",
        pageBreakBefore: true,
        blocks: [
          {
            type: "p",
            text: "The fixed project investment covers only the functionality, pages, integrations, and deliverables specifically described in Part 1. Material changes to the approved scope require written approval and may affect both price and schedule.",
          },
          { type: "h3", text: "Included Revision Rounds" },
          {
            type: "list",
            items: [
              "Two consolidated design revision rounds.",
              "Two consolidated website/content revision rounds.",
              "One final pre-launch correction round.",
            ],
          },
          {
            type: "p",
            text: "A revision round means one organized list of feedback submitted after Greeneville & Co reviews the applicable milestone. Repeated piecemeal changes, new functionality, major redesigns after approval, new data integrations, additional custom templates, or work outside the approved scope are billed at the Project Hourly Rate of $125/hour or quoted separately.",
          },
          { type: "h3", text: "MLS / Third-Party Dependency" },
          {
            type: "p",
            text: "Project pricing assumes the existing Spark/TVR access, including the RESO Web API Version 3 OData endpoint, is suitable for the initial experience described in this agreement. Greeneville & Co is responsible for maintaining the MLS membership, IDX permissions, Spark data plans, brokerage approvals, and any other authorization required to display listing data.",
          },
          {
            type: "p",
            text: "If Spark, TVR MLS, or another provider requires a paid vendor, additional certification, new technical method, material field restrictions, or functionality outside the approved scope, Made in Greene will identify the impact and obtain written approval before performing billable additional work.",
          },
          { type: "h3", text: "Third-Party Costs" },
          {
            type: "list",
            items: [
              "MLS membership, IDX, Spark, or broker/agent data-plan fees.",
              "Domain registration and renewal.",
              "Business email.",
              "Paid map/geocoding services if added.",
              "CRM, text-message, or marketing platform subscriptions.",
              "Premium software or paid APIs.",
              "Stock photography or paid fonts.",
              "Advertising and ongoing SEO services.",
              "Legal-policy preparation or formal legal review.",
            ],
          },
          {
            type: "p",
            text: "Unless expressly stated otherwise, third-party subscriptions and provider fees are paid directly by Greeneville & Co.",
          },
        ],
      },
      {
        id: "responsibilities",
        part: "Part 2 — Terms & Conditions",
        title: "Client Responsibilities & Project Inactivity",
        blocks: [
          { type: "h3", text: "Greeneville & Co Responsibilities" },
          {
            type: "list",
            items: [
              "Appoint one primary decision-maker.",
              "Provide accurate brokerage, agent, service-area, and contact information.",
              "Provide Spark/API credentials and maintain required permissions.",
              "Provide or approve website copy, photographs, testimonials, disclosures, and legal-policy text as applicable.",
              "Confirm that supplied content and media may legally be published.",
              "Provide domain, analytics, and account access when needed.",
              "Review milestones and provide consolidated feedback in a timely manner.",
              "Pay invoices according to the agreed schedule.",
            ],
          },
          { type: "h3", text: "Project Inactivity" },
          {
            type: "p",
            text: "If the project remains inactive for 60 consecutive calendar days because required client materials, access, approvals, or feedback have not been provided, any unpaid portion of the fixed $6,500 project investment becomes due. Made in Greene will complete the remaining approved scope when Greeneville & Co resumes and provides the outstanding materials. Restarting the project is subject to Made in Greene's current production availability and a $250 reactivation fee.",
          },
        ],
      },
      {
        id: "ownership",
        part: "Part 2 — Terms & Conditions",
        title: "Ownership, Hosting & Warranty",
        blocks: [
          { type: "h3", text: "Ownership" },
          {
            type: "p",
            text: "After full payment, Greeneville & Co will own the final project-specific website content and custom deliverables created specifically under this agreement. Made in Greene retains ownership of pre-existing code, reusable components, internal tools, templates, generalized functionality, development processes, and technical methods. Greeneville & Co receives a perpetual right to use those reusable elements as incorporated into the completed website.",
          },
          {
            type: "p",
            text: "Greeneville & Co may request a current copy of the website files at any time, but ownership and the right to place the completed project into production independently transfer only after all project invoices have been paid in full. Third-party code, APIs, data, media, and services remain subject to their respective licenses and terms.",
          },
          { type: "h3", text: "90-Day Bug Warranty" },
          {
            type: "p",
            text: "Made in Greene will correct reproducible bugs in the original project work reported within 90 calendar days after launch at no additional development charge. The warranty covers defects in the custom website code, included responsive behavior, CMS integration, forms, and the original Spark/RESO integration where the defect is attributable to Made in Greene's implementation.",
          },
          {
            type: "p",
            text: "The 90-day warranty does not cover new feature requests, content changes, client modifications, expired or revoked MLS/API access, changes made by Spark/TVR MLS or another provider, hosting-provider changes, third-party outages, new browser/platform requirements, malicious activity, or functionality outside the approved scope. Issues outside warranty coverage are billed at $125/hour or quoted separately.",
          },
          { type: "h3", text: "30-Day Post-Launch Support" },
          {
            type: "p",
            text: "The project includes 30 days of reasonable post-launch support for CMS-use questions, minor content guidance, and launch-related questions. This support period is separate from the 90-day bug warranty.",
          },
        ],
      },
      {
        id: "general-terms",
        part: "Part 2 — Terms & Conditions",
        title: "Cancellation, Liability & General Terms",
        blocks: [
          { type: "h3", text: "Cancellation" },
          {
            type: "p",
            text: "Either party may terminate the project through written notice. If Greeneville & Co cancels, the initial payment is non-refundable because it reserves production capacity and covers planning, design, administration, and initial development. Completed work, approved third-party expenses, and other amounts earned through the cancellation date become payable. Unpaid deliverables and production-use rights will not be transferred.",
          },
          {
            type: "p",
            text: "If Made in Greene terminates the agreement without cause, Made in Greene will refund payments received for work not completed or committed.",
          },
          { type: "h3", text: "Late Payments" },
          {
            type: "p",
            text: "Made in Greene may pause work when an invoice becomes overdue. Deadlines will be adjusted based on the delay and current availability when work resumes. Overdue balances may accrue a late charge of 1.5% per month or the maximum amount permitted by law, whichever is less.",
          },
          { type: "h3", text: "Accuracy, Legal & MLS Compliance" },
          {
            type: "p",
            text: "Greeneville & Co is responsible for reviewing and approving all business information, listing-related disclosures, brokerage information, service areas, legal notices, Privacy Policy, Terms of Service, and other factual or regulated content. Made in Greene does not provide legal, real-estate licensing, regulatory, accounting, or MLS compliance advice. The website will be configured to display the data and attribution made available through the approved integration, but Greeneville & Co remains responsible for confirming its legal and MLS obligations.",
          },
          { type: "h3", text: "Limitation of Liability" },
          {
            type: "p",
            text: "To the fullest extent allowed by law, Made in Greene's total liability arising from this project will not exceed the amount paid to Made in Greene under this agreement. Made in Greene will not be liable for indirect, incidental, special, punitive, or consequential losses, including lost profits, lost leads, lost data, unavailable listings, lost search rankings, or third-party service failures. Made in Greene does not guarantee a specific number of visitors, inquiries, transactions, rankings, or sales.",
          },
          { type: "h3", text: "Governing Law & Entire Agreement" },
          {
            type: "p",
            text: "This agreement is governed by the laws of the State of Tennessee. The parties agree to attempt to resolve disputes through good-faith discussion before beginning formal proceedings. Unless otherwise required by law, legal proceedings relating to this agreement will be brought in an appropriate court located in Greene County, Tennessee.",
          },
          {
            type: "p",
            text: "This proposal and service agreement contains the complete understanding between Greeneville & Co and Made in Greene regarding this project and replaces prior verbal discussions, messages, estimates, prototypes, and representations concerning the same work. Material amendments must be approved in writing by both parties.",
          },
        ],
      },
      {
        id: "acceptance",
        part: "Acceptance",
        title: "Project Authorization",
        pageBreakBefore: true,
        blocks: [
          {
            type: "p",
            text: "By signing below, Greeneville & Co confirms that the project scope, investment, payment schedule, MLS dependency, responsibilities, hosting terms, and Terms & Conditions have been reviewed and accepted. This agreement becomes effective after it is signed by both parties and the initial payment is received.",
          },
          {
            type: "signature",
            parties: [
              { org: "Greeneville & Co" },
              { org: "Made in Greene", printedName: "Brian Garcia", title: "Owner" },
            ],
          },
        ],
      },
    ],
  },
];

export const getProposal = (slug: string) => proposals.find((p) => p.slug === slug);
