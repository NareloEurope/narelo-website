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
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{format.eyebrow}</p>
            <h2 className="display display-lg mb-8">{format.heading}</h2>
            <p className="lede mb-12 max-w-md text-ink-soft">{format.body}</p>

            <ul className="grid grid-cols-2 gap-8">
              {format.facts.map((fact) => (
                <li key={fact.label}>
                  <div className="mb-4 h-px w-full bg-ink/15" aria-hidden="true" />
                  <p className="display text-[clamp(2.5rem,1.8rem+3vw,4rem)] leading-none text-olive">{fact.value}</p>
                  <p className="eyebrow mt-3 text-ink">{fact.label}</p>
                  <p className="body-copy mt-3 text-ink-soft">{fact.note}</p>
                </li>
              ))}
            </ul>
            <p className="body-copy mt-10 text-ink-soft">{format.note}</p>
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
      </Section>

      {/* ---------- The Five Worlds ---------- */}
      <section className="bg-forest px-6 py-[var(--spacing-section)] text-linen md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-20 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/60">{worlds.eyebrow}</p>
            <h2 className="display display-lg mb-8">{worlds.heading}</h2>
            <p className="lede text-linen/75">{worlds.body}</p>
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
                <p className="body-copy max-w-xl text-linen/70">{world.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- The journey ---------- */}
      <Section id="journey">
        <div className="mb-16 max-w-2xl fade" data-reveal>
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
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{regular.eyebrow}</p>
          <h2 className="display display-lg">{regular.heading}</h2>
        </div>

        <ul className="reveal grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {regular.items.map((item) => (
            <li key={item.name}>
              <div className="mb-5 h-px w-full bg-ink/15" aria-hidden="true" />
              <h3 className="display text-xl leading-snug">{item.name}</h3>
              <p className="body-copy mt-3 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Personalised ---------- */}
      <Section>
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{personalised.eyebrow}</p>
          <h2 className="display display-lg mb-8">{personalised.heading}</h2>
          <p className="lede text-ink-soft">{personalised.body}</p>
        </div>

        <ul className="reveal grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {personalised.items.map((item) => (
            <li key={item.name}>
              <div className="mb-5 h-px w-full bg-ink/15" aria-hidden="true" />
              <h3 className="display text-xl leading-snug">{item.name}</h3>
              <p className="body-copy mt-3 text-ink-soft">{item.body}</p>
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
