import Section from '@/components/Section';
import { journalPage } from '@/content/pages';

export const metadata = {
  title: 'Journal',
  description: journalPage.emptyBody,
  openGraph: { title: 'Journal | Narelo', description: journalPage.emptyBody },
};

/**
 * The source runs the Wix Blog app with zero posts published: a left-aligned
 * "All Posts" tab and a centred empty state, with no visible page heading.
 *
 * The h1 below is screen-reader only — it keeps the document outline valid
 * without adding a heading the source does not show.
 */
export default function JournalPage() {
  return (
    <Section className="min-h-[60vh]">
      <h1 className="sr-only">{journalPage.title}</h1>

      <p className="eyebrow mb-16 inline-block border-b border-ink/30 pb-2 text-ink">{journalPage.tabLabel}</p>

      <div className="py-16 text-center md:py-24">
        <p className="body-copy mb-3 text-lg font-semibold text-ink">{journalPage.emptyHeading}</p>
        <p className="body-copy text-sm text-ink-soft">{journalPage.emptyBody}</p>
      </div>
    </Section>
  );
}
