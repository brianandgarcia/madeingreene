/*
  HOMEPAGE CONTENT — mid-market redesign.

  Every word on the homepage lives here, so copy can change without touching
  the components in src/components/home/.

  Anything wrapped in [PLACEHOLDER: ...] renders as a visible yellow tag and
  is waiting on Brian: prices, capacity, and anything else that is a business
  decision rather than a design one. Search this file for "PLACEHOLDER".
*/

export const bookingUrl = "https://cal.com/made-in-greene/phone-call?overlayCalendar=true";

export const seo = {
  title: "Custom Websites, Integrations & Automation",
  description:
    "Made in Greene designs custom websites for established East Tennessee companies, connected to the CRM, scheduling, inventory and accounting tools you already run, with automations that take repetitive work off your team.",
};

export const hero = {
  eyebrow: "Websites · Integrations · Automation",
  title: "Your website, wired into the way your business",
  titleAccent: "actually runs.",
  body:
    "We design and build custom websites for established companies, connected to the tools your team already uses, with automations that take the repetitive work off people's desks.",
  primary: { label: "Book a Discovery Call", href: bookingUrl },
  secondary: { label: "See How an Engagement Works", href: "#engagement" },
  /* The systems map. `x`/`y` are percentages of the map box; the website sits
     in the middle and every node is wired back to it. */
  nodes: [
    { label: "CRM", detail: "Leads land with a source and an owner", x: 15, y: 24 },
    { label: "Scheduling", detail: "Bookings and crews in one calendar", x: 85, y: 22 },
    { label: "Inventory / ERP", detail: "What's in stock, shown live", x: 87, y: 56 },
    { label: "Accounting", detail: "Quotes turn into invoices", x: 70, y: 80 },
    { label: "Email & SMS", detail: "Follow-ups that send themselves", x: 25, y: 78 },
    { label: "Reporting", detail: "Monday numbers in your inbox", x: 11, y: 50 },
  ],
  proof: {
    label: "Running now at Echo Station",
    text: "All 40 taps sync from Untappd. Events sync from Google Calendar.",
    href: "/work/echo-station",
  },
};

export const fit = {
  eyebrow: "Who We Build For",
  title: "For companies that have outgrown a brochure website.",
  body:
    "Manufacturers, distributors, contractors, medical and professional practices, and businesses with more than one location. If the business runs on more systems than the website knows about, we should talk.",
  signsTitle: "It usually sounds like this:",
  signs: [
    "Your team retypes the same information into two or three systems.",
    "Leads come in by form, phone and email, and nobody owns the follow-up.",
    "Customers call to ask what the website could answer: stock, status, availability, a ballpark quote.",
    "You have more than one location, crew or product line, and the site shows none of it.",
    "Part of the business runs on a spreadsheet only one person understands.",
  ],
  aside:
    "We take on a small number of these projects each year, so each one gets the time it deserves.",
  capacity: "[PLACEHOLDER: number of builds per year, or per quarter]",
};

export const capabilities = {
  eyebrow: "What We Build",
  title: "Three kinds of work, usually in the same project.",
  lanes: [
    {
      number: "01",
      name: "Custom features",
      summary:
        "The parts of your site that do something specific to your business, built for it rather than bolted on from a plugin.",
      examples: [
        "Customer, dealer or vendor portals",
        "Quote and pricing calculators",
        "Product finders and configurators",
        "Order, job or project status lookup",
        "Booking, dispatch and service requests",
        "Internal dashboards for your team",
      ],
    },
    {
      number: "02",
      name: "Integrations",
      summary:
        "Your website talks to the software you already pay for, so information is entered once and shows up everywhere it should.",
      examples: [
        "CRMs such as HubSpot, Pipedrive or Salesforce",
        "QuickBooks and other accounting tools",
        "Google Workspace and Microsoft 365 calendars",
        "Inventory, ERP and point-of-sale systems",
        "Stripe and other payment processors",
        "Any tool with an API, and some without one",
      ],
    },
    {
      number: "03",
      name: "Automations",
      summary:
        "The small jobs that eat a week, handed to software that never forgets, with a person still in charge of anything that matters.",
      examples: [
        "Lead routing and instant first replies",
        "Quote-to-invoice and onboarding handoffs",
        "Review requests after a finished job",
        "Weekly reports delivered to your inbox",
        "Availability and pricing kept current on the site",
        "Alerts when something needs a human",
      ],
    },
  ],
};

