/**
 * Home page copy. Lines marked DRAFT were written for the rebuild and
 * need approval from the firm; everything else is from the current site.
 */

export const home = {
  hero: {
    eyebrow: "Commercial law firm · Lagos & Abuja",
    headingLines: ["Built to protect", "what matters most"],
    body: "Strategic legal counsel for individuals and businesses facing complex challenges and planning for what comes next.",
    primaryCta: "Get a free consultation",
    secondaryCta: "Explore our practice areas",
  },

  intro: {
    eyebrow: "About the firm",
    heading: "Where legal mastery meets strategic innovation",
    body: [
      "Established in 2019, Will & Ash serves governments, financial institutions, corporations, entrepreneurs and private clients across Africa and beyond.",
      "We combine forward-thinking counsel grounded in local expertise with the standards expected of a global firm.",
    ],
    link: "More about us",
  },

  // TODO: firm to confirm each figure before launch
  stats: [
    { value: "15+", label: "Combined years of experience" },
    { value: "100+", label: "Cases and clients served" },
    { value: "2", label: "Offices in Lagos & Abuja" },
  ],

  practices: {
    eyebrow: "Practice areas",
    heading: "Counsel across the matters that shape your future",
    body: "Seven focused practices, each led with the same commitment to clarity, precision and commercial sense.",
    link: "See all practices",
  },

  expect: {
    eyebrow: "Our approach",
    heading: "What you can expect from our team",
    body: "We bridge law, business and policy, pairing legal precision with commercial intelligence so every piece of advice is strategically informed.",
    points: [
      { title: "Legal precision", text: "Rigorous analysis and careful drafting on every matter, large or small." },
      { title: "Commercial intelligence", text: "Advice shaped around your business goals, not just the letter of the law." },
      { title: "Policy insight", text: "An understanding of the regulatory landscape that lets you plan ahead." },
    ],
  },

  // DRAFT
  process: {
    eyebrow: "How we work",
    heading: "A clear path from first call to resolution",
    steps: [
      { title: "Consultation", text: "A free, confidential conversation to understand your situation and objectives." },
      { title: "Assessment", text: "We review the facts, documents and risks, and set out your options plainly." },
      { title: "Strategy", text: "A tailored plan with clear next steps, timelines and a transparent fee." },
      { title: "Resolution & beyond", text: "We see the matter through and stay available as your needs evolve." },
    ],
  },

  different: {
    eyebrow: "Why Will & Ash",
    heading: "What makes us different",
    values: [
      { icon: "compass", title: "Clarity + guidance", text: "Straight answers in plain language, so you always know where you stand." }, // DRAFT text
      { icon: "scale", title: "Flexible fee pricing", text: "Fee structures that fit the matter, agreed upfront with no surprises." }, // DRAFT text
      { icon: "spark", title: "Specialised expertise", text: "Practitioners who focus on their fields and keep pace with change." }, // DRAFT text
      { icon: "shield", title: "Peace of mind", text: "Discreet, dependable counsel that lets you focus on what comes next." }, // DRAFT text
    ],
  },

  // DRAFT — firm to confirm answers
  faqs: [
    {
      q: "Is the first consultation really free?",
      a: "Yes. Your first consultation is free, in-depth and confidential. We use it to understand your matter and explain your options before any engagement begins.",
    },
    {
      q: "Do I need to visit one of your offices?",
      a: "No. We meet clients in person at our Lagos and Abuja offices, or virtually by video call, whichever suits you.",
    },
    {
      q: "How are your fees structured?",
      a: "Depending on the matter, we offer fixed fees, staged fees or hourly rates. We agree the structure with you in writing before work starts.",
    },
    {
      q: "Do you act for clients outside Nigeria?",
      a: "Yes. We advise clients across Africa and internationally on matters with a Nigerian or wider African dimension.",
    },
    {
      q: "Is what I share with you kept confidential?",
      a: "Always. Everything you share with us is treated as strictly confidential from the very first conversation.",
    },
  ],

  cta: {
    heading: "Free, in-depth and confidential consultation",
    body: "Tell us what you are facing. We will listen, explain your options and help you decide what comes next.",
    button: "Book your consultation",
  },
} as const;
