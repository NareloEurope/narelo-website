import type { Metadata } from 'next';
import { content } from '@/content/dictionary';
import { LANGS, LANG_META, localePath, type Lang } from '@/content/locales';

/**
 * Title, description, social card and the hreflang set for one page in one
 * language. Every route file calls this, so the three language trees stay
 * described consistently and search engines are told the three versions are
 * the same page.
 */
type PageMeta = { title: string; description: string; image?: string };

function metaFor(lang: Lang, path: string): PageMeta {
  const c = content(lang);
  switch (path) {
    case '/':
      return {
        title: `${c.site.site.name} · ${c.site.site.tagline}`,
        description: c.home.hero.lede,
        image: c.home.hero.poster,
      };
    case '/membership/':
      return { title: c.membership.hero.eyebrow, description: c.membership.hero.lede, image: c.membership.hero.image };
    case '/experiences/':
      return { title: c.experiences.hero.eyebrow, description: c.experiences.hero.lede, image: c.experiences.hero.image };
    case '/community/':
      return { title: c.community.belong.heading, description: c.community.belong.body, image: c.community.hero.image };
    case '/contact/':
      return { title: c.pages.contactPage.heading, description: c.pages.contactPage.sub, image: c.pages.contactPage.image };
    case '/journal/':
      return { title: c.pages.journalPage.title, description: c.pages.journalPage.emptyBody };
    case '/events/':
      return { title: c.pages.eventsPage.title, description: c.pages.eventsPage.emptyHeading };
    default:
      return { title: c.site.site.name, description: c.site.site.tagline };
  }
}

export function pageMetadata(lang: Lang, path: string): Metadata {
  const { title, description, image } = metaFor(lang, path);
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
    openGraph: {
      title: isHome ? title : `${title} | ${name}`,
      description,
      locale: LANG_META[lang].ogLocale,
      ...(image ? { images: [image] } : {}),
    },
  };
}
