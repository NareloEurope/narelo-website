import Link from 'next/link';
import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import WorldsExplorer from '@/components/WorldsExplorer';
import { content } from '@/content/dictionary';
import { localePath, type Lang } from '@/content/locales';


export default function HomePage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { contact } = c.site;
  const { hero, belief, statement, shape, worlds, journey, promise, home, closing } = c.home;
  const t = (path: string) => localePath(lang, path);
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden" data-hero-dark>
        <LazyVideo
          src={hero.video}
          poster={hero.poster}
          eager
          className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
        />
        {/* Gradient rather than a flat scrim: keeps the image alive at the top. */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/15"
          aria-hidden="true"
        />

        <div className="is-in mx-auto w-full max-w-[1560px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <p className="eyebrow mb-8 text-linen/80">{hero.eyebrow}</p>
          <h1 className="display display-xl max-w-5xl text-linen">
            {hero.headingLines.map((line) => (
              <span className="mask-line" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <p className="lede max-w-xl text-linen/85">{hero.lede}</p>
            <span className="eyebrow hidden shrink-0 text-linen/60 md:block">{hero.scrollHint}</span>
          </div>
        </div>
      </section>

      {/* ---------- Belief ---------- */}
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{belief.eyebrow}</p>
            <h2 className="display display-lg mb-8 max-w-lg">{belief.heading}</h2>
            <p className="lede mb-10 max-w-md text-ink-soft">{belief.body}</p>
            {/* The belief as the dossier states it, closing the section. */}
            <p className="display display-md max-w-lg italic text-olive">{belief.pull}</p>
          </div>
          <div className="img-settle overflow-hidden rounded-[2px]" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={belief.image}
              alt={belief.imageAlt}
              width={1080}
              height={1350}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ---------- Statement ---------- */}
      <section className="bg-shell px-6 py-[var(--spacing-section)] md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="display display-lg is-in max-w-4xl" data-reveal>
            {statement.lines.map((line, i) => (
              <span className="mask-line" key={line}>
                <span className={i === 1 ? 'italic text-olive' : ''}>{line}</span>
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* ---------- The shape of a day ---------- */}
      <Section>
        <div className="mb-12 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{shape.eyebrow}</p>
          <h2 className="display display-lg mb-8">{shape.heading}</h2>
          <p className="lede text-ink-soft">{shape.body}</p>
        </div>

        <div className="img-settle mb-14 overflow-hidden rounded-[2px]" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shape.image}
            alt={shape.imageAlt}
            width={1080}
            height={1350}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {/* Soft tinted tiles so the numbers read as cards, not loose text
            (Vivien, 2026-08-31). */}
        <ul className="reveal grid gap-6 md:grid-cols-2" data-reveal>
          {shape.facts.map((fact) => (
            <li key={fact.label} className="rounded-[3px] bg-sand/25 p-8 md:p-10">
              <p className="display text-[clamp(3rem,2rem+4vw,5rem)] leading-none text-olive">{fact.value}</p>
              <p className="eyebrow mt-4 text-ink">{fact.label}</p>
              <p className="body-copy mt-4 text-ink-soft">{fact.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/*
       * ---------- The Five Worlds ----------
       *
       * On `shell` rather than the dark `forest` band the section used to
       * carry (2026-09-02): even with forest lightened once already, the band
       * read as very dark, and the five photographs are the event here. The
       * light ground lets them supply the colour. Text pairs are the ones
       * already verified in globals.css: ink 13.1, ink-soft 5.3 and olive 4.7
       * on shell, all above AA.
       */}
      <section className="bg-shell px-6 py-[var(--spacing-section)] md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{worlds.eyebrow}</p>
            <h2 className="display display-lg mb-8">{worlds.heading}</h2>
            <p className="lede text-ink-soft">{worlds.body}</p>
          </div>

          <div className="fade" data-reveal>
            <WorldsExplorer items={worlds.items} onLight />
          </div>

          <div className="mt-12 border-t border-ink/15 pt-9 fade" data-reveal>
            <Link href={worlds.linkHref} className="link-line eyebrow text-forest">
              {worlds.linkLab}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- The journey ---------- */}
      <Section>
        <div className="mb-12 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{journey.eyebrow}</p>
          <h2 className="display display-lg mb-8">{journey.heading}</h2>
          <p className="lede text-ink-soft">{journey.body}</p>
        </div>

        {/* Horizontal timeline: a hairline with seven stops. Scrolls sideways
            on small screens rather than cramming seven columns. */}
        {/* Keyboard-reachable scroll region (audit, 2026-09-05, 4.1). */}
        <div className="fade overflow-x-auto pb-4" tabIndex={0} aria-label={journey.heading} data-reveal>
          <ol className="relative flex min-w-[880px]">
            <div className="absolute left-0 right-0 top-[5px] h-px bg-ink/15" aria-hidden="true" />
            {journey.stages.map((stage) => (
              <li key={stage.name} className="flex flex-1 flex-col items-center px-2 text-center">
                <span className="h-[11px] w-[11px] rounded-full border border-olive bg-linen" aria-hidden="true" />
                <h3 className="display mt-6 text-lg leading-tight md:text-xl">{stage.name}</h3>
                <p className="eyebrow mt-2 text-olive">{stage.age}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col gap-6 fade md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="body-copy max-w-md text-ink-soft">{journey.note}</p>
          <Link href={journey.linkHref} className="link-line eyebrow shrink-0 text-ink">
            {journey.linkLabel}
          </Link>
        </div>
      </Section>

      {/*
       * ---------- The promise ----------
       *
       * The Narelo Promise, canonical, on a soft photograph washed back under
       * linen so the band has depth without turning dark (2026-09-04). The
       * dossier's three cards briefly sat here and now live once, on the
       * Membership page.
       */}
      <section className="relative isolate overflow-hidden px-6 py-[var(--spacing-section)] md:px-10">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={promise.image}
            alt=""
            width={1800}
            height={820}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {/* Washed almost out: texture and warmth, not a picture to look at. */}
          <div className="absolute inset-0 bg-shell/90" aria-hidden="true" />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{promise.eyebrow}</p>
            <h2 className="display display-lg">{promise.heading}</h2>
          </div>

          {/* The four canonical Promise lines, two up. */}
          <ul className="reveal grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12" data-reveal>
            {promise.items.map((item) => (
              <li key={item.title}>
                <h3 className="display display-md mb-4">{item.title}</h3>
                <p className="body-copy max-w-lg text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Marbella ---------- */}
      <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={home.image}
            alt={home.imageAlt}
            width={1536}
            height={1024}
            loading="lazy"
            className="parallax h-[118%] w-full object-cover"
            data-speed="0.16"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" aria-hidden="true" />

        <div className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/80">{home.eyebrow}</p>
            <h2 className="display display-lg mb-8 text-linen">{home.heading}</h2>
            <p className="lede mb-10 text-linen/85">{home.body}</p>
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <Section bg="bg-shell" className="text-center">
        <div className="is-in mx-auto max-w-3xl" data-reveal>
          <h2 className="display display-xl mb-10">
            {closing.headingLines.map((line, i) => (
              <span className="mask-line" key={line}>
                <span className={i === 1 ? 'italic text-olive' : ''}>{line}</span>
              </span>
            ))}
          </h2>
          <p className="lede mx-auto mb-12 max-w-xl text-ink-soft">{closing.body}</p>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-solid">
            {closing.ctaLabel}
          </a>
        </div>
      </Section>
    </>
  );
}
