/** About page copy. Lines marked DRAFT need approval from the firm. */

export const about = {
  hero: {
    eyebrow: "About Will & Ash",
    title: "A modern firm, built on enduring standards",
    body: "Since 2019 we have advised governments, financial institutions, corporations, entrepreneurs and private clients across Africa and beyond.",
  },

  // DRAFT — expanded from the current site's About summary
  story: {
    eyebrow: "Our story",
    heading: "Local insight. Global standards.",
    body: [
      "Will & Ash was founded in 2019 with a simple conviction: that clients deserve legal counsel as forward-thinking as the challenges they face.",
      "From our offices in Lagos and Abuja, we combine deep knowledge of the Nigerian legal and regulatory landscape with the rigour and responsiveness expected of an international firm.",
      "Today we act for a broad range of clients, from public institutions shaping national infrastructure to founders building their first company and families planning for the next generation.",
    ],
  },

  approach: {
    eyebrow: "Our approach",
    heading: "Where law, business and policy meet",
    body: "Our advice is strategically informed, combining legal precision with commercial intelligence.",
    pillars: [
      {
        title: "Law",
        text: "Rigorous analysis and precise drafting, grounded in a thorough understanding of Nigerian and international law.",
      },
      {
        title: "Business",
        text: "Advice shaped around your commercial objectives, so the legal answer is also the practical one.",
      },
      {
        title: "Policy",
        text: "Insight into regulatory and policy direction, helping you anticipate change rather than react to it.",
      },
    ],
  },

  team: {
    eyebrow: "Our people",
    heading: "Experienced counsel, directly accessible",
    body: "Clients work directly with experienced practitioners. No hand-offs, just a team that knows your matter from the first conversation.",
    // DRAFT
    points: [
      { title: "Direct access", text: "You speak with the lawyer handling your matter, not an intermediary." },
      { title: "Senior attention", text: "Experienced practitioners lead every engagement from start to finish." },
      { title: "Responsive by default", text: "Clear timelines and prompt updates, so you are never left waiting." },
    ],
  },
} as const;
