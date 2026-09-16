import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

/**
 * The crawlers that build the preview card when a link is shared in WhatsApp,
 * Instagram, LinkedIn and the rest.
 *
 * They obey robots.txt. While the whole site was disallowed outright they
 * could not read the page at all, so they fell back to whatever they had
 * stored for narelo.es, which was the hosting company's webmail login: every
 * shared link arrived showing a Roundcube screenshot (2026-09-16).
 *
 * They are let in whether or not the site is open to search engines. A preview
 * card is not a search listing, so this does not pre-empt the launch decision.
 */
const SHARE_CARD_CRAWLERS = [
  'facebookexternalhit', // Facebook, Instagram and Messenger all use this one
  'Facebot',
  'WhatsApp',
  'Twitterbot',
  'LinkedInBot',
  'Slackbot-LinkExpanding',
  'TelegramBot',
  'Discordbot',
];

/**
 * The audit found robots.txt returning 404 (2026-09-05, 3.1).
 *
 * It follows the same switch as the meta robots tag in the layout: while the
 * site is pre-launch everything except the share card crawlers is disallowed,
 * so the vercel.app preview cannot be indexed and compete with the real domain.
 * Setting NEXT_PUBLIC_ALLOW_INDEXING=true at launch opens it and points at the
 * sitemap, with no code change.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const live = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
  return live
    ? { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${SITE_URL}/sitemap.xml` }
    : {
        rules: [
          ...SHARE_CARD_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
          { userAgent: '*', disallow: '/' },
        ],
      };
}
