import Link from 'next/link';
import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import IncludedAccordion from '@/components/IncludedAccordion';
import PromiseCards from '@/components/PromiseCards';
import { content } from '@/content/dictionary';
import { localePath, type Lang } from '@/content/locales';



export default function MembershipPage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { contact } = c.site;
  const { stageDetails } = c.stages;
  const CHAPTERS = c.membership.chapters;
  const { hero, whatItIs, isNot, childExperience, ageGroups, howItWorks, included, different, proof, joining, closing } = c.membership;
  const t = (path: string) => localePath(lang, path);
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
        {/* tabIndex makes the scroll region reachable and scrollable by keyboard,
            which it was not before (audit, 2026-09-05, 4.1). */}
        <ul
          tabIndex={0}
          className="mx-auto flex max-w-[1560px] gap-7 overflow-x-auto px-6 py-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
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
            <p className="lede mb-6 text-ink-soft">{whatItIs.body}</p>
            <p className="body-copy mb-10 text-ink-soft">{whatItIs.body2}</p>
            <p className="display display-md italic text-olive">{whatItIs.pull}</p>
          </div>
          <div className="img-settle overflow-hidden rounded-[2px]" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={whatItIs.image}
              alt={whatItIs.imageAlt}
              width={1536}
              height={2048}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* What Narelo is NOT, struck through one by one, then what it is. */}
        <div className="mt-16 border-t border-ink/12 pt-12 fade" data-reveal>
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

        {/* And what makes it different, closing the trio (2026-09-04). */}
        <div className="mt-16 border-t border-ink/12 pt-12 fade" data-reveal>
          <p className="eyebrow mb-10 text-olive">{different.eyebrow}</p>
          <ul className="reveal grid gap-10 md:grid-cols-3 md:gap-12" data-reveal>
            {different.items.map((item) => (
              <li key={item.n}>
                <span className="eyebrow text-olive">{item.n}</span>
                <h3 className="display display-md mt-3">{item.title}</h3>
                <p className="body-copy mt-4 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- 2. What does my child experience? ---------- */}
      <section id="experience" className="bg-forest px-6 py-[var(--spacing-section)] text-linen md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-linen/60">{childExperience.eyebrow}</p>
            <h2 className="display display-lg mb-8">{childExperience.heading}</h2>
            <p className="lede mb-10 text-linen/85">{childExperience.body}</p>
            <Link href={childExperience.worldsLinkHref} className="link-line eyebrow text-linen">
              {childExperience.worldsLinkLabel}
            </Link>

            <p className="body-copy mt-10 max-w-2xl text-linen/80">{childExperience.note}</p>

            <Link href={childExperience.formatLinkHref} className="link-line eyebrow mt-8 inline-block text-linen">
              {childExperience.formatLinkLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 3. Which age group? ---------- */}
      <Section id="ages">
        <div className="mb-12 max-w-2xl fade" data-reveal>
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

          </div>
        </div>
      </Section>

      {/*
       * ---------- 4b. What does your family actually receive? ----------
       *
       * Its own band now, the way the dossier sets it: the heading on the
       * light ground, then the three cards in forest green over a photograph
       * washed back so it reads as texture rather than a picture. The rest of
       * what comes with membership stays as accordion rows underneath, on the
       * light ground, so the three cards are the thing you see.
       */}
      <section className="relative isolate overflow-hidden px-6 py-[var(--spacing-section)] md:px-10">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={included.image}
            alt=""
            width={1800}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {/* Washed back to 85%, not 90%: the cards are translucent now, so the
              photograph needs to be there to show through them. */}
          <div className="absolute inset-0 bg-shell/85" aria-hidden="true" />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 max-w-2xl fade" data-reveal>
            <p className="eyebrow mb-8 text-olive">{included.eyebrow}</p>
            <h2 className="display display-lg">{included.heading}</h2>
          </div>

          <PromiseCards cards={included.cards} />

          <div className="mt-16 border-t border-ink/15 pt-12 fade" data-reveal>
            <IncludedAccordion groups={included.groups} />
          </div>
        </div>
      </section>

      {/* ---------- 5. Who is behind this ---------- */}
      <Section id="who">
        <div className="mb-16 max-w-2xl fade" data-reveal>
          <p className="eyebrow mb-8 text-olive">{proof.eyebrow}</p>
          <h2 className="display display-lg">{proof.heading}</h2>
        </div>

        {/*
         * A portrait and a block each: name and role, the bio, then their own
         * words. Two columns on desktop, stacked on a phone, with the quote
         * pinned to the foot of each column so the two quotes line up when
         * the bios are different lengths.
         */}
        <div className="reveal grid gap-14 md:grid-cols-2 md:gap-20" data-reveal>
          {proof.people.map((person) => (
            <div key={person.name} className="flex flex-col">
              <div className="img-settle mb-8 overflow-hidden rounded-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={person.image}
                  alt={person.name}
                  width={1086}
                  height={1448}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="mb-5 h-px w-full bg-ink/15" aria-hidden="true" />
              <h3 className="display display-md">{person.name}</h3>
              <p className="eyebrow mt-3 text-olive">{person.role}</p>
              <p className="body-copy mt-6 text-ink-soft">{person.body}</p>
              <blockquote className="lede mt-auto pt-10 italic text-ink">
                “{person.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 6. How do we join? ---------- */}
      <Section id="join">
        <div className="mb-12 max-w-2xl fade" data-reveal>
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
                  {joining.whatsappLabel}
                </a>
              )}
            </li>
          ))}
        </ol>

        <p className="lede mt-12 max-w-2xl text-ink-soft fade" data-reveal>
          {joining.reassurance}
        </p>
      </Section>

      {/* ---------- Closing ---------- */}
      <section className="relative isolate flex min-h-[75svh] items-center overflow-hidden">
        <LazyVideo src={closing.video} poster={closing.poster} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden="true" />

        <div className="is-in mx-auto w-full max-w-[1280px] px-6 py-20 text-center md:px-10" data-reveal>
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
