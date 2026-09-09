/**
 * Contact, Journal and Events copy.
 * Deviations marked `MIGRATION FIX`, logged in MIGRATION-AUDIT.md §11.
 */

export const contactPage = {
  heading: 'We’d love to hear from you.',
  sub: 'We are here to answer your questions and help you find the experience that’s right for your family.',
  formHeading: 'A little more about you',
  submitLabel: 'SEND',
  image: '/images/contact-hero.webp',
  video: '/video/contact-band.mp4',
  poster: '/images/contact-video-poster.webp',
  /**
   * All four fields are required on the live Wix form.
   * The phone field's Wix aria-label leaked Spanish ("Phone number. Teléfono")
   * — MIGRATION FIX (audit §7B #13).
   */
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
    { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel' },
    { name: 'message', label: 'Tell us about what you’re looking for…', type: 'textarea', required: true, autoComplete: 'off' },
  ],
} as const;

export const journalPage = {
  title: 'Journal',
  tabLabel: 'All Posts',
  /**
   * The Wix Blog has zero posts and rendered a Spanish empty state:
   * "Vuelve pronto" / "Una vez que se publiquen entradas, las verás aquí."
   * MIGRATION FIX (audit §7B #11) — translated, meaning unchanged.
   */
  emptyHeading: 'Check back soon',
  emptyBody: 'Once posts are published, you’ll see them here.',
} as const;

export const eventsPage = {
  title: 'Events',
  /** MIGRATION FIX (audit §7B #12): Wix read "No hay eventos en este momento". */
  emptyHeading: 'There are no events at this time',
} as const;

/**
 * The legal notice. Spain asks a commercial website to say plainly who is
 * behind it (Ley 34/2002, LSSI-CE), and nothing on the site said so.
 *
 * ⚠️ Every value here is a legal fact supplied by Vivien on 2026-09-09. Do not
 * edit, guess at or "tidy" any of it. If something is wrong, it is wrong in the
 * company records too, and the team fixes it there first.
 *
 * ⚠️ NOT INCLUDED, because they were not supplied: the Registro Mercantil
 * entry (tomo, folio, hoja) and the data protection wording. A privacy policy
 * is a separate page and separate text, and it has to come from the company's
 * gestor or lawyer, not from here.
 */
export const legalPage = {
  title: 'Legal notice',
  intro: 'Who is behind this website, as required by Spanish law (Ley 34/2002, on information society services and electronic commerce).',
  rows: [
    { label: 'Company name', value: 'Narelo Europe S.L.', href: null },
    { label: 'NIF', value: 'B93933273', href: null },
    { label: 'Registered office', value: 'C. Valentuñana, 2, 29601 Marbella, Málaga, Spain', href: null },
    { label: 'Email', value: 'hello@narelo.es', href: 'mailto:hello@narelo.es' },
    { label: 'Telephone', value: '+34 655 366 888', href: 'tel:+34655366888' },
    { label: 'Managing directors', value: 'Natalie Curavic and Vivien Vörös', href: null },
  ],
} as const;
