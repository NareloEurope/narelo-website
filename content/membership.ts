/**
 * Membership page copy — from https://mercedescgalera.wixsite.com/narelo/blank-1
 * No typos were found on this page; all copy is verbatim.
 */

export const hero = {
  heading: 'A place to belong',
  sub: 'A place to return to, discover together and make your own.',
  image: '/images/membership-hero.webp',
} as const;

export const eyebrowBand = {
  heading: 'Some things grow with time',
  line: 'THOUGHTFUL EXPERIENCES · REAL CONNECTIONS · A CHILDHOOD THAT MATTERS',
} as const;

/** Laid out as a 4-column zigzag on the source: text/image alternating. */
export const becomes = {
  items: [
    { name: 'A fascination becomes a passion.', body: 'Moments of discovery can become interests they carry with them.' },
    { name: 'A familiar face becomes a friend.', body: 'A community where children and families grow, connect and belong.' },
    { name: 'A shared morning becomes a tradition.', body: 'The little moments you return to can become the ones your family remembers.' },
    { name: 'A place becomes part of their childhood.', body: 'A familiar place can hold memories, relationships and a sense of belonging.' },
  ],
  images: ['/images/family-whatsapp-091957.webp', '/images/img-5208.webp', '/images/img-5211.webp', '/images/img-1667.webp'],
} as const;

export const statement = {
  heading: 'Not just somewhere to go, but something to look forward to, return to and share.',
} as const;

export const benefits = {
  heading: 'More than a membership',
  items: [
    { name: 'Priority booking', body: 'Early access to experiences, events and limited places.' },
    { name: 'Member pricing', body: 'Enjoy preferred pricing across experiences and events.' },
    { name: 'Exclusive access', body: 'Access to member-only experiences, events and opportunities.' },
    { name: 'Community', body: 'Build meaningful connections with families who share your values.' },
    { name: 'Expert insights', body: 'Thoughtful guidance, expert perspectives and inspiration for family life.' },
    { name: 'Narelo ecosystem', body: 'Be part of a wider world created around family life.' },
  ],
} as const;

/**
 * The live site shows no prices and attaches no links to these cards
 * (audit §7E #21). Reproduced as descriptive cards, as on Wix.
 */
export const tiers = {
  heading: 'Choose how you belong',
  intro: 'Find the way of experiencing Narelo that feels right for your family.',
  items: [
    { name: 'ANNUAL', body: 'A year of meaningful experiences and connection.' },
    { name: 'QUARTERLY', body: 'A flexible way to be part of the Narelo community.' },
    { name: 'MONTHLY', body: 'The freedom to experience Narelo month by month.' },
    { name: 'EXPERIENCE', body: 'Choose the experience that feels right for your family, from celebrations to private moments.' },
  ],
} as const;

/** Standalone image band between the benefits and the tiers on the source. */
export const beachBand = '/images/membership-beach-background.webp';

export const closing = {
  heading: 'Ready to belong?',
  video: '/video/membership-closing.mp4',
  poster: '/images/membership-video-poster.webp',
} as const;
