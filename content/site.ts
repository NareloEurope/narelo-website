/**
 * Global site content.
 *
 * Copy follows brand/brand-essence.md §6 Tone of Voice: warm not childish,
 * intelligent not academic, aspirational NOT elitist, clear not promotional.
 *
 * Note on the Soho House reference: the visual restraint is the model, not the
 * social language. framework/mission-vision-promise.md is explicit that Narelo's
 * curated community "is NOT status-based exclusivity" — selection exists to
 * protect the environment and community. No copy here implies otherwise.
 */

export const site = {
  name: 'Narelo',
  tagline: 'A private childhood membership',
  locale: 'en',
  location: 'Marbella, Spain',
  copyright: '© 2026 Narelo. All rights reserved.',
} as const;

export const nav = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'Membership', href: '/membership' },
  { label: 'Community', href: '/community' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
] as const;

export const headerCta = { label: 'Become a member', href: '/membership' } as const;

export const contact = {
  visitLabel: 'Visit',
  visitName: 'Narelo, Marbella',
  visitNote: 'By appointment only. We would love to welcome you.',
  emailLabel: 'Email',
  email: 'hello@narelo.es',
  emailHref: 'mailto:hello@narelo.es',
  phoneLabel: 'Call or WhatsApp',
  phone: '+34 655 366 888',
  phoneHref: 'tel:+34655366888',
  /**
   * The funnel's primary CTA (Strategy/sales-funnel.md step 2 → 3). The first
   * question Narelo asks back is "How old is your child?", so the prefilled
   * message opens on exactly that.
   */
  whatsapp: 'https://wa.me/34655366888?text=Hello%20Narelo%2C%20I%27d%20like%20to%20find%20out%20about%20membership%20for%20my%20family.',
} as const;

/**
 * ⚠️ On the Wix site these four icons were dead links, and @narelo.eu appeared
 * nowhere. Instagram is set from CLAUDE.md; the rest need real URLs before launch.
 */
export const socialIcons = [
  { src: '/images/social-instagram.webp', label: 'Instagram', href: 'https://instagram.com/narelo.eu' },
  { src: '/images/social-whatsapp.webp', label: 'WhatsApp', href: contact.whatsapp },
  { src: '/images/social-tiktok.webp', label: 'TikTok', href: null },
  { src: '/images/social-facebook.webp', label: 'Facebook', href: null },
] as const;
