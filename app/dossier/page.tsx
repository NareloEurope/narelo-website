import type { Metadata } from 'next';
import DossierPage from '@/components/pages/DossierPage';
import { site } from '@/content/site';

/**
 * The Narelo Family Guide: reachable only by direct link. Not in `site.nav`,
 * not in the footer, not in app/sitemap.ts, and marked noindex here so search
 * engines do not list it even once the site is open to them. See
 * content/dossier.ts for why this page exists and where its content comes
 * from.
 *
 * English only, unlike the rest of the site: the source PDF has no Spanish
 * version, so this route is not mirrored under app/[lang]/.
 */
export const metadata: Metadata = {
  title: 'Family Guide',
  description: 'The Narelo Family Guide.',
  alternates: { canonical: '/dossier/' },
  robots: { index: false, follow: false },
  openGraph: {
    title: `Family Guide | ${site.name}`,
    description: 'The Narelo Family Guide.',
    siteName: site.name,
    type: 'website',
    url: '/dossier/',
    images: [{ url: '/images/share-card.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: site.name }],
  },
};

export default function Page() {
  return <DossierPage />;
}
