import Section from '@/components/Section';
import PriceReveal from '@/components/PriceReveal';
import PromiseCards from '@/components/PromiseCards';
import IncludedPanels from '@/components/IncludedPanels';
import DossierJourney from '@/components/DossierJourney';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Link from 'next/link';
import * as home from '@/content/home';
import * as membership from '@/content/membership';
import * as experiences from '@/content/experiences';
import * as stages from '@/content/stages';
import * as dossier from '@/content/dossier';
import { contact, socialIcons, ui } from '@/content/site';

/**
 * The Narelo Family Guide as a page: /dossier/.
 *
 * Reproduces the PDF section for section (see content/dossier.ts for the
 * source note). Copy that already lives elsewhere on the site, what Narelo
 * is, the founders, the five worlds, the age journey, what membership
 * includes, is read from its one canonical place rather than repeated here.
 * Only the research citations, the chapter headings and the pricing table,
 * none of which exist anywhere else on the site, live in content/dossier.ts.
 *
 * Deliberately not in `site.nav`, not linked from the footer, and not in
 * sitemap.xml (see app/dossier/page.tsx): reachable only by whoever has the
 * link, same as the mini dossier membership.joining already describes.
 */

/** A centred chapter title, olive on linen, the way the PDF marks each part. */
function ChapterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="display display-lg text-olive">{children}</h2>
      <div className="mx-auto mt-6 h-px w-16 bg-olive/40" aria-hidden="true" />
    </div>
  );
}

