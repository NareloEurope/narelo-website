import type { Metadata } from 'next';
import { content } from '@/content/dictionary';
import { LANGS, LANG_META, localePath, type Lang } from '@/content/locales';

/**
 * Title, description, social card and the hreflang set for one page in one
 * language. Every route file calls this, so the three language trees stay
 * described consistently and search engines are told the three versions are
 * the same page.
 */
type PageMeta = { title: string; description: string };

/*
 * One social card for the whole site, not one per page.
 *
 * Each page used to offer its own photograph, but every one of them was a
 * .webp and WhatsApp, Facebook and LinkedIn do not render WebP previews: the
 * link arrived with no picture at all. This is a JPEG at the 1200x630 every
 * platform crops to, built by scripts/build-share-card.mjs.
 */
const SHARE_CARD = {
  url: '/images/share-card.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
} as const;

function metaFor(lang: Lang, path: string): PageMeta {
  const c = content(lang);
  switch (path) {
    case '/':
      return {
        title: `${c.site.site.name} · ${c.site.site.tagline}`,
        description: c.home.hero.lede,
      };
    case '/who-we-are/':
      return { title: c.membership.proof.eyebrow, description: c.membership.proof.people[0].body };
    case '/membership/':
      return { title: c.membership.hero.eyebrow, description: c.membership.hero.lede };
    case '/experiences/':
      return { title: c.experiences.hero.eyebrow, description: c.experiences.hero.lede };
    case '/community/':
      return { title: c.community.belong.heading, description: c.community.belong.body };
    case '/contact/':
      return { title: c.pages.contactPage.heading, description: c.pages.contactPage.sub };
    case '/journal/':
      return { title: c.pages.journalPage.title, description: c.pages.journalPage.emptyBody };
    case '/events/':
      return { title: c.pages.eventsPage.title, description: c.pages.eventsPage.emptyHeading };
    case '/legal/':
      return { title: c.pages.legalPage.title, description: c.pages.legalPage.intro };
    default:
      return { title: c.site.site.name, description: c.site.site.tagline };
  }
}

export function pageMetadata(lang: Lang, path: string): Metadata {
  const { title, description } = metaFor(lang, path);
  const name = content(lang).site.site.name;
  const isHome = path === '/';

  /*
   * hreflang for all three, plus x-default pointing at English, which is the
   * default language. Relative URLs resolve against metadataBase in the root
   * layout.
   */
  const languages = Object.fromEntries(
    LANGS.map((l) => [LANG_META[l].htmlLang, localePath(l, path)]),
  );

  return {
    /*
     * The root layout appends "| Narelo" to every page title. The home page
     * already carries the name, so it opts out rather than saying it twice.
     */
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localePath(lang, path),
      languages: { ...languages, 'x-default': path },
    },
    /*
     * Next replaces the layout's openGraph wholesale when a page sets its own,
     * so siteName and type have to be repeated here or every page loses them.
     */
    openGraph: {
      title: isHome ? title : `${title} | ${name}`,
      description,
      siteName: name,
      type: 'website',
      url: localePath(lang, path),
      locale: LANG_META[lang].ogLocale,
      images: [{ ...SHARE_CARD, alt: name }],
    },
  };
}
