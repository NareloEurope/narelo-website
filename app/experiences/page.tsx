import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import { contact } from '@/content/site';
import StageAccordion from '@/components/StageAccordion';
import { stageDetails } from '@/content/stages';
import { hero, format, worlds, stages, regular, personalised, closing } from '@/content/experiences';

export const metadata = {
  title: 'Experiences',
  description: hero.lede,
  openGraph: { title: 'Experiences | Narelo', description: hero.lede, images: [hero.image] },
};

export default function ExperiencesPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden" data-hero-dark>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt="" width={2048} height={1152} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/15" aria-hidden="true" />

        <div className="is-in mx-auto w-full max-w-[1560px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <p className="eyebrow mb-8 text-linen/75">{hero.eyebrow}</p>
          <h1 className="display display-xl max-w-4xl text-linen">
            {hero.headingLines.map((line) => (
              <span className="mask-line" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="lede mt-10 max-w-xl text-linen/85">{hero.lede}</p>
        </div>
      </section>

      {/* ---------- Format ---------- */}
      {/* id="format": the Membership page links here for the session figures,
          which are stated once, on this page. */}
      <Section id="format">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{format.eyebrow}</p>
            <h2 className="display display-lg mb-8">{format.heading}</h2>
            <p className="lede mb-12 max-w-md text-ink-soft">{format.body}</p>
            <p className="body-copy text-ink-soft">{format.note}</p>
          </div>

          <div className="img-settle overflow-hidden rounded-[2px]" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={format.image}
              alt=""
              width={1536}
              height={2048}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Facts span the full width so three tiles each get room to breathe.
            Each sits on a soft sand tint so the numbers read as cards rather
            than loose text (Vivien, 2026-08-31). */}
        <ul className="reveal mt-16 grid gap-6 sm:grid-cols-3" data-reveal>
          {format.facts.map((fact) => (
            <li key={fact.label} className="rounded-[3px] bg-sand/25 p-7 md:p-8">
              <p className="display text-[clamp(2.75rem,2rem+3vw,4.25rem)] leading-none text-olive">{fact.value}</p>
              <p className="eyebrow mt-4 text-ink">{fact.label}</p>
              <p className="body-copy mt-3 text-ink-soft">{fact.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- The Five Worlds ----------
          id="worlds": the one full write-up of the five worlds. The home page
          and the Membership page carry short forms that link here. */}
      <section id="worlds" className="bg-forest px-6 py-[var(--spacing-section)] text-linen md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/60">{worlds.eyebrow}</p>
            <h2 className="display display-lg mb-8">{worlds.heading}</h2>
            <p className="lede text-linen/85">{worlds.body}</p>
          </div>

          <ul className="reveal" data-reveal>
            {worlds.items.map((world, i) => (
              <li
                key={world.name}
                className="group grid gap-4 border-t border-linen/15 py-8 md:grid-cols-[6rem_1fr_1.3fr] md:items-baseline md:gap-10 md:py-10"
              >
                <span className="eyebrow text-linen/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display display-md transition-transform duration-700 md:group-hover:translate-x-2">
                  {world.name}
                </h3>
                <p className="body-copy max-w-xl text-linen/80">{world.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- The journey ---------- */}
      <Section id="journey">
        <div className="mb-12 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{stages.eyebrow}</p>
          <h2 className="display display-lg mb-8">{stages.heading}</h2>
          <p className="lede text-ink-soft">{stages.body}</p>
        </div>

        <div className="fade" data-reveal>
          <StageAccordion items={stageDetails} />
        </div>

        <p className="body-copy mt-10 max-w-xl text-ink-soft fade" data-reveal>
          {stages.note}
        </p>
      </Section>

      {/* ---------- Through the year ---------- */}
      <Section bg="bg-shell">
        {/*
         * Quote beside the opening rather than above it, the way the parent
         * dossier sets this section (2026-09-04): the line and the paragraph
         * it belongs to sit on one row on desktop, stacked on a phone.
         */}
        <div className="mb-12 grid gap-10 fade md:grid-cols-2 md:gap-16" data-reveal>
          <div>
            <p className="eyebrow mb-8 text-olive">{regular.eyebrow}</p>
            <p className="lede italic text-ink-soft">{regular.quote}</p>
          </div>
          <div>
            <h2 className="display display-lg mb-8">{regular.heading}</h2>
            <p className="body-copy text-ink-soft">{regular.body}</p>
          </div>
        </div>

        {/* Two named groups: what membership already carries, and what can be
            booked on top of it (Vivien, 2026-08-31). */}
        <div className="reveal flex flex-col gap-12" data-reveal>
          {regular.groups.map((group) => (
            <div key={group.label}>
              <div className="flex items-baseline justify-between gap-6 border-t border-ink/15 pt-5">
                <p className="eyebrow text-ink">{group.label}</p>
                {'aside' in group && group.aside && (
                  <p className="lede italic text-ink-soft">{group.aside}</p>
                )}
              </div>
              <ul className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <h3 className="display text-xl leading-snug">{item.name}</h3>
                    <p className="body-copy mt-3 text-ink-soft">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="body-copy mt-12 max-w-2xl text-ink-soft fade" data-reveal>
          {regular.note}
        </p>
      </Section>

      {/* ---------- Personalised ---------- */}
      <Section>
        <div className="mb-12 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{personalised.eyebrow}</p>
          <h2 className="display display-lg mb-8">{personalised.heading}</h2>
          <p className="lede text-ink-soft">{personalised.body}</p>
        </div>

        {/* Only two cards now, so they take half the row each rather than
            sitting in a three-up grid with a hole in it. */}
        <ul className="reveal grid gap-6 sm:grid-cols-2" data-reveal>
          {personalised.items.map((item) => (
            <li key={item.name} className="rounded-[3px] bg-sand/25 p-8 md:p-10">
              <h3 className="display display-md leading-snug">{item.name}</h3>
              <p className="body-copy mt-4 max-w-sm text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Closing ---------- */}
      <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden">
        <LazyVideo src={closing.video} poster={closing.poster} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/65" aria-hidden="true" />

        <div className="is-in mx-auto w-full max-w-[1280px] px-6 py-24 text-center md:px-10" data-reveal>
          <h2 className="display display-xl mb-8 text-linen">
            {closing.headingLines.map((line, i) => (
              <span className="mask-line" key={line}>
                <span className={i === 1 ? 'italic' : ''}>{line}</span>
              </span>
            ))}
          </h2>
          <p className="lede mx-auto mb-12 max-w-lg text-linen/85">{closing.body}</p>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-solid">
            {closing.ctaLabel}
          </a>
        </div>
      </section>
    </>
  );
}
