export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  /**
   * Optional screenshot. Features that have one are pulled out of the card
   * grid and given a full-width band with the image beside the text, so the
   * big moments in a project get room to breathe.
   */
  image?: ProjectImage;
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
  /** Image shown beside the goal — usually the people behind the business. */
  goalImage?: ProjectImage;
  /** What we built — feature list. */
  built?: ProjectFeature[];
  /** Outcomes / results. */
  results?: string[];
  testimonial?: ProjectTestimonial;
  /**
   * Full-page desktop and phone captures, shown in device frames. These run
   * very tall, so the frames crop them from the top rather than letting a
   * 5000px screenshot run down the page.
   */
  showcase?: { desktop?: ProjectImage; mobile?: ProjectImage };
  /** Landscape image for social sharing. Falls back to images[0]. */
  ogImage?: ProjectImage;
  /** Redesigned logo / brand image to showcase. */
  logo?: ProjectImage;
  /** YouTube video ID (just the ID, e.g. "0gFtCXXkAgg"). */
  youtubeId?: string;
}

export const projects: Project[] = [
  {
    name: "Echo Station",
    category: "Pour-Your-Own Taproom",
    description:
      "Greeneville's pour-your-own taproom — 40 taps on the wall, 300 board games on the shelf, and something on most nights. The website keeps its own tap list and event calendar current.",
    highlights: [
      "Live tap list for all 40 taps, pulled straight from Untappd",
      "Events sync automatically from Google Calendar",
      "Custom on-location photography, not stock",
    ],
    images: [
      {
        src: "/echo-station-photo-shoot.jpg",
        alt: "Echo Station's self-pour tap wall under a neon Drinks sign, photographed on location",
      },
    ],
    featured: true,
    url: "https://echostationtn.com",

    slug: "echo-station",
    tagline:
      "A taproom website that updates itself — live taps from Untappd, events straight from Google Calendar.",
    meta: [
      { label: "Client", value: "Echo Station" },
      { label: "Location", value: "Greeneville, Tennessee" },
      { label: "Industry", value: "Pour-Your-Own Taproom" },
      { label: "Services", value: "Website · Custom API Integrations · Photography" },
    ],
    goal: [
      "Echo Station is Lori and Brian's pour-your-own taproom on Austin Street in Greeneville, named for their dog Echo — the one in the ruff collar, watching over the room from the brick wall. Forty taps on the wall, three hundred board games on the shelf, and a motto that tells you everything: come, sit, stay.",
      "They wanted a place where you could pour your own pint, find a game you hadn't played since you were twelve, and stay long enough that the evening got away from you. Somewhere you could bring the kids early and catch a comic later, and where the dog was as welcome as you were.",
      "The trouble with a room like that is how fast it changes. Forty taps rotate constantly, and there's something on most nights — live music, stand-up, improv, trivia, karaoke, themed nights. Keeping a website current on all of it by hand is a second job, and it's the first thing to slip when you're busy running the place.",
    ],
    goalImage: {
      src: "/echo-station-meet-lori-brian.jpg",
      alt: "The Meet Lori and Brian section of the site, with the owners in front of the tap wall",
    },
    built: [
      {
        title: "We shot the taproom on location.",
        description:
          "A full photo shoot in the room itself — the neon, the tap wall, the light at night. The site is built on photographs of Echo Station, not stock images of somebody else's bar.",
      },
      {
        title: "The tap list updates itself from Untappd.",
        description:
          "A custom integration pulls what's actually pouring straight from Echo Station's Untappd account: brewery, style, ABV, IBU and label art for all forty taps, plus the wine, cider and non-alcoholic list. The wall rotates constantly and nobody has to retype it.",
        image: {
          src: "/echo-station-tap-list.jpg",
          alt: "The Pouring Now page, listing every beer on the wall with brewery, style, ABV and IBU, pulled live from Untappd",
        },
      },
      {
        title: "Events sync from Google Calendar.",
        description:
          "Lori and Brian add a night to the calendar they already use and it appears on the site — grouped by month, tagged as live music, comedy or a themed night, with times and details. There's never a ticket or a cover charge, and there's no second system to keep in step.",
        image: {
          src: "/echo-station-events.jpg",
          alt: "The events page, showing live music, comedy and themed nights by month, synced from Google Calendar",
        },
      },
      {
        title: "First-timers learn how pour-your-own works.",
        description:
          "Grab a wristband, pour what you want, pay by the ounce — laid out in three steps, because the first question a new visitor has is how any of this works.",
      },
      {
        title: "Guests can take the calendar with them.",
        description:
          "Visitors can subscribe to the calendar, add it to Google Calendar, or download an .ics file, so Echo Station's nights land in the calendar they actually check.",
      },
      {
        title: "Their story is on the site, in their words.",
        description:
          "A “Meet Lori and Brian” section that tells people who is behind the bar and why they opened it — the part a template can't fake.",
      },
      {
        title: "It works on a phone, at the bar.",
        description:
          "Most people check a tap list standing in the room or deciding whether to come out at all. The site is built for that first.",
      },
    ],
    showcase: {
      desktop: { src: "/echo-station-desktop.jpg", alt: "The Echo Station homepage on desktop" },
      mobile: { src: "/echo-station-mobile.jpg", alt: "The Echo Station homepage on a phone" },
    },
    results: [
      "The tap list and the event calendar stay current without anyone touching the website.",
      "One place to point people when they ask what's on tap or what's happening this week.",
      "Lori and Brian spend their time on the room and on marketing instead of on site updates.",
    ],
  },
  {
    name: "Rebel Fork Kitchen",
    category: "Family Restaurant & Pizzeria",
    description:
      "A family-owned kitchen in Chuckey serving hand-tossed pizza, smash burgers, wings and Southern plates. The website carries their story, puts the whole menu behind a filter, and gives people three ways to order.",
    highlights: [
      "Interactive menu — thirteen categories, filtered in a tap",
      "Dine in, order online, or call it in — each one button",
      "Custom on-location food and kitchen photography, not stock",
    ],
    images: [
      {
        src: "/rebel-fork-pizza.jpg",
        alt: "A hand-tossed pizza coming off the oven rack at Rebel Fork Kitchen, photographed on location",
      },
      {
        src: "/rebel-fork-pizza-2.jpg",
        alt: "Two kids in a booth at Rebel Fork Kitchen behind a pan of fresh-cut pizza",
      },
    ],
    featured: true,
    url: "https://rebelforkkitchen.com",

    slug: "rebel-fork-kitchen",
    tagline:
      "A restaurant website with the whole menu actually on it — thirteen categories, filterable, never a PDF.",
    meta: [
      { label: "Client", value: "Rebel Fork Kitchen" },
      { label: "Location", value: "Chuckey, Tennessee" },
      { label: "Industry", value: "Family Restaurant & Pizzeria" },
      { label: "Services", value: "Website · Interactive Menu · Photography" },
    ],
    goal: [
      "Rebel Fork Kitchen is a family-owned kitchen in Chuckey — hand-tossed pizza off the oven rack, smash burgers off the flat top, wings, loaded fries and Southern plates. They opened in 2025 with a motto that doesn't waste any words: it's fork'n good.",
      "The name is the point. They've never been interested in doing things the ordinary way, and the restaurant came out of a harder stretch than anyone sees from the dining room — setbacks, uncertainty, and the decision to build something anyway. Rebel Fork was born from a simple idea: no matter what life throws at you, there's always room for a fresh start.",
      "Online, theirs was a menu problem first. Thirteen categories and dozens of items is exactly the kind of list that ends up as a blurry PDF or a photo of a printed sheet nobody can read on a phone. The ordering needed to be just as plain — some people dine in, some call it in, some order online, and the site had to make all three obvious.",
    ],
    goalImage: {
      src: "/rebel-fork-kitchen-story.jpg",
      alt: "The “Room for a fresh start” section of the site, telling the family's story in their own words",
    },
    built: [
      {
        title: "The whole menu is on the site, and it filters.",
        description:
          "Thirteen categories — Appetizer Alley, Rebel Pies, Flippin' Good Burgers, Slammin' Sammies, Rebel Rascals, Family Meal Deals and the rest — with every item's name and description in real, readable text. Tap a category and the menu filters to it. No PDF, no pinch-and-zoom, and no reprint when something changes.",
        image: {
          src: "/rebel-fork-kitchen-interactive-menu.jpg",
          alt: "The menu page, with category filter chips above full item names and descriptions",
        },
      },
      {
        title: "We shot the food and the room on location.",
        description:
          "A full shoot in the kitchen and the dining room: pies coming off the rack, wings under the lamp, smash burgers plated, the front counter at dinner. The gallery says it plainly — no stock photos, just their oven.",
        image: {
          src: "/rebel-fork-kitchen-custom-photography.jpg",
          alt: "“The Goods” gallery on the site, a grid of food and interior photos shot at Rebel Fork Kitchen",
        },
      },
      {
        title: "Their story is on the site, in their own words.",
        description:
          "A “From our family” section about where Rebel Fork came from and why it's called that. It's the part of a restaurant a menu can't carry, and it's the reason somebody picks this place over the chain down the road.",
      },
      {
        title: "Three ways to order, three buttons.",
        description:
          "Dine in, order online, or call it in — each with its own card and a button that does the thing: directions, the order page, or a tap-to-call. Nobody has to guess which one is available.",
      },
      {
        title: "Specials and family deals have a permanent home.",
        description:
          "The rotating stuff gets its own place on the menu instead of living in a Facebook post that scrolls away by Thursday.",
      },
      {
        title: "Hiring runs through their own site.",
        description:
          "A “Work For Us” page, so open positions sit where people already look them up rather than only on social.",
      },
      {
        title: "It's built for a phone in the parking lot.",
        description:
          "Most people pull up a restaurant menu on a phone, deciding what they want before they walk in. That's the screen we designed first.",
      },
    ],
    showcase: {
      desktop: {
        src: "/rebel-fork-kitchen-desktop.jpg",
        alt: "The Rebel Fork Kitchen homepage on desktop",
      },
      mobile: {
        src: "/rebel-fork-kitchen-mobile.jpg",
        alt: "The Rebel Fork Kitchen homepage on a phone",
      },
    },
    results: [
      "One link that answers “what do y'all have?” — the entire menu, readable on a phone.",
      "Dine in, online, or call: each one is a single tap from the top of the page.",
      "A restaurant that opened in 2025 reads as established online — real photos, their real story, no template.",
    ],
    testimonial: {
      quote:
        "Brian made us at Rebel Fork Kitchen a great website. He was thorough, really captured our vision and was great to work with. We highly recommend.",
      name: "Rachel Mitchem",
      role: "Rebel Fork Kitchen · Chuckey, TN",
    },
  },
  {
    name: "Hunger First Greeneville",
    category: "Nonprofit Food Pantry",
    description:
      "A Greene County pantry serving the low-income, no-income, and homeless — groceries, clothing, hygiene and household supplies, no paperwork and no questions. We built their website and donated it.",
    highlights: [
      "Two front doors: one for people who need help, one for people who want to give",
      "A “what we need right now” list, so donors stop guessing",
      "Designed, built, and donated at no cost",
    ],
    images: [
      {
        src: "/hunger-first-greeneville-desktop.jpg",
        alt: "The Hunger First Greeneville homepage — “Nobody gets out of poverty alone”",
      },
    ],
    featured: true,
    url: "https://hungerfirstgv.org",

    slug: "hunger-first-greeneville",
    tagline:
      "A pantry's website with two front doors — one for the people who need help, one for the people who want to give. Built and donated.",
    meta: [
      { label: "Client", value: "Hunger First Greeneville" },
      { label: "Location", value: "Mosheim, Tennessee" },
      { label: "Industry", value: "Nonprofit Food Pantry · 501(c)(3)" },
      { label: "Services", value: "Website · Content · Donated at no cost" },
    ],
    goal: [
      "Hunger First Greeneville — the Elves & Angels chapter — is here for the low-income, no-income, and homeless of Greene County, with groceries, clothing, hygiene and household supplies, and neighbors who keep showing up. No paperwork. No questions. The doors on West Andrew Johnson Highway in Mosheim are open Tuesday through Friday, one o'clock to three-thirty.",
      "Everything about a pantry runs on people showing up: volunteers sorting what comes in, neighbors dropping off what they can spare, and a Facebook group where the closings and the urgent needs get posted. That works right up until someone outside the group needs to find them — or a first-time donor wants to know what's actually useful to bring.",
      "So the site had two jobs, and neither one could be the afterthought. Tell someone who is out of food exactly where to go and when, in plain language, with no hoops. And tell someone who wants to help exactly what to give and how to give it. We built it and handed it over at no charge — a pantry's money should buy groceries.",
    ],
    goalImage: {
      src: "/hunger-first-ways-to-donate.jpg",
      alt: "The “Three ways to put food on somebody's table” section, laying out how to give money, goods, or time",
    },
    built: [
      {
        title: "A “what we need right now” list, kept current.",
        description:
          "Deodorant, adult diapers, baby formula, canned meat, laundry detergent — the things that actually run out, listed plainly so a donor buys what the shelves are short on instead of guessing. And it goes well past food: hygiene and baby supplies, cleaning products, bedding, kitchen basics, even camping gear.",
        image: {
          src: "/hunger-first-things-we-need.jpg",
          alt: "The “Things we are in need of” section, a two-column list of current pantry needs",
        },
      },
      {
        title: "Two front doors, right at the top.",
        description:
          "“I need help” and “I want to help” sit side by side in the hero. Two completely different visitors land on the same page, and neither one has to hunt for their path.",
      },
      {
        title: "Giving is spelled all the way out.",
        description:
          "Money, goods, or time — each with its own step and the details right there: the Cash App handle, the PayPal address, the street address and hours, and a note that they're a 501(c)(3), so a donation may be deductible. Nobody has to message the Facebook page to find out how to help.",
      },
      {
        title: "An Amazon wish list that ships to the building.",
        description:
          "For people who want to give but can't drive over — order off the list and it arrives at the pantry. No trip, no drop-off, no coordinating with anybody.",
      },
      {
        title: "Address and hours are always a tap away.",
        description:
          "7485 West Andrew Johnson Highway, Tuesday through Friday, 1:00 to 3:30, linked straight to directions. Somebody looking for a pantry is almost always looking on a phone.",
      },
      {
        title: "The mission stayed in their own words.",
        description:
          "Hunger First's mission as it was written, credited to Cindy Risk, who started it in 1998 — alongside the story of the Greeneville chapter and the people running it now.",
      },
      {
        title: "Dignity was a design requirement.",
        description:
          "No intake forms, no income screeners, no stock photos of sad faces. The site says come as you are and then gets out of the way, which is exactly how the pantry itself works.",
      },
    ],
    showcase: {
      mobile: {
        src: "/hunger-first-greeneville-mobile.jpg",
        alt: "The Hunger First Greeneville homepage on a phone",
      },
    },
    ogImage: {
      src: "/hunger-first-things-we-need.jpg",
      alt: "The “Things we are in need of” section of the Hunger First Greeneville website",
    },
    results: [
      "One link that answers both questions a pantry gets: where do I go for help, and what do you need.",
      "Donors can see what's short this week instead of guessing at the door.",
      "Something to hand a church group, a school drive, or a first-time volunteer.",
      "The pantry owns the site outright, and it cost them nothing.",
    ],
  },
  // Screenshots for the next two are placeholders in /placeholders until Brian
  // sends the real captures. FeaturedWork skips them while they are.
  {
    name: "Greeneville & Co.",
    category: "Independent Real Estate Brokerage",
    description:
      "An independent brokerage on Tusculum Boulevard serving Greene County and the Tri-Cities. The website searches the live MLS natively — every listing, every town guide, on their own domain instead of inside somebody else's widget.",
    highlights: [
      "Live MLS search built into the site, not an IDX iframe",
      "Community guides for five towns, each with current listings",
      "A home-value request priced by an agent, not an algorithm",
    ],
    images: [
      {
        src: "/placeholders/greeneville-and-co-hero.svg",
        alt: "The Greeneville & Co. homepage — “Rooted in Greeneville. Serving East Tennessee.”",
      },
    ],
    featured: true,
    url: "https://greenevilleandco.com",

    slug: "greeneville-and-co",
    tagline:
      "A local brokerage's website with the whole MLS built in — live listings, town guides, and their own name on every page.",
    meta: [
      { label: "Client", value: "Greeneville & Co." },
      { label: "Location", value: "Greeneville, Tennessee" },
      { label: "Industry", value: "Real Estate Brokerage" },
      { label: "Services", value: "Website · Live MLS Integration · Content Editing" },
    ],
    goal: [
      "Greeneville & Co. is an independent brokerage on Tusculum Boulevard in Greeneville, started by Tom Willett, who will tell you plainly that he isn't your average broker. No franchise, no sales pitch, no sugarcoating — straight answers, hard work and aggressive marketing, with one licensed agent who stays with you from the first conversation to closing.",
      "Their slogan is real estate, done differently, and the website had to live up to it. Most small brokerages end up with a template site and an IDX widget bolted on: a search box that opens somebody else's page, under somebody else's branding, that Google barely credits to the brokerage at all.",
      "They wanted the opposite. A site that reads like a local firm that knows the ground — Greeneville, Afton, Chuckey, Tusculum, Jonesborough, Johnson City, Kingsport — with every home on the Tennessee/Virginia Regional MLS searchable on their own pages, and their own listings given pride of place.",
    ],
    built: [
      {
        title: "The MLS is part of the site, not a widget on it.",
        description:
          "Search runs directly against the Tennessee/Virginia Regional MLS through its RESO Web API. Filter by town, price, beds, baths, property type and acreage, and the results are their pages on their domain — shareable searches, real listing pages, and nothing copied into a database that can go stale.",
        image: {
          src: "/placeholders/greeneville-and-co-search.svg",
          alt: "The property search page, with filters above live MLS listing cards",
        },
      },
      {
        title: "Every town gets a real guide, with current homes underneath.",
        description:
          "Greeneville, Johnson City, Jonesborough, Kingsport and Morristown each have their own page: a local introduction written by people who live here, then the homes for sale in that town right now. It's the kind of page a search engine rewards and a widget can't produce.",
        image: {
          src: "/placeholders/greeneville-and-co-community.svg",
          alt: "The Homes for Sale in Greeneville community guide, with local copy above a grid of current listings",
        },
      },
      {
        title: "Don't let an algorithm price your house.",
        description:
          "Instead of an automated estimate, sellers request a real comparative market analysis. The form asks what a computer misses — the new roof, the finished basement, the road that floods — and a licensed agent prices it properly.",
        image: {
          src: "/placeholders/greeneville-and-co-home-value.svg",
          alt: "The “What's your home worth?” page, a short step-by-step valuation request",
        },
      },
      {
        title: "Their own listings come first.",
        description:
          "The brokerage's listings are pulled separately from the wider feed and featured on the homepage and agent pages, so the homes they're marketing aren't buried among thousands of others.",
      },
      {
        title: "Rentals and commercial have their own searches.",
        description:
          "Residential leases, storefronts, commercial buildings and land each get a dedicated page with the right filters already set, so a renter or a business owner doesn't have to wade through houses to find them.",
      },
      {
        title: "The team is on the site, in their own words.",
        description:
          "An agent page for each person, with a photo, a bio and a direct line — because at a small firm you're hiring the person, not the logo.",
        image: {
          src: "/placeholders/greeneville-and-co-team.svg",
          alt: "The Meet the Team section, with Tom Willett and the Greeneville & Co. agents",
        },
      },
      {
        title: "The office can edit it without calling us.",
        description:
          "Pages, agent bios, town guides and testimonials are content the office can change themselves. Listing data stays with the MLS, where it belongs, and updates on its own.",
      },
      {
        title: "Fast, findable, and careful with the rules.",
        description:
          "Clean listing URLs, search-friendly town pages, the MLS attribution the board requires, and API credentials that never leave the server.",
      },
    ],
    showcase: {
      desktop: {
        src: "/placeholders/greeneville-and-co-desktop.svg",
        alt: "The Greeneville & Co. homepage on desktop",
      },
      mobile: {
        src: "/placeholders/greeneville-and-co-mobile.svg",
        alt: "The Greeneville & Co. homepage on a phone",
      },
    },
    results: [
      "Every home on the regional MLS is searchable on Greeneville & Co.'s own domain, under their own name.",
      "Town guides that give the brokerage something to rank for beyond its own name.",
      "Sellers get a person pricing their house, which is the whole point of the firm.",
      "An independent brokerage that looks every bit as established online as the franchises down the road.",
    ],
  },
  {
    name: "Hydra ThrIVe",
    category: "Mobile IV Hydration & Wellness",
    description:
      "A nurse-owned mobile IV service in Greeneville that comes to your home, office, gym — or the drag strip. The website helps people pick the right drip, book it, and find the team trackside.",
    highlights: [
      "A “choose your path” drip finder that recommends a drip in two taps",
      "A separate trackside page for diesel and motorsport events",
      "Real photos of the nurses and the work, not stock",
    ],
    images: [
      {
        src: "/placeholders/hydra-thrive-hero.svg",
        alt: "The Hydra ThrIVe homepage, with a photo of an IV drip and the Book a visit button",
      },
    ],
    featured: true,
    url: "https://hydrathrivetn.com",

    slug: "hydra-thrive",
    tagline:
      "A mobile IV website that answers “which drip do I need?” before anyone has to call — and has a louder twin for race day.",
    meta: [
      { label: "Client", value: "Hydra ThrIVe" },
      { label: "Location", value: "Greeneville, Tennessee" },
      { label: "Industry", value: "Mobile IV Hydration & Wellness" },
      { label: "Services", value: "Website · Drip Finder · Event Landing Page" },
    ],
    goal: [
      "Hydra ThrIVe is a mobile IV hydration and wellness service founded in 2024 by Meghan, a registered nurse since 2008 with a background in critical care, post-op recovery and home health. She brings IV drips and vitamin shots to people's homes, offices and gyms across Greene County, one-on-one, with time to talk before anything starts.",
      "IV therapy is new to a lot of people, and the first questions are always the same: is this safe, who's putting the line in, and which drip do I actually need? A menu of drips with names like Myers Cocktail doesn't answer that on its own.",
      "There's a second side to the business, too. Hydra ThrIVe sets up trackside at diesel and motorsport events with chairs, bags and several lines running at once — a completely different crowd that needed a completely different pitch.",
    ],
    goalImage: {
      src: "/placeholders/hydra-thrive-team.svg",
      alt: "The About Hydra ThrIVe section, with Meghan in teal scrubs",
    },
    built: [
      {
        title: "A drip finder that asks what's bugging you.",
        description:
          "“Running on fumes,” “last night got away from me,” “my workouts are catching up with me” — pick the closest one, answer a follow-up, and the site recommends a drip with the reason why and a tip from Meghan. And if the answer sounds like a doctor's visit instead of a drip, it says so.",
        image: {
          src: "/placeholders/hydra-thrive-finder.svg",
          alt: "The drip finder, asking “What is bugging you most today?” with a list of plain-language answers",
        },
      },
      {
        title: "A trackside page for race day.",
        description:
          "/track is the louder, darker side of the brand — Hydrate. Recover. Perform. — with a trimmed menu written for crews on hot asphalt and a list of upcoming events, so promoters and racers know where to find the tent.",
        image: {
          src: "/placeholders/hydra-thrive-track.svg",
          alt: "The trackside landing page, a dark page headed Hydrate. Recover. Perform.",
        },
      },
      {
        title: "The nurse comes first.",
        description:
          "Meghan's credentials and the team behind her sit near the top of the page, because the first thing someone wants to know before an IV is who's starting it.",
      },
      {
        title: "Real photos, framed like the work.",
        description:
          "Photos of Meghan prepping a line, B12 shots, drips in a living room and the tent at a truck show, set in taped frames that feel like a scrapbook rather than a stock library. An events row opens into a full-size lightbox.",
      },
      {
        title: "The whole menu, in plain language.",
        description:
          "Every drip, shot and add-on with a line on what it's for, so people can compare before they book instead of messaging to ask what's in each bag.",
      },
      {
        title: "Booking is one button.",
        description:
          "Book a visit goes straight to their scheduling system, with the phone number beside it for anyone who'd rather talk first — and kept out of reach of the spam bots that scrape numbers off websites.",
      },
      {
        title: "Ten towns, named.",
        description:
          "Greeneville, Tusculum, Mosheim, Chuckey, Afton, Baileyton and the rest are listed by name, so someone in Bulls Gap knows they're covered before they ask.",
      },
      {
        title: "Measured from day one.",
        description:
          "Google Analytics on both pages, so the owner can see what brings people in and which side of the business they came for.",
      },
    ],
    showcase: {
      desktop: {
        src: "/placeholders/hydra-thrive-desktop.svg",
        alt: "The Hydra ThrIVe homepage on desktop",
      },
      mobile: {
        src: "/placeholders/hydra-thrive-mobile.svg",
        alt: "The Hydra ThrIVe homepage on a phone",
      },
    },
    results: [
      "First-time clients can work out which drip they need without a phone call.",
      "The event business has its own page to hand a promoter or post before race weekend.",
      "A one-nurse startup reads as a credible clinical service — real people, real photos, clear booking.",
    ],
  },
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
        "Huge thank you to Made in Greene for the creation and revamp of The Funny Farm's website. He made my life so much easier and the website is fantastic. He is local and not some guy over the phone! He came out multiple times to make sure we were on the same page about our offers. I highly recommend!",
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
