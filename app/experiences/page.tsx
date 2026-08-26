import Link from 'next/link';
import Section from '@/components/Section';
import VideoBand from '@/components/VideoBand';
import { hero, intro, stages, regular, personalised, closing, bandImage } from '@/content/experiences';

export const metadata = {
  title: 'Experiences',
  description: hero.body,
  openGraph: { title: 'Experiences | Narelo', description: hero.body, images: ['/images/experiences-hero.webp'] },
};

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero — copy column left on cream, image filling the right. */}
      <section className="grid items-stretch md:grid-cols-[1fr_1.4fr]">
        <div className="order-2 flex items-center px-6 py-16 md:order-1 md:px-12 md:py-24">
          <div className="max-w-sm">
            <h1 className="display mb-8 text-[clamp(2rem,1.3rem+2.6vw,3.4rem)]">{hero.heading}</h1>
            <p className="body-copy mb-10 text-warm-grey">{hero.body}</p>
            <Link
              href={hero.linkHref}
              className="eyebrow inline-block rounded-full bg-forest px-7 py-3.5 !tracking-[0.12em] text-cream transition-opacity hover:opacity-90"
            >
              {hero.linkLabel}
            </Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image}
          alt=""
          width={2048}
          height={1152}
          className="order-1 h-[300px] w-full object-cover md:order-2 md:h-full md:min-h-[637px]"
        />
      </section>

      {/* Intro */}
      <Section className="text-center">
        <h2 className="display reveal mx-auto max-w-3xl text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)]">{intro.heading}</h2>
      </Section>

      {/* The stages */}
      <Section id="stages" bg="bg-cream-alt">
        <div className="reveal mb-16 text-center">
          <p className="eyebrow mb-4 text-rust">{stages.label}</p>
          <h2 className="display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)]">{stages.heading}</h2>
        </div>
        <ol className="relative mx-auto max-w-2xl">
          {/* Vertical rule threading the stages together, as on the source. */}
          <div className="absolute bottom-6 left-[38px] top-6 hidden w-px bg-sage/25 sm:block" aria-hidden="true" />

          {stages.items.map((stage) => (
            <li key={stage.n} className="reveal relative grid grid-cols-[auto_1fr] items-center gap-5 py-7 sm:grid-cols-[32px_36px_128px_1fr] sm:gap-7 md:py-9">
              <span className="display text-lg text-warm-grey sm:text-xl" aria-hidden="true">
                {stage.n}
              </span>

              {/* Dot on the rule */}
              <span className="relative hidden justify-self-center sm:block" aria-hidden="true">
                <span className="block h-[7px] w-[7px] rounded-full bg-sage/70" />
              </span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stage.image}
                alt=""
                width={1024}
                height={1536}
                loading="lazy"
                className="leaf col-start-2 row-start-2 w-[104px] object-cover sm:col-start-3 sm:row-start-1 sm:w-32"
                style={{ aspectRatio: '2 / 3' }}
              />

              <div className="col-span-2 sm:col-span-1">
                <h3 className="display text-xl sm:text-2xl">{stage.name}</h3>
                <p className="body-copy mb-2 text-sm text-warm-grey">{stage.age}</p>
                <p className="body-copy max-w-xs text-sm italic text-warm-grey">{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Decorative band */}
      <div className="reveal h-[280px] overflow-hidden md:h-[420px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bandImage} alt="" width={1536} height={2048} loading="lazy" className="h-full w-full object-cover" />
      </div>

      {/* Regular experiences */}
      <Section>
        <div className="reveal mb-14 text-center">
          <p className="eyebrow mb-4 text-rust">{regular.eyebrow}</p>
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)]">{regular.heading}</h2>
        </div>
        <ul className="reveal grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {regular.items.map((item) => (
            <li key={item.name} className="border-t border-sage/15 pt-6">
              <h3 className="display mb-3 text-xl">{item.name}</h3>
              <p className="body-copy text-warm-grey">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Personalised experiences */}
      <Section bg="bg-cream-alt">
        <div className="reveal mb-14 text-center">
          <p className="eyebrow mb-4 text-rust">{personalised.eyebrow}</p>
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)]">{personalised.heading}</h2>
        </div>
        <ul className="reveal grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {personalised.items.map((item) => (
            <li key={item.name} className="border-t border-sage/15 pt-6">
              <h3 className="display mb-3 text-xl">{item.name}</h3>
              <p className="body-copy text-warm-grey">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Closing */}
      <VideoBand src={closing.video} poster={closing.poster} minHeight="min-h-[60vh]" overlay="bg-black/35">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 text-center md:px-12">
          <p className="eyebrow mb-6 text-cream/90">{closing.eyebrow}</p>
          <h2 className="display mx-auto mb-4 max-w-3xl text-[clamp(1.75rem,1.2rem+2.4vw,3rem)] text-cream">{closing.heading}</h2>
          <p className="body-copy mx-auto max-w-xl text-cream/90">{closing.sub}</p>
        </div>
      </VideoBand>
    </>
  );
}
