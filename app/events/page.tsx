import Section from '@/components/Section';
import { eventsPage } from '@/content/pages';

export const metadata = {
  title: 'Events',
  description: eventsPage.emptyHeading,
  openGraph: { title: 'Events | Narelo', description: eventsPage.emptyHeading },
};

/**
 * The source runs the Wix Events app with zero events published, and shows no
 * hero and no heading — the barest page on the site. The h1 is screen-reader
 * only so the outline stays valid without adding visible copy.
 */
export default function EventsPage() {
  return (
    <Section className="min-h-[60vh]">
      <h1 className="sr-only">{eventsPage.title}</h1>
      <div className="py-20 text-center md:py-28">
        <p className="body-copy text-lg font-semibold text-ink">{eventsPage.emptyHeading}</p>
      </div>
    </Section>
  );
}
