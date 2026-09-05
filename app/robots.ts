import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

/**
 * The audit found robots.txt returning 404 (2026-09-05, 3.1).
 *
 * It follows the same switch as the meta robots tag in the layout: while the
 * site is pre-launch the whole thing is disallowed, so the vercel.app preview
 * cannot be indexed and compete with the real domain. Setting
 * NEXT_PUBLIC_ALLOW_INDEXING=true at launch opens it and points at the
 * sitemap, with no code change.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const live = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
  return live
    ? { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${SITE_URL}/sitemap.xml` }
    : { rules: [{ userAgent: '*', disallow: '/' }] };
}
