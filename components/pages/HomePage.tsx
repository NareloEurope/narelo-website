import Link from 'next/link';
import Section from '@/components/Section';
import StageTimeline from '@/components/StageTimeline';
import LazyVideo from '@/components/LazyVideo';
import WorldsExplorer from '@/components/WorldsExplorer';
import { content } from '@/content/dictionary';
import { localePath, type Lang } from '@/content/locales';


export default function HomePage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { contact } = c.site;
  const { hero, belief, statement, parents, gain, different, approach, worlds, journey, ways, home, ourBelief, closing } =
    c.home;
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
            <div className="max-w-xl">
              <p className="lede text-linen/85">{hero.lede}</p>
              {/* The second paragraph is the longer of the two, so it sits a
                  size down and the first line stays the one that carries. */}
              <p className="body-copy mt-6 text-linen/80">{hero.lede2}</p>
            </div>
            <span className="eyebrow hidden shrink-0 text-linen/60 md:block">{hero.scrollHint}</span>
          </div>
        </div>
      </section>

      {/*
       * ---------- Belief ----------
       *
       * Three paragraphs stacked beside the photograph was one too many
       * (Vivien, 2026-09-07). The heading and the paragraph stay on the left,
       * now aligned with the top of the photograph rather than centred
       * against it, and the dossier's belief line moved under the photograph
       * in a smaller size. It reads as a caption to the picture, which is
       * what it is.
       */}
      <Section>
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{belief.eyebrow}</p>
            <h2 className="display display-lg mb-8 max-w-lg">{belief.heading}</h2>
            <p className="lede max-w-md text-ink-soft">{belief.body}</p>
          </div>
          <div className="fade" data-reveal>
            <div className="img-settle overflow-hidden rounded-[2px]">
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
            <p className="body-copy mt-6 italic text-olive">{belief.pull}</p>
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

      {/*
       * ---------- For parents ----------
       *
       * Website Core §3, and new to the page. The parent's own time is the
       * thing the home page had never said out loud, so it comes early,
       * straight after the statement band.
       *
       * Same shape as the belief section above it: words left, photograph
       * right, the line that lands sitting under the picture. The photograph
       * is the one the shape-of-a-day section used before this rewrite.
       */}
      <Section>
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{parents.eyebrow}</p>
            <h2 className="display display-lg mb-8 max-w-lg">{parents.heading}</h2>
            <p className="lede mb-6 max-w-md text-ink-soft">{parents.body}</p>
            <p className="body-copy mb-6 max-w-md text-ink-soft">{parents.body2}</p>
            <p className="body-copy max-w-md text-ink-soft">{parents.body3}</p>
          </div>
          <div className="fade" data-reveal>
            <div className="img-settle overflow-hidden rounded-[2px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={parents.image}
                alt={parents.imageAlt}
                width={1080}
                height={1350}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="body-copy mt-6 italic text-olive">{parents.pull}</p>
          </div>
        </div>
      </Section>

      {/* ---------- What children gain ---------- */}
      <Section bg="bg-shell">
        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{gain.eyebrow}</p>
            <h2 className="display display-lg">{gain.heading}</h2>
          </div>
          <div className="fade" data-reveal>
            <p className="lede mb-6 text-ink-soft">{gain.body}</p>
            <p className="body-copy text-ink-soft">{gain.body2}</p>
          </div>
        </div>
      </Section>

      {/* ---------- What makes Narelo different ---------- */}
      <Section>
        <div className="mb-14 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{different.eyebrow}</p>
          <h2 className="display display-lg mb-8">{different.heading}</h2>
          <p className="lede text-ink-soft">{different.body}</p>
        </div>

        {/* The pair is the whole point of the section: the question we do not
            lead with, then the one we do. Two tiles rather than two more
            paragraphs, so the second reads as the answer to the first, and
            the dark one is the one that matters. */}
        <div className="reveal grid gap-6 md:grid-cols-2" data-reveal>
          <div className="rounded-[3px] bg-sand/25 p-8 md:p-10">
            <p className="eyebrow mb-5 text-ink-soft">{different.notLabel}</p>
            <p className="display display-md text-ink-soft">{different.notQuestion}</p>
          </div>
          <div className="rounded-[3px] bg-forest p-8 md:p-10">
            <p className="eyebrow mb-5 text-linen/80">{different.askLabel}</p>
            <p className="display display-md text-linen">{different.askQuestion}</p>
          </div>
        </div>
      </Section>

      {/*
       * ---------- Our approach ----------
       *
       * The one dark band between the hero and Marbella. It breaks a long run
       * of light sections, and the closing line is the kind that wants air
       * around it. linen on forest is 7.43 and linen/80 is 5.50, both above
       * AA (globals.css).
       */}
      <section className="bg-forest px-6 py-[var(--spacing-section)] md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/80">{approach.eyebrow}</p>
            <h2 className="display display-lg mb-8 text-linen">{approach.heading}</h2>
            <p className="lede mb-10 text-linen/80">{approach.body}</p>
            <p className="display display-md italic text-linen">{approach.pull}</p>
          </div>
        </div>
      </section>

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
            <Link href={t(worlds.linkHref)} className="link-line eyebrow text-forest">
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

        {/* The same timeline the Membership page carries, growth marks and all
            (Vivien, 2026-09-08). It used to be its own version: plain hollow
            dots on a rail 880px wide, which on a phone was a sideways scroll
            with no marks on it. */}
        <StageTimeline items={journey.stages} label={journey.heading} />

        <div className="mt-12 flex flex-col gap-6 fade md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="body-copy max-w-md text-ink-soft">{journey.note}</p>
          <Link href={t(journey.linkHref)} className="link-line eyebrow shrink-0 text-ink">
            {journey.linkLabel}
          </Link>
        </div>
      </Section>

      {/*
       * ---------- How families can experience Narelo ----------
       *
       * Website Core §7. A summary: the Experiences page describes the same
       * five in full, so this links there rather than writing them out twice.
       *
       * An eyebrow and no heading, on purpose. The Website Core gives this
       * block no heading and one was not invented to fill the slot.
       */}
      <Section bg="bg-shell">
        <p className="eyebrow mb-12 text-olive fade" data-reveal>
          {ways.eyebrow}
        </p>
        <ul className="reveal grid gap-x-16 gap-y-10 md:grid-cols-2" data-reveal>
          {ways.items.map((item) => (
            <li key={item.name} className="border-t border-ink/15 pt-7">
              <h3 className="display display-md mb-4">{item.name}</h3>
              <p className="body-copy max-w-lg text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-ink/15 pt-9 fade" data-reveal>
          <Link href={t(ways.linkHref)} className="link-line eyebrow text-forest">
            {ways.linkLabel}
          </Link>
        </div>
      </Section>

      {/*
       * ---------- Marbella ----------
       *
       * The photograph here used to be an almost empty washed-out sky. On a
       * phone the crop landed on nothing but haze, so the band read as a grey
       * panel with white text you could barely make out (Vivien, 2026-09-07).
       * It is a coastline now, sea and headland, which is what the copy
       * describes, and it is portrait so a phone gets the picture rather than
       * a slice of sky.
       *
       * The scrim went with it. Text sits at the foot of the band, so the
       * gradient is dark where the words are and stays dark enough further up
       * that a bright patch of sea cannot swallow the heading.
       */}
      <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={home.image}
            alt={home.imageAlt}
            width={1536}
            height={2048}
            loading="lazy"
            className="parallax h-[118%] w-full object-cover object-[50%_62%]"
            data-speed="0.16"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/25" aria-hidden="true" />

        <div className="mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/80">{home.eyebrow}</p>
            <h2 className="display display-lg mb-8 text-linen">{home.heading}</h2>
            <p className="lede mb-10 text-linen/85">{home.body}</p>
          </div>
        </div>
      </section>

      {/*
       * ---------- Our belief ----------
       *
       * Website Core §8. Centred and narrow: it is the page saying what it
       * believes, not another section of information, and it is the last
       * thing read before the invitation.
       */}
      <Section>
        <div className="mx-auto max-w-3xl text-center fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{ourBelief.eyebrow}</p>
          <h2 className="display display-lg mb-10">{ourBelief.heading}</h2>
          <p className="lede mb-6 text-ink-soft">{ourBelief.body}</p>
          <p className="lede mb-10 text-ink-soft">{ourBelief.body2}</p>
          <p className="body-copy text-ink-soft">{ourBelief.body3}</p>
          <p className="body-copy mb-10 text-ink-soft">{ourBelief.body4}</p>
          <p className="display display-md italic text-olive">{ourBelief.pull}</p>
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
