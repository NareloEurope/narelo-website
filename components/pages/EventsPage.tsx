import Section from '@/components/Section';
import { content } from '@/content/dictionary';
import { localePath, type Lang } from '@/content/locales';


/**
 * The source runs the Wix Events app with zero events published, and shows no
 * hero and no heading — the barest page on the site. The h1 is screen-reader
 * only so the outline stays valid without adding visible copy.
 */
export default function EventsPage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { eventsPage } = c.pages;
  const t = (path: string) => localePath(lang, path);
  return (
    <Section className="min-h-[60vh]">
      <h1 className="sr-only">{eventsPage.title}</h1>
      <div className="py-20 text-center md:py-28">
        <p className="body-copy text-lg font-semibold text-ink">{eventsPage.emptyHeading}</p>
      </div>
    </Section>
  );
}
