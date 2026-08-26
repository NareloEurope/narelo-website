import Link from 'next/link';
import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import WorldsExplorer from '@/components/WorldsExplorer';
import { contact } from '@/content/site';
import { hero, belief, statement, shape, worlds, journey, promise, home, founders, closing } from '@/content/home';

export const metadata = {
  title: 'Narelo · A private childhood membership',
  description: hero.lede,
  openGraph: { title: 'Narelo · A private childhood membership', description: hero.lede, images: [hero.poster] },
};

export default function HomePage() {
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
            <p className="lede max-w-md text-ink-soft">{belief.body}</p>
          </div>
          <div className="img-settle overflow-hidden rounded-[2px]" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={belief.image}
              alt=""
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
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{shape.eyebrow}</p>
          <h2 className="display display-lg mb-8">{shape.heading}</h2>
          <p className="lede text-ink-soft">{shape.body}</p>
        </div>

        <div className="img-settle mb-20 overflow-hidden rounded-[2px]" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shape.image}
            alt=""
            width={1080}
            height={1350}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <ul className="reveal grid gap-12 md:grid-cols-2 md:gap-16" data-reveal>
          {shape.facts.map((fact) => (
            <li key={fact.label}>
              <div className="mb-5 h-px w-full bg-ink/15" aria-hidden="true" />
              <p className="display text-[clamp(3rem,2rem+4vw,5rem)] leading-none text-olive">{fact.value}</p>
              <p className="eyebrow mt-4 text-ink">{fact.label}</p>
              <p className="body-copy mt-4 text-ink-soft">{fact.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- The Five Worlds ---------- */}
      <section className="bg-forest px-6 py-[var(--spacing-section)] text-linen md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-20 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/60">{worlds.eyebrow}</p>
            <h2 className="display display-lg mb-8">{worlds.heading}</h2>
            <p className="lede text-linen/75">{worlds.body}</p>
          </div>

          <div className="fade" data-reveal>
            <WorldsExplorer items={worlds.items} />
          </div>

          <div className="mt-14 border-t border-linen/15 pt-10 fade" data-reveal>
            <Link href={worlds.linkHref} className="link-line eyebrow text-linen">
              {worlds.linkLab}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- The journey ---------- */}
      <Section>
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{journey.eyebrow}</p>
          <h2 className="display display-lg mb-8">{journey.heading}</h2>
          <p className="lede text-ink-soft">{journey.body}</p>
        </div>

        {/* Horizontal timeline: a hairline with seven stops. Scrolls sideways
            on small screens rather than cramming seven columns. */}
        <div className="fade overflow-x-auto pb-4" data-reveal>
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

        <div className="mt-14 flex flex-col gap-6 fade md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="body-copy max-w-md text-ink-soft">{journey.note}</p>
          <Link href={journey.linkHref} className="link-line eyebrow shrink-0 text-ink">
            {journey.linkLabel}
          </Link>
        </div>
      </Section>

      {/* ---------- The promise ---------- */}
      <Section bg="bg-shell">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-24">
          <div className="fade md:sticky md:top-32 md:self-start" data-reveal>
            <p className="eyebrow mb-8 text-olive">{promise.eyebrow}</p>
            <h2 className="display display-lg">{promise.heading}</h2>
          </div>

          <ul className="reveal" data-reveal>
            {promise.items.map((item) => (
              <li key={item.title} className="border-t border-ink/12 py-8 first:border-t-0 first:pt-0">
                <h3 className="display display-md mb-4">{item.title}</h3>
                <p className="body-copy max-w-lg text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- Marbella ---------- */}
      <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={home.image}
            alt=""
            width={1536}
            height={1024}
            loading="lazy"
            className="parallax h-[118%] w-full object-cover"
            data-speed="0.16"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" aria-hidden="true" />

        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/70">{home.eyebrow}</p>
            <h2 className="display display-lg mb-8 text-linen">{home.heading}</h2>
            <p className="lede mb-10 text-linen/85">{home.body}</p>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-ghost text-linen">
              {home.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Founders ---------- */}
      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-24">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{founders.eyebrow}</p>
            <h2 className="display display-lg">{founders.heading}</h2>
          </div>
          <p className="lede self-end text-ink-soft fade" data-reveal>
            {founders.body}
          </p>
        </div>
      </Section>

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
