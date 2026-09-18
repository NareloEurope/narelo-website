/**
 * The Narelo Family Guide, as a page: /dossier/.
 *
 * Source: the PDF "Narelo Family Guide" Vivien supplied (2026-09-17), the same
 * document referenced in content/membership.ts as "the Narelo Family Guide"
 * and "the parent dossier". This page reproduces it in full at a link-only
 * URL: not in `site.nav`, not in the footer, excluded from sitemap.xml and
 * marked noindex, so it is reachable only by whoever has the link, the way
 * membership.joining already describes the mini dossier being offered.
 *
 * Everything the dossier says elsewhere on the site (what Narelo is, the
 * founders, the five worlds, the age journey, what membership includes) is
 * pulled from its one canonical home in content/home.ts, content/membership.ts,
 * content/experiences.ts and content/stages.ts rather than restated here, per
 * AGENTS.md's "one owner per subject". Only what exists nowhere else on the
 * site, the research citations, the pricing table and the dossier's own
 * chapter headings, lives in this file.
 *
 * Pricing is published here on the team's explicit instruction (Vivien,
 * 2026-09-17), even though the rest of the site carries none: the dossier is
 * the one place a family already deep in conversation sees figures, and this
 * page is that same document, not the public marketing pages. Do not lift
 * these figures onto Membership, Experiences or any other page.
 *
 * House style: no em dashes in published copy (Rui, 2026-08-26). The PDF's
 * spaced hyphens become commas here, matching how the rest of the site already
 * carries dossier sentences.
 */

export const hero = {
  eyebrow: 'Family Guide',
  image: '/images/img-5208.webp',
  imageAlt: 'Three children on a dune at sunset, looking out over the sea.',
} as const;

export const research = {
  eyebrow: 'Our view on childhood',
  label: 'What the research confirms',
  body: 'Critical thinking, emotional intelligence, self-regulation and cross-cultural adaptability are the competencies that will matter for Generation Beta, and they are built through real-life experience, nature, movement and community.',
  citations: ['MIT & Stanford', 'Harvard', 'OECD', 'Generation Beta research'],
} as const;

export const worldChapter = {
  heading: 'The world of Narelo',
  whatIsLabel: 'What is Narelo?',
  whoLabel: 'Who is behind it?',
} as const;

export const experienceChapter = {
  heading: 'The Narelo experience',
  whatLabel: 'What will my child actually experience?',
  journeyEyebrow: 'Where does your family’s journey begin?',
  worldsLabel: 'Five worlds to explore',
} as const;

export const membershipChapter = {
  heading: 'Becoming part of Narelo',
  receiveLabel: 'What does your family actually receive?',
  heartEyebrow: 'The heart of the membership',
  heartHeading: 'Weekly Experiences, all year round',
  heartFacts: ['Pregnancy to age eight', 'Small groups of eight', '90 minutes'],
} as const;

/**
 * Two membership choices, not four pricing options (Vivien, 2026-09-19,
 * after the financial advisor): a 3-Month Membership and an Annual
 * Membership, and within each the Founding Family rate as a second line.
 * The decision a family faces should be one question, three months or the
 * year, and the page is built so that is what it feels like. "Pay per term"
 * and "pay per year" are no longer the headline, quarterly payment of the
 * annual fee is not mentioned at all (it is handled in the contract for
 * families who ask), no tier says "save N%" (discount-heavy, not Narelo),
 * and the real totals are one tap away under the monthly figure, the
 * same PriceReveal tap as before, so the actual annual charge is always
 * there to see.
 *
 * The figures: the 3-Month Membership is 20% above the PDF's term fee
 * (445€ became 534€, 520€ became 624€, 670€ became 804€, 710€ became 852€).
 * The Annual Membership is the PDF's full annual total less 10%, where the
 * PDF gave 5%. Against four 3-month memberships that is about 25% less a
 * year, which the "How payment works" note says in words, not as a badge.
 * Founding Families, the first 50, take a lifetime 10% off either. Bloom
 * is a single four-month membership with no annual option and is
 * unchanged from the PDF. These are the dossier page's figures only, they
 * are not in the PDF and the PDF was not regenerated.
 *
 * Per-month figures divide the 3-month fee by 3 and the annual total by
 * 12, the standard subscription convention Vivien asked for on
 * 2026-09-18; the annual one is marked "equivalent" since the charge
 * itself is once a year. `bestLabel` replaces the earlier "The rate we hope
 * you land on", which read as salesy (Vivien, 2026-09-19); the new line
 * states a fact about the annual option for Founding Families and nothing
 * more.
 *
 * The discounts row at the foot keeps the sibling and founding lines from
 * the PDF. The PDF's "5% discount for annual payment" line is gone: the
 * Annual Membership is now its own price rather than a discount on
 * something else, and a percentage badge there would have contradicted
 * the two figures a family has just read.
 */
export type PricingOption = {
  readonly name: string;
  /** What `total` covers, in words: '3 months', 'the year', '4 months'. */
  readonly period: string;
  readonly perMonth: string;
  readonly foundingPerMonth: string;
  /** True for the annual option: the monthly figure is an equivalent, the charge is once a year. */
  readonly equivalent?: boolean;
  readonly total: string;
  readonly foundingTotal: string;
  readonly best?: boolean;
};

