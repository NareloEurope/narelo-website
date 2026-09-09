import Section from '@/components/Section';
import { content } from '@/content/dictionary';
import { type Lang } from '@/content/locales';

/**
 * The legal notice (Vivien, 2026-09-09). Spain asks a commercial website to
 * say who runs it; nothing on the site did.
 *
 * Deliberately the plainest page here. No photograph, no call to action, no
 * reveal animation on the details themselves: someone reaching this page wants
 * a company name and an address, and wants them straight away. It is linked
 * once, quietly, from the footer.
 *
 * A description list rather than a table, because it is pairs of facts and not
 * rows of data, and because a definition list reflows on a phone without
 * needing a horizontal scroller.
 */
export default function LegalPage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { legalPage } = c.pages;

  return (
    <Section className="min-h-[60vh] pt-16 md:pt-24">
      <div className="max-w-2xl">
        <h1 className="display display-lg mb-8">{legalPage.title}</h1>
        <p className="body-copy mb-14 text-ink-soft">{legalPage.intro}</p>

        <dl className="border-t border-ink/12">
          {legalPage.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-ink/12 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
            >
              <dt className="eyebrow text-olive">{row.label}</dt>
              <dd className="body-copy text-ink">
                {row.href ? (
                  <a href={row.href} className="transition-opacity hover:opacity-60">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
