import type { StaticImageData } from "next/image";
import { images } from "@/content/images";
/**
 * Practice areas. Order here = order on the site.
 *
 * ALL copy below (summary, overview, services, clients, faqs) is DRAFT,
 * written for the rebuild from the current site's practice list.
 * The firm must review every line before launch.
 *
 * `image: null` renders a labelled placeholder.
 */

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string[];
  services: string[];
  clients: string[];
  faqs: { q: string; a: string }[];
  /** lowRes: fine for small cards, too small for the page hero (placeholder shown there) */
  image: { src: StaticImageData; alt: string; lowRes?: boolean; position?: string } | null;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    shortTitle: "Corporate & Commercial",
    summary:
      "Company formation, governance, transactions and the commercial contracts that keep businesses moving.",
    overview: [
      "From incorporation to exit, we advise businesses on the legal decisions that shape their growth. Our work spans company formation and restructuring, shareholder arrangements, mergers and acquisitions, and the day-to-day contracts that keep operations running.",
      "We focus on practical, commercially minded advice, structuring transactions so they work on paper and in practice, and anticipating the issues that tend to surface later.",
    ],
    services: [
      "Company incorporation and CAC filings",
      "Corporate governance and board advisory",
      "Shareholder and joint venture agreements",
      "Mergers, acquisitions and restructuring",
      "Commercial contracts and supply agreements",
      "Foreign investment and market entry",
    ],
    clients: ["Start-ups and founders", "SMEs", "Multinational companies", "Investors", "Family businesses"],
    faqs: [
      {
        q: "Can you help us set up a company in Nigeria?",
        a: "Yes. We handle incorporation end to end: name reservation, CAC registration, statutory documents and post-incorporation compliance.",
      },
      {
        q: "Do you review contracts prepared by the other side?",
        a: "Yes. We review, negotiate and redraft third-party contracts, highlighting risks in plain language before you sign.",
      },
      {
        q: "Can you act on cross-border transactions?",
        a: "Yes. We regularly advise foreign investors and work alongside counsel in other jurisdictions on cross-border deals.",
      },
    ],
    image: { src: images.briefcaseGavel, alt: "Leather briefcase beside a judge's gavel" },
  },
  {
    slug: "dispute-resolution",
    title: "Dispute Resolution & Strategic Advisory",
    shortTitle: "Dispute Resolution",
    summary:
      "Litigation, arbitration and negotiated settlements, with strategy that looks beyond the immediate dispute.",
    overview: [
      "When disputes arise, we protect your position with clear strategy and careful preparation. We represent clients in litigation, arbitration and mediation, and advise on how to resolve matters efficiently, often before they reach a courtroom.",
      "Our strategic advisory work helps clients assess risk early, preserve relationships where it matters, and make informed decisions about when to settle and when to fight.",
    ],
    services: [
      "Commercial litigation",
      "Domestic and international arbitration",
      "Mediation and negotiated settlements",
      "Debt recovery and enforcement",
      "Pre-action risk assessment",
      "Regulatory investigations",
    ],
    clients: ["Corporations", "Financial institutions", "Government agencies", "Private individuals"],
    faqs: [
      {
        q: "Should I go to court or arbitration?",
        a: "It depends on your contract, the value and nature of the dispute, and how quickly you need a result. We assess these factors with you before recommending a route.",
      },
      {
        q: "Can a dispute be settled without litigation?",
        a: "Often, yes. We explore negotiation and mediation early, and only recommend litigation when it is the best route to your objective.",
      },
      {
        q: "How long does a commercial case usually take?",
        a: "Timelines vary widely by forum and complexity. At the outset we give you a realistic estimate and keep you updated at each stage.",
      },
    ],
    image: { src: images.gavelScalesDesk, alt: "Gavel and brass scales of justice on a wooden desk" },
  },
  {
    slug: "trusts-estates-wealth",
    title: "Trusts, Estates & Wealth Planning",
    shortTitle: "Trusts & Estates",
    summary:
      "Wills, trusts and succession structures that protect family wealth across generations.",
    overview: [
      "We help individuals and families protect what they have built and pass it on with certainty. Our advice covers wills, trusts, succession planning and the administration of estates.",
      "Every plan is personal. We take time to understand your family, assets and goals, then design structures that are clear, tax-aware and easy for your loved ones to follow.",
    ],
    services: [
      "Wills and testamentary planning",
      "Private and family trusts",
      "Succession planning for family businesses",
      "Probate and estate administration",
      "Asset protection structures",
      "Powers of attorney",
    ],
    clients: ["Individuals and families", "High-net-worth clients", "Family businesses", "Executors and trustees"],
    faqs: [
      {
        q: "Do I need a will if I have a small estate?",
        a: "A will is valuable at any level of wealth. It makes your wishes clear and can save your family time, cost and uncertainty.",
      },
      {
        q: "What is the difference between a will and a trust?",
        a: "A will takes effect on death; a trust can hold and manage assets during your lifetime and beyond. We explain which suits your goals.",
      },
      {
        q: "Can you help administer a relative's estate?",
        a: "Yes. We guide executors and families through probate and estate administration from start to finish.",
      },
    ],
    image: { src: images.gavelOpenBook, alt: "Gavel resting in front of an open law book" },
  },
  {
    slug: "public-sector-ppp-infrastructure",
    title: "Public Sector, PPP & Infrastructure",
    shortTitle: "Public Sector & PPP",
    summary:
      "Advising governments, agencies and investors on public-private partnerships, procurement and infrastructure.",
    overview: [
      "We advise governments, public agencies and private investors on the projects that build economies. Our work covers public-private partnerships, public procurement, concessions and infrastructure development.",
      "We understand how policy, regulation and commercial interests intersect in public projects, and help clients structure arrangements that are bankable, compliant and sustainable.",
    ],
    services: [
      "PPP structuring and transaction advisory",
      "Public procurement and tender support",
      "Concession and project agreements",
      "Infrastructure and energy projects",
      "Policy and regulatory reform advisory",
      "Government contracts and compliance",
    ],
    clients: ["Federal and state governments", "Public agencies", "Project developers", "Investors and lenders"],
    faqs: [
      {
        q: "Do you advise government bodies directly?",
        a: "Yes. We advise ministries, agencies and state governments, as well as the private parties that partner with them.",
      },
      {
        q: "Can you support us through a public tender?",
        a: "Yes. We help bidders prepare compliant submissions and advise procuring entities on fair, transparent processes.",
      },
      {
        q: "What makes a PPP project bankable?",
        a: "Clear risk allocation, reliable revenue mechanisms and robust contracts. We help structure projects that lenders and investors can support.",
      },
    ],
    image: { src: images.publicSectorBuilding, alt: "A neoclassical government building with columns under a blue sky" },
  },
  {
    slug: "technology-data-privacy",
    title: "Technology, Data Protection & Privacy",
    shortTitle: "Technology & Data",
    summary:
      "NDPA compliance, data governance, technology contracts and regulatory advice for digital businesses.",
    overview: [
      "Technology moves quickly; the law is catching up. We help businesses innovate with confidence, advising on data protection under the Nigeria Data Protection Act, technology contracts, and the regulation of digital services.",
      "From compliance audits to privacy policies and incident response, we turn complex regulatory requirements into practical steps your team can follow.",
    ],
    services: [
      "NDPA compliance audits and programmes",
      "Privacy policies and data processing agreements",
      "Data breach response",
      "Technology and software licensing",
      "Fintech and digital services regulation",
      "Cross-border data transfers",
    ],
    clients: ["Technology companies", "Fintechs", "Data controllers and processors", "Start-ups"],
    faqs: [
      {
        q: "Does the NDPA apply to my business?",
        a: "If you collect or process personal data of people in Nigeria, it very likely does. We can assess your obligations quickly.",
      },
      {
        q: "What should we do after a data breach?",
        a: "Act fast: contain the breach, assess the risk and consider notification duties. Contact us immediately and we will guide you.",
      },
      {
        q: "Can you draft our privacy policy and terms?",
        a: "Yes. We draft clear, compliant privacy policies, terms of use and data processing agreements tailored to your service.",
      },
    ],
    image: { src: images.dataPrivacyPadlock, alt: "A padlock and chain resting on a laptop keyboard", position: "58% center" },
  },
  {
    slug: "financial-services-regulatory",
    title: "Financial Services & Regulatory Advisory",
    shortTitle: "Financial Services",
    summary:
      "Licensing, compliance and transactional counsel for banks, fintechs and financial institutions.",
    overview: [
      "We advise banks, fintechs, investment firms and other financial institutions on licensing, compliance and transactions. Our regulatory insight helps clients navigate a fast-changing landscape with confidence.",
      "Whether you are launching a new product, seeking a licence or responding to a regulator, we provide clear, timely advice grounded in how the rules work in practice.",
    ],
    services: [
      "Licensing and regulatory approvals",
      "Compliance programmes and reviews",
      "Anti-money laundering (AML) advisory",
      "Lending and finance documentation",
      "Payments and fintech regulation",
      "Engagement with regulators",
    ],
    clients: ["Banks", "Fintechs", "Investment and asset managers", "Microfinance institutions"],
    faqs: [
      {
        q: "Can you help us obtain a licence?",
        a: "Yes. We guide clients through licence applications, from choosing the right licence to preparing documents and engaging the regulator.",
      },
      {
        q: "Do you review compliance programmes?",
        a: "Yes. We review existing programmes against current requirements and help close any gaps.",
      },
      {
        q: "Can you support us during a regulatory inquiry?",
        a: "Yes. We help you prepare responses, manage communication with the regulator and protect your position.",
      },
    ],
    image: { src: images.financialServicesStatue, alt: "A classical marble bust against a dark background", position: "18% center" },
  },
  {
    slug: "creative-economy",
    title: "Creative Economy",
    shortTitle: "Creative Economy",
    summary:
      "Intellectual property, talent and production agreements for creators, studios and media businesses.",
    overview: [
      "Africa's creative industries are among its most dynamic. We advise artists, producers, studios and media businesses on protecting and monetising their work.",
      "Our advice covers intellectual property, talent and production agreements, licensing and distribution, so creators can focus on the work while their rights are secured.",
    ],
    services: [
      "Copyright and trademark protection",
      "Talent, management and endorsement agreements",
      "Film, music and content production contracts",
      "Licensing and distribution deals",
      "Brand and IP enforcement",
      "Sponsorship and partnership agreements",
    ],
    clients: ["Artists and creators", "Record labels and studios", "Production companies", "Brands and agencies"],
    faqs: [
      {
        q: "How do I protect my creative work?",
        a: "Copyright arises automatically in original work, but registration and well-drafted contracts make it far easier to enforce. We advise on both.",
      },
      {
        q: "Can you review a record or management deal?",
        a: "Yes. We review and negotiate talent, management and label agreements so you understand exactly what you are signing.",
      },
      {
        q: "Can you help register our brand?",
        a: "Yes. We handle trademark searches, registration and enforcement to protect your brand.",
      },
    ],
    image: { src: images.agreementClipboard, alt: "Intellectual property agreement on a clipboard with a pen and gavel" },
  },
];

export const getPracticeArea = (slug: string) => practiceAreas.find((p) => p.slug === slug);
