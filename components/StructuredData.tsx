import { site, contact, socialIcons } from '@/content/site';
import { SITE_URL } from '@/lib/site-url';

/**
 * Organization and LocalBusiness markup (audit, 2026-09-05, 3.1: no structured
 * data was found on any page).
 *
 * Everything here is already public on the site: the name, the description,
 * Marbella, the email, the phone number and the Instagram account. Nothing is
 * invented, and the two social links with no URL yet are left out rather than
 * guessed at. No opening hours or address detail: visits are by appointment
 * and the address is not published, so claiming either would be wrong.
 */
export default function StructuredData() {
  const instagram = socialIcons.find((i) => i.label === 'Instagram')?.href;

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: site.name,
        url: SITE_URL,
        description: site.tagline,
        email: contact.email,
        telephone: contact.phone,
        logo: `${SITE_URL}/images/narelo-logo.webp`,
        ...(instagram ? { sameAs: [instagram] } : {}),
        founder: [
          { '@type': 'Person', name: 'Natalie Curavic', jobTitle: 'Founder & CEO' },
          { '@type': 'Person', name: 'Vivien Vörös', jobTitle: 'Co-founder & Head of Education' },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#local`,
        name: site.name,
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        url: SITE_URL,
        description: site.tagline,
        email: contact.email,
        telephone: contact.phone,
        address: { '@type': 'PostalAddress', addressLocality: 'Marbella', addressCountry: 'ES' },
        areaServed: 'Marbella, Spain',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // The object is ours, built from content/site.ts, so there is nothing
      // user-supplied to escape here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
