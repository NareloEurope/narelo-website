import Section from '@/components/Section';
import Portrait from '@/components/Portrait';
import { content } from '@/content/dictionary';
import { type Lang } from '@/content/locales';

/**
 * Who we are: the founders and the team, on their own page.
 *
 * This section used to sit inside the Membership page and the menu pointed at
 * an anchor in it. It is a page of its own now (Vivien, 2026-09-08), which is
 * also what the September audit suggested and what the team had left open.
 *
 * The founders still appear in exactly one place on the site, per AGENTS.md.
 * That place is now here, and the words are still `proof` in
 * content/membership.ts, so nothing had to be re-translated.
 *
 * Founders first, then the team under its own label, so the page shows the
 * distinction rather than blurring it. Portraits are small and beside each
 * name, and open larger when clicked.
 */
export default function WhoWeArePage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { contact, ui } = c.site;
  const { proof, closing } = c.membership;

  return (
    <>
      {/* The page opens on the heading itself: no hero photograph, because the
          portraits below are the pictures this page is about. */}
      <Section className="pt-16 md:pt-24">
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{proof.eyebrow}</p>
          <h1 className="display display-xl">{proof.heading}</h1>
        </div>

        {/* Three rows in a subgrid, so the two columns share row heights and
            both quotes begin on the same line. */}
        <div className="reveal grid gap-14 md:grid-cols-2 md:grid-rows-[auto_auto_1fr] md:gap-x-20 md:gap-y-0" data-reveal>
          {proof.people.map((person) => (
            <div
              key={person.name}
              className="flex flex-col border-t border-ink/15 pt-8 md:row-span-3 md:grid md:grid-rows-subgrid md:gap-0"
            >
              <div className="flex items-center gap-6">
                <Portrait
                  src={person.image}
                  name={person.name}
                  closeLabel={ui.closePortrait}
                  className="w-36 md:w-[10.5rem]"
                />
                <div>
                  <h2 className="display display-md">{person.name}</h2>
                  <p className="eyebrow mt-3 text-olive">{person.role}</p>
                </div>
              </div>
              <p className="body-copy mt-8 text-ink-soft">{person.body}</p>
              <blockquote className="lede pt-8 italic text-ink">“{person.quote}”</blockquote>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-ink/12 pt-14">
          <p className="eyebrow mb-10 text-olive fade" data-reveal>
            {proof.teamLabel}
          </p>
          <div className="reveal grid gap-14 md:grid-cols-2 md:grid-rows-[auto_auto_1fr] md:gap-x-20 md:gap-y-0" data-reveal>
            {proof.team.map((person) => (
              <div
                key={person.name}
                className="flex flex-col border-t border-ink/15 pt-8 md:row-span-3 md:grid md:grid-rows-subgrid md:gap-0"
              >
                <div className="flex items-center gap-6">
                  {/* A size down from the founders, so the two rows read as
                      two rows rather than one long gallery. */}
                  <Portrait
                    src={person.image}
                    name={person.name}
                    closeLabel={ui.closePortrait}
                    className="w-30 md:w-36"
                  />
                  <div>
                    <h2 className="display display-md">{person.name}</h2>
                    <p className="eyebrow mt-3 text-olive">{person.role}</p>
                  </div>
                </div>
                <p className="body-copy mt-8 text-ink-soft">{person.body}</p>
                <blockquote className="lede pt-8 italic text-ink">“{person.quote}”</blockquote>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* One call to action to close, the same wording as every other page. */}
      <Section bg="bg-shell" className="text-center">
        <div className="is-in mx-auto max-w-2xl" data-reveal>
          <p className="lede mb-10 text-ink-soft">{closing.body}</p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-solid"
          >
            {closing.ctaLabel}
          </a>
        </div>
      </Section>
    </>
  );
}
