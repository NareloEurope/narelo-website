import Section from '@/components/Section';
import PromiseCards from '@/components/PromiseCards';
import IncludedPanels from '@/components/IncludedPanels';
import DossierJourney from '@/components/DossierJourney';
import PriceReveal from '@/components/PriceReveal';
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
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* The file in public/images is a deliberately dark, underexposed
              grade of this photo; the dossier PDF's own cover uses a
              distinctly brighter, warmer grade of the same shot that does
              not exist as its own asset here (Vivien, 2026-09-19). Lifted
              with a filter on the image itself, since a lighter overlay
              alone (the previous pass) cannot brighten shadow detail the
              source file does not have without also washing out the sun. */}
          <img
            src={hero.image}
            alt=""
            width={1536}
            height={2048}
            className="h-full w-full object-cover [filter:brightness(1.5)_contrast(0.88)_saturate(1.1)]"
          />
        </div>
        {/* Lighter than the site's usual dark-hero overlay (Vivien,
            2026-09-19): this page carries no header competing for contrast
            over the photo, and the dossier's own cover reads as the bright
            sunset itself, not a photo dimmed for a menu bar. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/35 via-ink/5 to-ink/10" aria-hidden="true" />

        <div className="is-in mx-auto w-full max-w-2xl px-6 py-24 text-center md:px-10">
          <p className="eyebrow mb-8 text-linen/80">{hero.eyebrow}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/narelo-logo.webp"
            alt="Narelo"
            width={796}
            height={341}
            className="mx-auto h-16 w-auto opacity-95 [filter:invert(1)_brightness(2)] md:h-20"
          />
          <div className="mx-auto mt-8 h-px w-16 bg-linen/40" aria-hidden="true" />
          <p className="eyebrow mt-8 text-linen/90">{whatItIs.heading}</p>
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

        <DossierJourney stages={stages.stageDetails} whatToExpectLabel={ui.whatToExpect} />

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
          <p className="body-copy mt-6 text-ink-soft">{pricing.seasonNote}</p>
        </div>

        {/* Per-month first, for every way to pay, so the figure a family
            actually weighs is never a five-figure lump sum. The real total
            is a tap away behind PriceReveal, the way an app's yearly plan is
            sold by its monthly-equivalent price (Vivien, 2026-09-18): still
            the true figure, just not the first thing on the screen.

            Four tiers per stage, standard termly down to founding yearly,
            each one cheaper than the last. Colour, not just a border, now
            carries that (Vivien, 2026-09-19: the tiers were reading as one
            flat list, nothing pulling the eye anywhere): the two standard
            rows stay plain, a founding row warms to olive, and the best
            rate is its own solid forest block, the same weight PromiseCards
            gives "what a family actually receives" elsewhere on this page.
            The sequence of colour is what should read as "better and
            better", not a banner. */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[2px] bg-linen p-7 shadow-[0_18px_40px_-30px_rgba(43,32,24,0.45)] ring-1 ring-forest/15 md:p-9"
            >
              <h3 className="display display-md leading-snug">
                {plan.name} <span className="body-copy text-ink-soft">({plan.age})</span>
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {plan.tiers.map((tier) => {
                  const founding = tier.label.includes('Founding');
                  return (
                    <div
                      key={tier.label}
                      className={`flex flex-col items-center gap-1 rounded-[2px] py-5 text-center ${
                        tier.best ? 'bg-forest py-7 text-linen' : founding ? 'bg-olive/25' : 'bg-shell/60'
                      }`}
                    >
                      <p className={`eyebrow ${tier.best ? 'text-linen/70' : founding ? 'text-olive' : 'text-ink-soft'}`}>
                        {tier.label}
                      </p>
                      {tier.best && <p className="body-copy text-linen/90">{pricing.bestLabel}</p>}
                      <p className={`display display-md ${tier.best ? 'text-linen' : founding ? 'text-olive' : 'text-ink'}`}>
                        {tier.perMonth}
                        <span className={`body-copy ${tier.best ? 'text-linen/70' : 'text-ink-soft'}`}>{pricing.perMonthSuffix}</span>
                      </p>
                      <PriceReveal label={pricing.revealLabel} light={tier.best}>
                        {tier.totalBefore && <span className="mr-2 line-through">{tier.totalBefore}</span>}
                        {tier.totalAfter}
                      </PriceReveal>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="body-copy mx-auto mt-10 max-w-2xl text-center text-ink-soft">
          {pricing.joiningFee}
        </p>

        <ul className="mx-auto mt-14 flex max-w-2xl flex-col gap-8 border-t border-ink/12 pt-14 sm:flex-row sm:justify-between">
          {pricing.discounts.map((d) => (
            <li key={d.label} className="flex flex-1 flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-olive/45 text-olive">
                <span className="eyebrow !tracking-normal">{d.value}</span>
              </span>
              <p className="body-copy mt-4 max-w-[16rem] text-ink-soft">{d.label}</p>
            </li>
          ))}
        </ul>
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
