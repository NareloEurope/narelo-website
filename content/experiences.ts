/**
 * Experiences page copy — from https://mercedescgalera.wixsite.com/narelo/blank
 * Deviations marked `MIGRATION FIX`, logged in MIGRATION-AUDIT.md §11.
 */

export const hero = {
  heading: 'Experiences that grow with your child',
  body: 'Thoughtfully created experiences that invite curiosity, creativity and connection.',
  linkLabel: "Discover what's waiting →",
  linkHref: '#stages',
  image: '/images/experiences-hero.webp',
} as const;

export const intro = {
  heading: 'For the way your family lives, explores and shares.',
} as const;

/**
 * Stage-to-image mapping verified against the live site by element geometry.
 * The source reuses one image for both Builders II and Navigators, and uses a
 * Wix stock abstract for Bloom — both reproduced faithfully here.
 *
 * Ages already matched framework/age-groups.md on the live site — unchanged.
 * Two descriptions gained a full stop for consistency with their siblings
 * (MIGRATION FIX, audit §7A #5 and #6).
 */
export const stages = {
  heading: 'A path for every stage',
  label: 'THE JOURNEY',
  items: [
    { n: '01', name: 'Bloom', age: 'Pregnancy', body: 'A gentle beginning full of wonder.', image: '/images/stage-bloom.webp' },
    { n: '02', name: 'Nurture', age: '0 - 1 year', body: 'Sensing, discovering and connecting.', image: '/images/stage-nurture.webp' },
    { n: '03', name: 'Nest', age: '1 - 2 years', body: 'Exploring the world through movement.', image: '/images/stage-nest.webp' },
    { n: '04', name: 'Little Beginnings', age: '2 - 3 years', body: 'Building confidence through discovery.', image: '/images/stage-little-beginnings.webp' },
    { n: '05', name: 'Builders I', age: '3 - 5 years', body: 'Creating, exploring and making sense of the world.', image: '/images/stage-builders.webp' },
    { n: '06', name: 'Builders II', age: '5 - 6 years', body: 'Questioning, creating and building ideas.', image: '/images/stage-navigators.webp' },
    { n: '07', name: 'Navigators', age: '6 - 8 years', body: 'Growing independence and finding their way.', image: '/images/stage-navigators.webp' },
  ],
} as const;

export const regular = {
  eyebrow: 'REGULAR EXPERIENCES',
  heading: 'Thoughtfully designed experiences for our community.',
  items: [
    { name: 'Birthday Experiences', body: 'Thoughtfully curated celebrations inspired by your child’s interests and personality.' },
    { name: 'Member Events', body: 'Exclusive events for members to connect, celebrate and be inspired.' },
    { name: 'Community Mornings', body: 'Casual mornings to meet, connect and grow together as a community.' },
    { name: 'Expert Insights', body: 'Inspiring conversations with experts exploring childhood, development and family wellbeing.' },
    { name: 'Holiday Experiences', body: 'School holidays transformed into opportunities for adventure, discovery and connection.' },
    { name: 'Signature Saturdays', body: 'Slow Saturdays designed for discovery, creativity and meaningful time together.' },
  ],
} as const;

export const personalised = {
  eyebrow: 'PERSONALISED EXPERIENCES',
  heading: 'Tailored experiences designed around your child and family',
  items: [
    { name: 'Private Experiences', body: 'Fully personalised experiences thoughtfully created around your child and family.' },
    { name: 'Family Experiences', body: 'Meaningful experiences designed for families to connect, explore and create memories together.' },
    { name: 'Signature Family Days', body: 'Specially curated days created around your family, from thoughtful activities to unforgettable moments.' },
    { name: 'Private Caring Session', body: 'Personalised one-to-one care tailored to your child’s needs, wherever you are.' },
    /** MIGRATION FIX (audit §7A #4): Wix read "Curated Holiday Experince". */
    { name: 'Curated Holiday Experience', body: 'Bespoke holiday programmes blending nature, creativity, adventure and meaningful experiences.' },
  ],
} as const;

export const closing = {
  eyebrow: 'BEYOND THE EVERYDAY',
  heading: 'Some experiences stay with you.',
  sub: 'The ones children remember for years to come.',
  video: '/video/experiences-closing.mp4',
  poster: '/images/experiences-video-poster.webp',
} as const;

export const bandImage = '/images/img-1667.webp';