export type PricingPlan = {
  readonly name: string;
  readonly age: string;
  readonly options: readonly PricingOption[];
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Every week · All year round',
  lede: 'One membership, one place to belong',
  intro: 'Two ways to belong: for three months at a time, or for the whole year. Founding Families, the first 50, have their own rate within each.',
  perMonthSuffix: '/month',
  equivalentSuffix: 'equivalent',
  foundingLabel: 'Founding Family',
  /** The tap that shows an option's real total. Back by request (Vivien, 2026-09-19): the totals were shown plainly for one revision, then asked for behind a tap again. */
  revealLabel: 'See the full price',
  bestLabel: 'Our best value for Founding Families joining for the year',
  howItWorks: {
    label: 'How payment works',
    body: [
      'The 3-Month Membership is paid at the start of each three months.',
      'The Annual Membership is one payment at the start of the year, and works out around a quarter less than four 3-month memberships. Its monthly figure is that total divided by twelve.',
      'Founding Families, the first 50, receive a lifetime 10% off whichever they choose.',
    ],
  },
  plans: [
    {
      name: 'Bloom',
      age: 'Pregnancy',
      options: [
        {
          name: 'Bloom Membership',
          period: '4 months',
          perMonth: '149€',
          foundingPerMonth: '134€',
          total: '595€ for the 4 months',
          foundingTotal: '536€',
        },
      ],
    },
    {
      name: 'Nurture',
      age: '0–1 year',
      options: [
        {
          name: '3-Month Membership',
          period: '3 months',
          perMonth: '178€',
          foundingPerMonth: '160€',
          total: '534€ for the 3 months',
          foundingTotal: '481€',
        },
        {
          name: 'Annual Membership',
          period: 'the year',
          perMonth: '134€',
          foundingPerMonth: '121€',
          equivalent: true,
          total: '1.607€ for the year',
          foundingTotal: '1.446€',
          best: true,
        },
      ],
    },
    {
      name: 'The Nest',
      age: '1–2 years',
      options: [
        {
          name: '3-Month Membership',
          period: '3 months',
          perMonth: '208€',
          foundingPerMonth: '187€',
          total: '624€ for the 3 months',
          foundingTotal: '562€',
        },
        {
          name: 'Annual Membership',
          period: 'the year',
          perMonth: '156€',
          foundingPerMonth: '141€',
          equivalent: true,
          total: '1.877€ for the year',
          foundingTotal: '1.689€',
          best: true,
        },
      ],
    },
    {
      name: 'Little Beginnings',
      age: '2–3 years',
      options: [
        {
          name: '3-Month Membership',
          period: '3 months',
          perMonth: '268€',
          foundingPerMonth: '241€',
          total: '804€ for the 3 months',
          foundingTotal: '724€',
        },
        {
          name: 'Annual Membership',
          period: 'the year',
          perMonth: '201€',
          foundingPerMonth: '181€',
          equivalent: true,
          total: '2.417€ for the year',
          foundingTotal: '2.175€',
          best: true,
        },
      ],
    },
    {
      name: 'Builders I',
      age: '3–5 years',
      options: [
        {
          name: '3-Month Membership',
          period: '3 months',
          perMonth: '268€',
          foundingPerMonth: '241€',
          total: '804€ for the 3 months',
          foundingTotal: '724€',
        },
        {
          name: 'Annual Membership',
          period: 'the year',
          perMonth: '201€',
          foundingPerMonth: '181€',
          equivalent: true,
          total: '2.417€ for the year',
          foundingTotal: '2.175€',
          best: true,
        },
      ],
    },
    {
      name: 'Builders II',
      age: '5–6 years',
      options: [
        {
          name: '3-Month Membership',
          period: '3 months',
          perMonth: '268€',
          foundingPerMonth: '241€',
          total: '804€ for the 3 months',
          foundingTotal: '724€',
        },
        {
          name: 'Annual Membership',
          period: 'the year',
          perMonth: '201€',
          foundingPerMonth: '181€',
          equivalent: true,
          total: '2.417€ for the year',
          foundingTotal: '2.175€',
          best: true,
        },
      ],
    },
    {
      name: 'Navigators',
      age: '6–8 years',
      options: [
        {
          name: '3-Month Membership',
          period: '3 months',
          perMonth: '284€',
          foundingPerMonth: '256€',
          total: '852€ for the 3 months',
          foundingTotal: '767€',
        },
        {
          name: 'Annual Membership',
          period: 'the year',
          perMonth: '213€',
          foundingPerMonth: '191€',
          equivalent: true,
          total: '2.552€ for the year',
          foundingTotal: '2.297€',
          best: true,
        },
      ],
    },
  ] as readonly PricingPlan[],
  joiningFee: 'One-time joining fee of 99€ per family · 49€ for Bloom.',
  discounts: [
    { value: '15%', label: 'sibling discount' },
    { value: '10%', label: 'lifetime membership discount for the first 50 Founding Families' },
  ],
} as const;

export const reserve = {
  eyebrow: 'Founding memberships are limited to 50 families',
  heading: 'Reserve your family’s place',
  body: 'If Narelo feels right for your family, the next step is simple: a conversation.',
  steps: ['Message us', 'We find the fit', 'A short conversation', 'An invitation'],
  ctaLabel: 'Start a conversation',
  instagramLabel: '@narelo.europe',
} as const;
