import Link from 'next/link';
import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import { contact } from '@/content/site';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import IncludedAccordion from '@/components/IncludedAccordion';
import { stageDetails } from '@/content/stages';
import {
  hero,
  whatItIs,
  isNot,
  childExperience,
  ageGroups,
  howItWorks,
  included,
  proof,
  joining,
  closing,
} from '@/content/membership';

export const metadata = {
  title: 'Membership',
  description: hero.lede,
  openGraph: { title: 'Membership | Narelo', description: hero.lede, images: [hero.image] },
};

/** Anchors for the sticky in-page nav — one per question the flyer answers. */
const CHAPTERS = [
  { id: 'what', label: 'What Narelo is' },
  { id: 'experience', label: 'The experiences' },
  { id: 'ages', label: 'Age groups' },
  { id: 'how', label: 'How it works' },
  { id: 'who', label: 'Who we are' },
  { id: 'join', label: 'How to join' },
];

export default function MembershipPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden" data-hero-dark>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt="" width={1672} height={941} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/45 to-transparent" aria-hidden="true" />

        <div className="is-in mx-auto w-full max-w-[1560px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <p className="eyebrow mb-8 text-linen/75">{hero.eyebrow}</p>
          <h1 className="display display-xl max-w-4xl text-linen">
            {hero.headingLines.map((line, i) => (
              <span className="mask-line" key={line}>
                <span className={i === 1 ? 'italic' : ''}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="lede mt-10 max-w-xl text-linen/85">{hero.lede}</p>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-solid mt-10">
            {closing.ctaLabel}
          </a>
        </div>
      </section>

      {/* ---------- Sticky chapter nav ---------- */}
      <nav
        aria-label="On this page"
        className="sticky top-[68px] z-40 border-y border-ink/10 bg-linen/92 backdrop-blur-md"
      >
        <ul className="mx-auto flex max-w-[1560px] gap-7 overflow-x-auto px-6 py-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CHAPTERS.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="eyebrow whitespace-nowrap text-ink-soft transition-colors hover:text-ink"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- 1. What is Narelo? ---------- */}
      <Section id="what">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{whatItIs.eyebrow}</p>
            <h2 className="display display-lg mb-8">{whatItIs.heading}</h2>
            <p className="lede mb-10 text-ink-soft">{whatItIs.body}</p>
            <p className="display display-md italic text-olive">{whatItIs.pull}</p>
          </div>
          <div className="img-settle overflow-hidden rounded-[2px]" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={whatItIs.image}
              alt=""
              width={1536}
              height={2048}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* What Narelo is NOT, struck through one by one, then what it is. */}
        <div className="mt-24 border-t border-ink/12 pt-14 fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{isNot.eyebrow}</p>
          <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
            {isNot.items.map((item) => (
              <li key={item} className="display display-md text-ink-soft line-through decoration-olive/60 decoration-1">
                {item}
              </li>
            ))}
          </ul>
          <p className="display display-md mt-10 italic text-ink">{isNot.line}</p>
        </div>
      </Section>

      {/* ---------- 2. What does my child experience? ---------- */}
      <section id="experience" className="bg-forest px-6 py-[var(--spacing-section)] text-linen md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/60">{childExperience.eyebrow}</p>
            <h2 className="display display-lg mb-8">{childExperience.heading}</h2>
            <p className="lede text-linen/75">{childExperience.body}</p>
          </div>

          <ul className="reveal mb-12" data-reveal>
            {childExperience.worlds.map((w, i) => (
              <li
                key={w.name}
                className="group grid gap-3 border-t border-linen/15 py-7 md:grid-cols-[5rem_1fr_1.2fr] md:items-baseline md:gap-8"
              >
                <span className="eyebrow text-linen/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="display display-md transition-transform duration-700 md:group-hover:translate-x-2">
                  {w.name}
                </h3>
                <p className="body-copy text-linen/70">{w.body}</p>
              </li>
            ))}
          </ul>

          {/* The worlds are named here and explained once, on the Experiences
              page. Same for the session figures: this links, it does not
              restate them (Rui, 2026-09-02). */}
          <div className="fade border-t border-linen/15 pt-10" data-reveal>
            <Link href={childExperience.worldsLinkHref} className="link-line eyebrow text-linen">
              {childExperience.worldsLinkLabel}
            </Link>

            <p className="body-copy mt-10 max-w-2xl text-linen/70">{childExperience.note}</p>

            <Link href={childExperience.formatLinkHref} className="link-line eyebrow mt-8 inline-block text-linen">
              {childExperience.formatLinkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 3. Which age group? ---------- */}
      <Section id="ages">
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{ageGroups.eyebrow}</p>
          <h2 className="display display-lg mb-8">{ageGroups.heading}</h2>
          <p className="lede text-ink-soft">{ageGroups.body}</p>
        </div>

        {/* Name and age only: an index, not a second set of descriptions. Every
            description of a stage lives on the Experiences page (Rui,
            2026-09-02). */}
        <ul className="reveal border-t border-ink/12" data-reveal>
          {stageDetails.map((stage) => (
            <li
              key={stage.name}
              className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-6 md:py-7"
            >
              <h3 className="display display-md">{stage.name}</h3>
              <span className="eyebrow shrink-0 text-olive">{stage.age}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 fade md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="body-copy max-w-xl text-ink-soft">{ageGroups.note}</p>
          <Link href={ageGroups.linkHref} className="link-line eyebrow shrink-0 text-ink">
            {ageGroups.linkLabel}
          </Link>
        </div>
      </Section>

      {/* ---------- 4. How does membership work, and what's included? ----------
          Merged from three sections that said much the same thing (Rui,
          2026-08-29): a short shared rhythm, then the concrete inclusions. */}
      <Section id="how" bg="bg-shell">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-24">
          <div className="fade md:sticky md:top-40 md:self-start" data-reveal>
            <p className="eyebrow mb-8 text-olive">{howItWorks.eyebrow}</p>
            <h2 className="display display-lg mb-8">{howItWorks.heading}</h2>
            <p className="body-copy max-w-sm text-ink-soft">{howItWorks.body}</p>
          </div>

          <div className="reveal" data-reveal>
            <ul>
              {howItWorks.items.map((item) => (
                <li
                  key={item.n}
                  className="grid gap-4 border-t border-ink/12 py-8 first:border-t-0 first:pt-0 md:grid-cols-[4rem_1fr] md:gap-8"
                >
                  <span className="eyebrow text-olive">{item.n}</span>
                  <div>
                    <h3 className="display display-md mb-3">{item.title}</h3>
                    <p className="body-copy max-w-lg text-ink-soft">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="body-copy mt-10 max-w-lg text-ink-soft">{howItWorks.note}</p>

            <div className="mt-16 border-t border-ink/12 pt-12">
              <p className="eyebrow mb-8 text-olive">{included.eyebrow}</p>
              <IncludedAccordion groups={included.groups} />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- 5. Who is behind this ---------- */}
      <Section id="who">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="img-settle overflow-hidden rounded-[2px]" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={proof.image}
              alt=""
              width={1855}
              height={848}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{proof.eyebrow}</p>
            <h2 className="display display-lg mb-8">{proof.heading}</h2>
            <p className="lede mb-10 text-ink-soft">{proof.body}</p>
            <blockquote className="display display-md border-t border-ink/12 pt-8 italic text-ink">
              “{proof.quote}”
            </blockquote>
            <p className="eyebrow mt-4 text-ink-soft">{proof.attribution}</p>
          </div>
        </div>
      </Section>

      {/* ---------- 6. How do we join? ---------- */}
      <Section id="join">
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{joining.eyebrow}</p>
          <h2 className="display display-lg">{joining.heading}</h2>
        </div>

        <ol className="reveal grid gap-10 md:grid-cols-4 md:gap-8" data-reveal>
          {joining.steps.map((step) => (
            <li key={step.n}>
              <div className="mb-5 h-px w-full bg-ink/15" aria-hidden="true" />
              <span className="eyebrow text-olive">{step.n}</span>
              <h3 className="display display-md mt-3">{step.title}</h3>
              <p className="body-copy mt-3 text-ink-soft">{step.body}</p>
              {'whatsapp' in step && step.whatsapp && (
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-line eyebrow mt-5 inline-flex items-center gap-2.5 text-forest"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Start on WhatsApp
                </a>
              )}
            </li>
          ))}
        </ol>

        <p className="lede mt-16 max-w-2xl text-ink-soft fade" data-reveal>
          {joining.reassurance}
        </p>
      </Section>

      {/* ---------- Closing ---------- */}
      <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden">
        <LazyVideo src={closing.video} poster={closing.poster} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden="true" />

        <div className="is-in mx-auto w-full max-w-[1280px] px-6 py-24 text-center md:px-10" data-reveal>
          <h2 className="display display-xl mb-10 text-linen">
            {closing.headingLines.map((line, i) => (
              <span className="mask-line" key={line}>
                <span className={i === 1 ? 'italic' : ''}>{line}</span>
              </span>
            ))}
          </h2>
          <p className="lede mx-auto mb-12 max-w-lg text-linen/85">{closing.body}</p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-solid">
              {closing.ctaLabel}
            </a>
            <Link href="/contact" className="btn btn-ghost text-linen">
              {closing.secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
