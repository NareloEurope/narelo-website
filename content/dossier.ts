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
 * Shown per month rather than as one termly or annual total (Vivien,
 * 2026-09-18): families who received the totals as a single lump figure
 * stopped replying. This is the standard subscription convention Vivien
 * asked for directly: the figure a family weighs is "how much a month",
 * the same way a yearly app subscription is sold as its monthly-equivalent
 * price even though the charge itself is once a year.
 *
 * The totals themselves are unchanged, nothing here is a new price. Termly
 * divides one term's fee by 3, the ordinary length of a term; yearly divides
 * the discounted annual total by 12. (An earlier pass divided by the
 * 2026/27 season's real length, 8.5 months, rather than 3 and 12; Vivien
 * asked for the plain convention instead, 2026-09-18.)
 *
 * The founding-family figures apply that group's further 10% off on top of
 * whichever of the two above a family already pays, termly or yearly, since
 * it is a lifetime membership discount, not one tied to paying annually.
 * The two discounts multiply rather than add: yearly's monthly figure is
 * already 5% down, and founding takes a further 10% off that, roughly 14.5%
 * off the termly rate in total, not a flat 15%.
 *
 * The termly and yearly totals themselves sit behind PriceReveal, a tap to
 * see them (Vivien, 2026-09-18), the way an app store shows a subscription's
 * price per month and leaves the annual charge a click away rather than
 * beside it. Nothing is concealed for good, `revealLabel` is what the tap
 * says before it opens.
 */
export type PricingPlan = {
  readonly name: string;
  readonly age: string;
  readonly oneOff?: { readonly perMonth: string; readonly foundingPerMonth: string; readonly price: string; readonly period: string };
  readonly quarterly?: {
    readonly termlyPerMonth: string;
    readonly termlyTotal: string;
    readonly termlyFoundingPerMonth: string;
    readonly yearlyPerMonth: string;
    readonly yearlyFoundingPerMonth: string;
    readonly annualFull: string;
    readonly annualDiscounted: string;
  };
};

export const pricing = {
  heading: 'Your membership',
  eyebrow: 'Every week · All year round',
  lede: 'One membership, one place to belong',
  seasonNote: 'Shown per month: the termly figure divides one term’s fee across its 3 months, the yearly figure divides the annual total across the year. Tap a figure to see the full termly or yearly price.',
  termlyLabel: 'Paid termly',
  yearlyLabel: 'Paid yearly · save 5%',
  perMonthSuffix: '/month',
  revealLabel: 'See the full price',
  foundingLabel: 'As a Founding Family (first 50, a lifetime 10% off)',
  plans: [
    { name: 'Bloom', age: 'Pregnancy', oneOff: { perMonth: '149€', foundingPerMonth: '134€', price: '595€', period: '4 months' } },
    {
      name: 'Nurture',
      age: '0–1',
      quarterly: {
        termlyPerMonth: '148€',
        termlyTotal: '445€ each term',
        termlyFoundingPerMonth: '134€',
        yearlyPerMonth: '141€',
        yearlyFoundingPerMonth: '127€',
        annualFull: '1.785€',
        annualDiscounted: '1.695€',
      },
    },
    {
      name: 'The Nest',
      age: '1–2',
      quarterly: {
        termlyPerMonth: '173€',
        termlyTotal: '520€ each term',
        termlyFoundingPerMonth: '156€',
        yearlyPerMonth: '165€',
        yearlyFoundingPerMonth: '148€',
        annualFull: '2.085€',
        annualDiscounted: '1.980€',
      },
    },
    {
      name: 'Little Beginnings',
      age: '2–3',
      quarterly: {
        termlyPerMonth: '223€',
        termlyTotal: '670€ each term',
        termlyFoundingPerMonth: '201€',
        yearlyPerMonth: '212€',
        yearlyFoundingPerMonth: '191€',
        annualFull: '2.685€',
        annualDiscounted: '2.550€',
      },
    },
    {
      name: 'Builders I',
      age: '3–5',
      quarterly: {
        termlyPerMonth: '223€',
        termlyTotal: '670€ each term',
        termlyFoundingPerMonth: '201€',
        yearlyPerMonth: '212€',
        yearlyFoundingPerMonth: '191€',
        annualFull: '2.685€',
        annualDiscounted: '2.550€',
      },
    },
    {
      name: 'Builders II',
      age: '5–6',
      quarterly: {
        termlyPerMonth: '223€',
        termlyTotal: '670€ each term',
        termlyFoundingPerMonth: '201€',
        yearlyPerMonth: '212€',
        yearlyFoundingPerMonth: '191€',
        annualFull: '2.685€',
        annualDiscounted: '2.550€',
      },
    },
    {
      name: 'Navigators',
      age: '6–8',
      quarterly: {
        termlyPerMonth: '237€',
        termlyTotal: '710€ each term',
        termlyFoundingPerMonth: '213€',
        yearlyPerMonth: '225€',
        yearlyFoundingPerMonth: '202€',
        annualFull: '2.835€',
        annualDiscounted: '2.695€',
      },
    },
  ] as readonly PricingPlan[],
  joiningFee: 'One-time joining fee of 99€ per family · 49€ for Bloom.',
  discounts: [
    { value: '15%', label: 'sibling discount' },
    { value: '5%', label: 'discount for annual payment' },
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
