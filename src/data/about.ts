/*
  ABOUT PAGE CONTENT — formal rewrite for the mid-market redesign.
  Copy only; layout is in src/pages/about.astro.
  "[PLACEHOLDER: ...]" renders as a visible tag until Brian confirms it.
*/

export const seo = {
  title: "About Made in Greene",
  description:
    "Made in Greene is a web design and development studio in Greeneville, Tennessee, building custom websites, integrations and automation for established businesses.",
};

export const header = {
  eyebrow: "About",
  title: "A web design and development studio in Greeneville, Tennessee.",
  subtitle:
    "We design, build and maintain websites and the systems behind them for businesses across East Tennessee.",
};

export const overview = {
  eyebrow: "The Studio",
  title: "Made in Greene designs and builds websites that do real work for a business.",
  body: [
    "We are a small, senior studio. Every project is led from first conversation to launch by the people who design it and write the code, with no account managers or outsourced development in between.",
    "Our work covers custom website design and development, integrations with the software a business already runs on, automation of repetitive operational work, and on-location photography. After launch, we host, monitor and maintain what we build.",
    "Made in Greene is family-owned and based in Greeneville, and we are members of the Greene County Partnership.",
  ],
  facts: [
    { label: "Founded", value: "[PLACEHOLDER: year founded]" },
    { label: "Based in", value: "Greeneville, Tennessee" },
    { label: "Experience", value: "15+ years in web design and development" },
    { label: "Membership", value: "Greene County Partnership" },
  ],
};

export const leadership = {
  eyebrow: "Leadership",
  title: "The people responsible for your project.",
  people: [
    {
      name: "Brian Garcia",
      role: "Owner",
      bio: "Brian leads design and development on every Made in Greene project. He brings more than fifteen years of professional experience designing and developing websites for organizations that need dependable, thoughtful digital work.",
    },
    {
      name: "Domenique [PLACEHOLDER: confirm last name]",
      role: "[PLACEHOLDER: title, e.g. Client Relations & Project Management]",
      bio: "Domenique manages projects and client communication. She brings more than ten years of experience supporting C-suite executives at Verizon's corporate headquarters.",
    },
  ],
  /* Shot needed. Set `src` to the photo's path (e.g. "/about-leadership.jpg")
     and the placeholder panel is replaced by the image. */
  image: {
    src: "",
    alt: "Brian and Domenique of Made in Greene at the studio",
    shot: "Leadership portrait of Brian and Domenique, working setting, portrait 4:5",
  },
};

export const principles = {
  eyebrow: "How We Work",
  title: "Principles we hold ourselves to.",
  items: [
    {
      title: "Accountable from start to finish.",
      text: "The people who scope your project are the people who build it and support it afterwards.",
    },
    {
      title: "A fixed scope and a written plan.",
      text: "Before any build begins, you receive a written roadmap and a fixed-price proposal.",
    },
    {
      title: "Plain answers.",
      text: "If something isn't worth building, we say so, and we explain trade-offs in terms of time, cost and risk.",
    },
    {
      title: "You own what we build.",
      text: "Your domain, your content and your site files stay in your name.",
    },
  ],
};

export const approach = {
  eyebrow: "Our Approach",
  title: "Modern engineering, built to be maintained.",
  items: [
    {
      title: "Performance first",
      text: "Lightweight, standards-based builds that load quickly on real phones and real connections, and meet WCAG 2.1 AA accessibility guidelines.",
    },
    {
      title: "Integration-ready",
      text: "Sites are built to connect to CRMs, scheduling, inventory, accounting and payment systems through their APIs.",
    },
    {
      title: "Maintained after launch",
      text: "Hosting, monitoring, security updates and ongoing changes are available on a monthly plan.",
    },
  ],
};
