import Link from 'next/link';
import Section from '@/components/Section';
import VideoBand from '@/components/VideoBand';
import { hero, pause, rushed, world, journey, discovery, closing } from '@/content/home';

export const metadata = {
  title: 'Home',
  // Wix published no meta/og description. Reusing the page's own opening line
  // rather than writing new marketing copy — see MIGRATION-AUDIT.md §6.
  description: hero.heading,
  openGraph: { title: 'Home | Narelo', description: hero.heading, images: ['/images/home-hero-poster.webp'] },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — copy sits low and left over a full-bleed background video. */}
      <VideoBand src={hero.video} poster={hero.poster} minHeight="min-h-[calc(100svh-5rem)]" overlay="bg-black/25" align="end">
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-12 md:pb-28">
          <h1 className="display max-w-2xl text-[clamp(2.25rem,1.2rem+3.4vw,3.7rem)] text-cream">{hero.heading}</h1>
          <p className="eyebrow mt-10 flex flex-col gap-2 text-cream/85">
            <span>{hero.eyebrowLeft}</span>
            <span>{hero.eyebrowRight}</span>
          </p>
        </div>
      </VideoBand>

      {/* A moment to pause — text left, two overlapping portraits right. */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal">
            <p className="eyebrow mb-6 text-warm-grey">{pause.eyebrow}</p>
            <h2 className="display mb-6 max-w-md text-[clamp(1.75rem,1.2rem+2.2vw,2.9rem)]">{pause.heading}</h2>
            <p className="body-copy max-w-sm text-warm-grey">{pause.body}</p>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[420px] pb-24 md:mx-0 md:pb-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pause.imageBack}
              alt=""
              width={1080}
              height={1350}
              loading="lazy"
              className="ml-auto w-[72%] rounded-sm object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pause.imageFront}
              alt=""
              width={1080}
              height={1350}
              loading="lazy"
              className="absolute bottom-0 left-0 w-[58%] rounded-sm object-cover shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Childhood is not to be rushed — full-bleed image, copy over its right side. */}
      <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rushed.image}
          alt=""
          width={1080}
          height={604}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/20 md:bg-transparent" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="ml-auto max-w-md text-center md:text-right">
            <h2 className="display mb-6 text-[clamp(1.75rem,1.2rem+2.2vw,2.9rem)] text-cream md:text-sage">{rushed.heading}</h2>
            <p className="body-copy text-cream/90 md:text-warm-grey">{rushed.body}</p>
          </div>
        </div>
      </section>

      {/* A world built around childhood */}
      <Section className="text-center">
        <div className="reveal mx-auto max-w-xl">
          <p className="eyebrow mb-6 text-warm-grey">{world.eyebrow}</p>
          <h2 className="display mb-10 text-[clamp(1.9rem,1.2rem+2.6vw,3.1rem)] uppercase">{world.heading}</h2>
          <p className="body-copy mx-auto mb-14 max-w-md text-warm-grey">{world.body}</p>
          <p className="eyebrow mx-auto max-w-[22rem] !text-[clamp(0.7rem,0.62rem+0.35vw,0.85rem)] leading-loose text-sage">{world.closing}</p>
        </div>
      </Section>

      {/* Solid tan band (no content on the source) */}
      <div className="h-[280px] bg-tan md:h-[560px] lg:h-[700px]" aria-hidden="true" />

      {/* For every chapter of childhood — horizontal stage timeline */}
      <Section>
        <div className="reveal mb-16 text-center">
          <p className="eyebrow mb-4 text-warm-grey">{journey.eyebrow}</p>
          <h2 className="display text-[clamp(1.9rem,1.2rem+2.6vw,3.1rem)] uppercase">{journey.heading}</h2>
        </div>

        <div className="reveal relative">
          {/* Connecting rule, desktop only — the source stacks these on mobile. */}
          <div className="absolute left-0 right-0 top-[10px] hidden h-px bg-sage/25 lg:block" aria-hidden="true" />
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
            {journey.stages.map((stage) => (
              <li key={stage.name} className="relative flex flex-col items-center text-center">
                <span className="mb-6 hidden h-[9px] w-[9px] rounded-full bg-sage/70 lg:block" aria-hidden="true" />
                <h3 className="display mb-2 text-[15px] uppercase leading-tight tracking-[-0.01em] md:text-base">{stage.name}</h3>
                <p className="body-copy text-xs text-warm-grey md:text-sm">{stage.age}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-16 text-center">
          <Link href={journey.linkHref} className="eyebrow border-b border-sage/40 pb-1 text-sage transition-colors hover:text-rust">
            {journey.linkLabel}
          </Link>
        </div>
      </Section>

      {/* A world of discovery — full-bleed image, copy left, four worlds right */}
      <section className="relative isolate overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={discovery.background}
          alt=""
          width={1536}
          height={1024}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-cream/70" aria-hidden="true" />
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-12 md:py-24">
          <div>
            <p className="eyebrow mb-4 text-warm-grey">{discovery.eyebrow}</p>
            <h2 className="display mb-6 text-[clamp(1.9rem,1.3rem+2.3vw,3rem)]">{discovery.heading}</h2>
            <p className="body-copy mb-8 max-w-sm text-warm-grey">{discovery.body}</p>
            <Link href={discovery.linkHref} className="eyebrow border-b border-sage/40 pb-1 text-sage transition-colors hover:text-rust">
              {discovery.linkLabel}
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {discovery.worlds.map((w) => (
              <li key={w.name}>
                <h3 className="display mb-2 text-2xl">{w.name}</h3>
                <p className="body-copy max-w-[15rem] text-warm-grey">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing — solid tan band, cream type */}
      <section className="flex min-h-[340px] items-center bg-tan px-6 py-24 md:min-h-[560px] md:px-12">
        <h2 className="display reveal mx-auto max-w-3xl text-center text-[clamp(1.6rem,1.1rem+2vw,2.6rem)] leading-snug text-cream">
          {closing.heading}
        </h2>
      </section>
    </>
  );
}
