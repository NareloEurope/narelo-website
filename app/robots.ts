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
 * The AI assistants (Vivien, 2026-09-16).
 *
 * Three different jobs, all allowed:
 *
 *   - fetching a page because someone asked the assistant about Narelo right
 *     then (Claude-User, ChatGPT-User, Perplexity-User, Mistralai-User)
 *   - building the index an assistant answers from and cites
 *     (Claude-SearchBot, OAI-SearchBot, PerplexityBot, DuckAssistBot, YouBot)
 *   - collecting pages that train future models (ClaudeBot, GPTBot, CCBot,
 *     Amazonbot, Bytespider, meta-externalagent, cohere-ai and the rest)
 *
 * Two of these names are opt-out switches rather than crawlers of their own:
 * Google-Extended and Applebot-Extended only say what may be used once the
 * page has been read, and the reading itself is done by Googlebot and Applebot.
 * Googlebot comes in under the blanket rule now that the site is launched, so
 * Gemini and the AI answers in Google search pick Narelo up with it.
 *
 * This is a list of names, so any crawler not on it stays out under the
 * blanket rule below until it is added.
 */
const AI_CRAWLERS = [
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // OpenAI
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  // Google and Apple: permission tokens, not crawlers (see above)
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Meta
  'meta-externalagent',
  'FacebookBot',
  // Others
  'CCBot', // Common Crawl, which feeds many training sets
  'Amazonbot',
  'Bytespider',
  'cohere-ai',
  'Mistralai-User',
  'DuckAssistBot',
  'YouBot',
  'Diffbot',
];

/**
 * The audit found robots.txt returning 404 (2026-09-05, 3.1).
 *
 * The crawlers named above are always welcome. Everyone else follows the
 * launch switch: while the site was pre-launch the rest of the web was
 * disallowed, so the vercel.app preview could not be indexed and compete with
 * the real domain later.
 *
 * Launched 2026-09-16 (Vivien). The publish to narelo.es now sets
 * NEXT_PUBLIC_ALLOW_INDEXING=true by default, so the live site is open to
 * search engines and points at its sitemap. Vercel previews do not run that
 * workflow, so the variable is unset there and they stay out of search, which
 * is the whole reason the switch exists.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const live = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
  const welcome = [...SHARE_CARD_CRAWLERS, ...AI_CRAWLERS].map((userAgent) => ({
    userAgent,
    allow: '/',
  }));
  /*
   * /dossier/ is a link-only page (Vivien, 2026-09-17): not in the sitemap,
   * marked noindex on the page itself, and disallowed here too so a
   * well-behaved crawler does not even fetch it to index it. The share-card
   * and AI-assistant crawlers above are left out of this disallow, so a link
   * shared in WhatsApp or asked about directly still renders normally.
   */
  return live
    ? { rules: [...welcome, { userAgent: '*', allow: '/', disallow: '/dossier/' }], sitemap: `${SITE_URL}/sitemap.xml` }
    : { rules: [...welcome, { userAgent: '*', disallow: '/' }] };
}
