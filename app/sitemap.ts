import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { LANGS, LANG_META, localePath } from '@/content/locales';

/**
 * The audit found sitemap.xml returning 404 (2026-09-05, 3.1).
 *
 * Every page in every language, each entry carrying the alternates for the
 * other three so search engines see the four as one page in four languages,
 * matching the hreflang set in lib/metadata.
 */
export const dynamic = 'force-static';

/** Community, Journal and Contact are live routes but hidden from the menu;
 *  they are still real pages, so they belong in the sitemap. */
const PATHS = ['/', '/membership/', '/experiences/', '/community/', '/contact/', '/journal/', '/events/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${SITE_URL}${localePath(lang, path)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((l) => [LANG_META[l].htmlLang, `${SITE_URL}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
