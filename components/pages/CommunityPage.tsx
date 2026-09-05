import Link from 'next/link';
import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import { content } from '@/content/dictionary';
import { localePath, type Lang } from '@/content/locales';


export default function CommunityPage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { hero, testimonials, gallery, belong, events, journalTeaser } = c.community;
  const t = (path: string) => localePath(lang, path);
  return (
    <>
      {/* Hero — copy set low and left over the image. */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden md:min-h-[640px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt="" width={1200} height={1600} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/15" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <h1 className="display text-[clamp(1.9rem,1.3rem+2.4vw,3rem)] leading-tight text-linen">
            {hero.headingLine1}
            <span className="block italic">{hero.headingLine2}</span>
          </h1>
        </div>
      </section>

      {/* Three staggered testimonials */}
      <Section>
        <Testimonials items={testimonials} />
      </Section>

      {/* Gallery — three at a time */}
      <Section>
        <Gallery items={gallery} alt={c.site.ui.galleryAlt} />
      </Section>

      {/* A place to belong */}
      <Section bg="bg-shell" className="text-center">
        <div className="reveal mx-auto max-w-xl">
          {/* Small branch ornament above the heading, as on the source. */}
          <svg
            viewBox="0 0 60 16"
            className="mx-auto mb-5 h-4 w-14 text-forest"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <path d="M2 14 C 18 14, 40 10, 58 3" />
            <path d="M14 12 C 16 8, 20 6, 24 6 C 22 10, 18 12, 14 12 Z" fill="currentColor" stroke="none" />
            <path d="M26 10 C 28 6, 32 4, 36 4 C 34 8, 30 10, 26 10 Z" fill="currentColor" stroke="none" />
            <path d="M38 8 C 40 4, 44 2, 48 2 C 46 6, 42 8, 38 8 Z" fill="currentColor" stroke="none" />
          </svg>
          <h2 className="display mb-5 text-[clamp(1.5rem,1.1rem+1.7vw,2.25rem)]">{belong.heading}</h2>
          <p className="body-copy mx-auto max-w-sm text-sm italic text-ink-soft">{belong.body}</p>
        </div>
      </Section>

      {/* Events — left aligned, text link, empty state box */}
      <Section>
        <div className="reveal max-w-md">
          <h2 className="display mb-5 text-[clamp(1.6rem,1.2rem+1.8vw,2.4rem)]">{events.heading}</h2>
          <p className="body-copy mb-8 text-sm italic text-ink-soft">{events.body}</p>
          <Link href={events.ctaHref} className="eyebrow border-b border-ink/40 pb-1 text-ink transition-colors hover:text-olive">
            {events.ctaLabel}
          </Link>
        </div>
        {/* No events are published on the source site; same empty state, in English. */}
        <div className="reveal mt-14 bg-shell px-6 py-8 text-center">
          <p className="body-copy text-sm font-semibold text-ink">{events.emptyState}</p>
        </div>
      </Section>

      {/* Journal teaser — video left, copy right */}
      <section className="grid items-stretch bg-shell md:grid-cols-[1fr_1.2fr]">
        <LazyVideo src={events.video} poster={events.poster} className="h-[260px] w-full object-cover md:h-full md:min-h-[400px]" />
        <div className="flex items-center px-6 py-16 md:px-12">
          <div className="max-w-sm">
            <h2 className="display mb-5 text-[clamp(1.6rem,1.2rem+1.8vw,2.4rem)]">{journalTeaser.heading}</h2>
            <p className="body-copy mb-8 text-sm italic text-ink-soft">{journalTeaser.body}</p>
            <Link
              href={journalTeaser.ctaHref}
              className="eyebrow inline-block rounded-full border border-ink/40 px-8 py-3.5 !tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-linen"
            >
              {journalTeaser.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