export default function DossierPage() {
  const { whatItIs, isNot, different, proof, included } = membership;
  const { spark, worlds, format, regular } = experiences;
  const { hero, research, worldChapter, experienceChapter, membershipChapter, pricing, reserve } = dossier;
  const instagram = socialIcons.find((icon) => icon.label === 'Instagram');

  return (
    <>
      {/* ---------- Cover ---------- */}
      {/*
       * The cover as the dossier PDF actually draws it (Vivien, 2026-09-19,
       * third pass, this time against the PDF side by side): not a dark
       * hero with white type, but a high-key, warm, cream-toned cover. The
       * sky fades up into the page's own linen so the "Family Guide" label,
       * the logo and the tagline sit in dark olive and ink on light ground,
       * and the children stand in the lower half, lit rather than
       * silhouetted.
       *
       * The file in public/images is a deliberately dark, underexposed grade
       * of this photo and the PDF's brighter grade does not exist as its own
       * asset here, so the look is built in CSS: a strong lift on the image
       * (brightness up, contrast down, a warm sepia cast) and a linen
       * gradient from the top instead of an ink one from the bottom.
       */}
      <section className="relative isolate flex min-h-[92svh] items-start overflow-hidden bg-linen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.image}
            alt=""
            width={1536}
            height={2048}
            className="h-full w-full object-cover object-[50%_78%] [filter:brightness(1.75)_contrast(0.78)_saturate(0.85)_sepia(0.22)]"
          />
        </div>
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-linen from-18% via-linen/75 via-45% to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-2xl px-6 pt-14 pb-24 text-center md:px-10 md:pt-20">
          <p className="eyebrow inline-block border-y border-olive/30 px-8 py-3 text-olive">· {hero.eyebrow} ·</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/narelo-logo.webp" alt="Narelo" width={796} height={341} className="mx-auto mt-10 h-20 w-auto md:h-24" />
          <div className="mx-auto mt-8 h-px w-16 bg-olive/40" aria-hidden="true" />
          <p className="eyebrow mt-8 text-olive">{whatItIs.heading}</p>
        </div>
      </section>

      {/* ---------- Our view on childhood ---------- */}
      <Section className="text-center">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-8 text-olive">{research.eyebrow}</p>
          <p className="display display-md text-ink-soft">
            We don’t create a<br className="hidden sm:block" /> world for children.
          </p>
          <p className="display display-md mt-2 text-olive">We open the real world to them.</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-ink/12 pt-12">
          <p className="eyebrow mb-6 text-ink-soft">{research.label}</p>
          <p className="lede text-ink-soft">{research.body}</p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ink/12 pt-10">
          {research.citations.map((c) => (
            <li key={c} className="eyebrow text-ink-soft">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- The world of Narelo ---------- */}
      <Section bg="bg-shell">
        <ChapterTitle>{worldChapter.heading}</ChapterTitle>

        <div className="mx-auto max-w-2xl">
          <h3 className="display display-md mb-6">{worldChapter.whatIsLabel}</h3>
          <p className="lede mb-6 text-ink-soft">{whatItIs.body}</p>
          <p className="body-copy text-ink-soft">{whatItIs.body2}</p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-[2px] bg-linen p-8 text-center shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:p-11">
          <p className="lede italic text-ink">“{home.belief.pull}”</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h3 className="display display-md mb-8">{worldChapter.whoLabel}</h3>
          <div className="flex flex-col gap-6">
            {proof.people.map((person) => (
              <div key={person.name} className="rounded-[2px] bg-linen p-8 shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:p-10">
                <div className="flex items-center gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.image}
                    alt={person.name}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-full object-cover md:h-20 md:w-20"
                  />
                  <div>
                    <h4 className="display display-md leading-snug">{person.name}</h4>
                    <p className="eyebrow mt-2 text-olive">{person.role}</p>
                  </div>
                </div>
                <p className="body-copy mt-6 text-ink-soft">{person.body}</p>
                <blockquote className="lede mt-6 border-t border-ink/12 pt-6 italic text-ink">“{person.quote}”</blockquote>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-ink/12 pt-12">
          <p className="eyebrow mb-10 text-olive">{different.eyebrow}</p>
          <ul className="flex flex-col gap-10">
            {different.items.map((item) => (
              <li key={item.n}>
                <span className="eyebrow text-olive">{item.n}</span>
                <h4 className="display display-md mt-3">{item.title}</h4>
                <p className="body-copy mt-4 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- The Narelo experience ---------- */}
      <Section>
        <ChapterTitle>{experienceChapter.heading}</ChapterTitle>

        <div className="mx-auto max-w-2xl">
          <h3 className="display display-md mb-6">{experienceChapter.whatLabel}</h3>
          <p className="body-copy mb-6 text-ink-soft">{format.body2}</p>
          <p className="body-copy text-ink-soft">{format.body3}</p>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-forest px-6 py-[var(--spacing-section)] text-linen md:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="display display-md text-center italic">
            {format.pull}
          </p>

          <div className="mt-14 rounded-[2px] bg-linen/10 p-8 ring-1 ring-linen/20 md:p-11">
            <p className="eyebrow mb-8 text-center text-linen/70">{spark.eyebrow}</p>
            <ol className="flex flex-col gap-5">
              {spark.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${i === spark.steps.length - 1 ? 'bg-linen' : 'bg-linen/50'}`}
                    aria-hidden="true"
                  />
                  <span className="body-copy">{step}</span>
                </li>
              ))}
            </ol>
            <p className="lede mt-8 border-t border-linen/20 pt-8 text-center italic text-linen/90">{spark.closing}</p>
          </div>
        </div>
      </section>

      {/* The dossier draws the age groups as a single vertical list, a ringed
          mark and a connecting line down the left, name and age on one row.
          The site elsewhere uses a horizontal swipeable timeline for this,
          which belongs to the main pages; this follows the dossier's own
          layout instead, since it is the one thing the team asked to carry
          over exactly (Vivien, 2026-09-18). The marks themselves stay the
          site's own growth icons, so the two are still recognisably one
          family rather than a second icon set.

          Each row now opens a small card of its own on tap (Vivien,
          2026-09-19): the stage's motto, summary and "what to expect"
          bullets, the same content the Experiences page's StageAccordion
          already carries in full, from content/stages.ts rather than
          written again here. */}
      <Section id="journey">
        <div className="mx-auto max-w-2xl">
          <h3 className="display display-md mb-10 text-center">{experienceChapter.journeyEyebrow}</h3>
        </div>

        <DossierJourney
          stages={stages.stageDetails}
          whatToExpectLabel={ui.whatToExpect}
          includedLabel={included.groups[0].label}
          includedItems={included.groups[0].items}
        />

        <p className="body-copy mx-auto mt-10 max-w-2xl text-center text-ink-soft">
          {membership.howItWorks.items[1].body} {home.journey.note}
        </p>
      </Section>

      <section className="bg-forest px-6 py-16 text-center text-linen md:px-10">
        <p className="eyebrow mb-6 text-linen/60">{experienceChapter.worldsLabel}</p>
        <ul className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {worlds.items.map((world) => (
            <li key={world.name} className="display display-md">
              {world.name}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Becoming part of Narelo ---------- */}
      <Section bg="bg-shell">
        <ChapterTitle>{membershipChapter.heading}</ChapterTitle>

        <div className="mx-auto max-w-2xl">
          <h3 className="display display-md mb-10 text-center">{membershipChapter.receiveLabel}</h3>
        </div>
        <PromiseCards cards={included.cards} />

        <div className="mx-auto mt-16 max-w-2xl border-t border-ink/12 pt-12 text-center">
          <h3 className="display display-md mb-6">{regular.heading}</h3>
          <p className="body-copy text-ink-soft">{regular.body}</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-[2px] bg-linen p-8 text-center shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:p-11">
          <p className="eyebrow mb-4 text-olive">{membershipChapter.heartEyebrow}</p>
          <h3 className="display display-md mb-6">{membershipChapter.heartHeading}</h3>
          <p className="eyebrow flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-ink-soft">
            {membershipChapter.heartFacts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </p>
        </div>

        {/* What is actually included in membership, kept apart from what is
            bookable on top at a member rate: the dossier's "members also
            enjoy" list ran both together under one "book first" line, which
            reads as though Community Mornings and the included Expert
            Insights sessions cost extra too (Vivien, 2026-09-18). These are
            the same two groups the Membership page already keeps distinct.
            The second group's "what each of these is" link to /experiences/
            is dropped here: this page keeps a reader on it until the one
            link at its close, rather than sending them off mid-read. */}
        <div className="mx-auto mt-12 max-w-2xl">
          <IncludedPanels
            groups={included.groups.map((group) => ({ label: group.label, items: group.items }))}
          />
        </div>

        <p className="body-copy mx-auto mt-12 max-w-2xl text-center text-ink-soft">
          {regular.note}
        </p>
      </Section>

      {/* ---------- Your membership ---------- */}
      <Section>
        <ChapterTitle>{pricing.heading}</ChapterTitle>

        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-olive">{pricing.eyebrow}</p>
          <p className="lede text-ink-soft">{pricing.lede}</p>
          <p className="body-copy mt-6 text-ink-soft">{pricing.intro}</p>
        </div>

        {/* The Narelo Price List 2026, laid out as the one-page PDF lays it
            out (Vivien, 2026-09-19): two tiers, two prices in a table, the
            fine print under it, then "Two ways to join" as two cards with
            the recommended one in forest, then three "Good to know" facts
            and the one-sentence "included in every membership". The
            12-month annual total is behind the PriceReveal tap; the
            3-month "equals N€ per month" is a comparison and stays in
            view. Every word is content/dossier.ts. */}
        <div className="mx-auto mt-14 max-w-3xl">
          <p className="eyebrow mb-5 text-olive">{pricing.tiersLabel}</p>
          <div className="flex flex-col gap-6">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.name}
                className="grid rounded-[2px] bg-linen shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:grid-cols-[1.1fr_1fr_1fr]"
              >
                <div className="p-7 md:p-8">
                  <h3 className="display display-md leading-snug">{tier.name}</h3>
                  <p className="body-copy mt-2 text-ink-soft">{tier.groups}</p>
                  <p className="body-copy mt-1 text-sm text-ink-soft">{tier.ages}</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-forest/[0.08] p-7 text-center md:p-8">
                  <p className="eyebrow text-olive">{pricing.columnMonthly}</p>
                  <p className="display display-md mt-3 text-olive">
                    {tier.monthly.perMonth}
                    <span className="body-copy text-ink-soft">{pricing.perMonthSuffix}</span>
                  </p>
                  <PriceReveal label={pricing.revealLabel}>{tier.monthly.perYear}</PriceReveal>
                </div>
                <div className="flex flex-col items-center justify-center bg-shell/70 p-7 text-center md:p-8">
                  <p className="eyebrow text-ink-soft">{pricing.columnSeason}</p>
                  <p className="display display-md mt-3 text-ink">
                    {tier.season.once}
                    <span className="body-copy text-ink-soft">{pricing.onceSuffix}</span>
                  </p>
                  <p className="body-copy mt-2 text-sm text-ink-soft">{tier.season.equals}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2">
            {pricing.finePrint.map((line) => (
              <p key={line} className="body-copy text-sm text-ink-soft">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <p className="eyebrow mb-5 text-olive">{pricing.joinLabel}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {pricing.joinOptions.map((option) => {
              const dark = !!option.recommended;
              return (
                <div
                  key={option.heading}
                  className={`rounded-[2px] p-7 md:p-8 ${
                    dark ? 'bg-forest text-linen' : 'bg-linen text-ink ring-1 ring-forest/15'
                  }`}
                >
                  <p className={`eyebrow ${dark ? 'text-linen/70' : 'text-ink-soft'}`}>{option.eyebrow}</p>
                  <h3 className="display display-md mt-2 leading-snug">{option.heading}</h3>
                  <p
                    className={`eyebrow mt-4 inline-block border px-3 py-1.5 ${
                      dark ? 'border-linen/40 text-linen/90' : 'border-olive/50 text-olive'
                    }`}
                  >
                    {option.tag}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {option.points.map((point) => (
                      <li key={point} className={`body-copy flex gap-3 text-sm ${dark ? 'text-linen/90' : 'text-ink-soft'}`}>
                        <span className={`mt-[0.6em] h-1 w-1 shrink-0 rounded-full ${dark ? 'bg-linen/70' : 'bg-olive'}`} aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <p className="eyebrow mb-5 text-olive">{pricing.goodToKnowLabel}</p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {pricing.goodToKnow.map((fact) => (
              <li key={fact.title} className="flex flex-col items-center rounded-[2px] bg-linen p-6 text-center ring-1 ring-forest/15">
                <span className="display display-md text-olive">{fact.value}</span>
                <p className="body-copy mt-2 text-ink">{fact.title}</p>
                <p className="body-copy mt-1 text-sm text-ink-soft">{fact.label}</p>
              </li>
            ))}
          </ul>
          <p className="body-copy mt-8 text-sm text-ink-soft">{pricing.includedNote}</p>
        </div>
      </Section>

      {/* ---------- Reserve your family's place ---------- */}
      <Section bg="bg-shell" className="text-center">
        <div className="mx-auto max-w-xl">
          <p className="eyebrow mb-6 text-olive">{reserve.eyebrow}</p>
          <h2 className="display display-lg mb-8">{reserve.heading}</h2>
          <p className="lede mb-10 text-ink-soft">{reserve.body}</p>

          <ol className="mx-auto mb-12 flex max-w-sm flex-col gap-4 text-left">
            {reserve.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${i === reserve.steps.length - 1 ? 'bg-olive' : 'bg-olive/45'}`}
                  aria-hidden="true"
                />
                <span className="body-copy text-ink">{step}</span>
              </li>
            ))}
          </ol>

          <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-solid">
            {reserve.ctaLabel}
          </a>

          <div className="mx-auto mt-10 flex max-w-sm flex-col gap-4">
            {instagram?.href && (
              <a
                href={instagram.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-3 rounded-full border border-ink/15 px-6 py-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={instagram.src} alt="" width={40} height={40} className="h-5 w-5" />
                <span className="body-copy text-ink">{reserve.instagramLabel}</span>
              </a>
            )}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-3 rounded-full border border-ink/15 px-6 py-4"
            >
              <WhatsAppIcon className="h-5 w-5 text-ink" />
              <span className="body-copy text-ink">WhatsApp · {contact.phone}</span>
            </a>
          </div>

          {/* The one way off this page back to the rest of the site, placed
              only here at the very end: a quiet line, not a button, so
              nothing along the way pulls a reader off the guide before they
              have read it (Vivien, 2026-09-18). */}
          <p className="body-copy mt-14 text-ink-soft">
            <Link href="/" className="link-line text-ink">
              Visit the Narelo website
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