export const proof = {
  eyebrow: "Already Running",
  title: "A website that updates itself.",
  client: "Echo Station · Greeneville, Tennessee",
  body: [
    "Echo Station is a pour-your-own taproom with forty taps that rotate constantly and something on most nights. Keeping a website current on all of it by hand is a second job.",
    "So the site keeps itself current. A custom integration pulls what's pouring straight from their Untappd account, with brewery, style, ABV and label art for all forty taps. Events come from the Google Calendar the owners already use. Nobody retypes anything.",
  ],
  points: [
    { value: "40", label: "taps synced live from Untappd" },
    { value: "0", label: "second systems to keep in step" },
  ],
  image: {
    src: "/echo-station-tap-list.jpg",
    alt: "Echo Station's Pouring Now page, listing every beer on the wall with brewery, style, ABV and IBU, pulled live from Untappd",
  },
  link: { label: "Read the Echo Station case study", href: "/work/echo-station" },
  note:
    "The same approach scales to a parts catalog, a service schedule, or a dealer price list.",
};

export const engagement = {
  eyebrow: "How an Engagement Works",
  title: "One roadmap, one build, one team that keeps it running.",
  body:
    "Every project starts by mapping how work actually moves through your business. You get a written plan and a fixed price before anything is built.",
  phases: [
    {
      number: "01",
      name: "Discovery & Roadmap",
      length: "[PLACEHOLDER: e.g. 2 weeks]",
      price: "[PLACEHOLDER: discovery fee]",
      items: [
        "Working sessions with the people who do the work",
        "A map of your systems and where data gets retyped",
        "The automations worth building, ranked by time saved",
        "A written roadmap and a fixed-price proposal",
      ],
    },
    {
      number: "02",
      name: "Design & Build",
      length: "[PLACEHOLDER: e.g. 8 to 14 weeks]",
      price: "[PLACEHOLDER: builds from $XX,XXX]",
      items: [
        "A custom-designed website, written and photographed for you",
        "The integrations and automations from the roadmap",
        "On-location photography by our own team",
        "Training for your staff, and you own your domain and site files",
      ],
    },
    {
      number: "03",
      name: "Run & Improve",
      length: "Monthly",
      price: "[PLACEHOLDER: $X,XXX / month]",
      items: [
        "Hosting, monitoring and security updates",
        "We watch every integration and fix it if a vendor changes theirs",
        "A standing monthly review of what's working",
        "New features and automations as the business changes",
      ],
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Made in Greene",
  title: "Senior experience, without the agency layers.",
  points: [
    {
      name: "15+ years building for the web",
      text: "Brian has spent more than fifteen years designing and developing websites for organizations that need dependable, thoughtful digital work.",
    },
    {
      name: "The person you meet builds it",
      text: "No account managers or handoffs to an offshore team. You talk to the people designing and writing the code.",
    },
    {
      name: "Local, and in the room",
      text: "We come to you: to sit with the people who run the process, and to photograph the business ourselves.",
    },
  ],
  quote: {
    text: "He is local and not some guy over the phone! He came out multiple times to make sure we were on the same page about our offers.",
    name: "Tammy M.",
    business: "The Funny Farm, Chuckey TN",
  },
};

export const smallBusiness = {
  text: "Running a smaller business? Our website packages are still here, with the same care and clear pricing.",
  link: { label: "See website packages", href: "/services#packages" },
};

export const closing = {
  title: "Bring us the process that eats your week.",
  body:
    "Tell us what your team does by hand that a website or a piece of software should be doing. We'll tell you plainly whether it's worth building.",
  primary: { label: "Book a Discovery Call", href: bookingUrl },
  secondary: { label: "Send Us a Note", href: "/contact" },
};
