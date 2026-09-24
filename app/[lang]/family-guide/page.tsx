import type { Metadata } from 'next';
import DossierPage from '@/components/pages/DossierPage';
import { PREFIXED_LANGS, LANG_META, type Lang } from '@/content/locales';
import { site } from '@/content/site';
import { familyGuide } from '@/content/family-guide';

/**
 * The Family Guide in the prefixed languages, today only Spanish
 * (Vivien, 2026-09-24). English lives at /family-guide/.
 *
 * Hidden exactly as the English one is: not in `site.nav`, not in the
 * footer, not in app/sitemap.ts, disallowed in app/robots.ts and marked
 * noindex here, so it is reachable only by whoever has the link.
 */
export function generateStaticParams() {
  return PREFIXED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = familyGuide(lang).hero.eyebrow;
  const path = `/${lang}/family-guide/`;
  return {
    title,
    description: site.tagline,
    alternates: { canonical: path },
    robots: { index: false, follow: false },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: site.tagline,
      siteName: site.name,
      type: 'website',
      locale: LANG_META[lang].ogLocale,
      url: path,
      images: [{ url: '/images/share-card.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: site.name }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <DossierPage lang={lang} />;
}
