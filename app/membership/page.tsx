import Section from '@/components/Section';
import VideoBand from '@/components/VideoBand';
import { hero, eyebrowBand, becomes, statement, benefits, tiers, beachBand, closing } from '@/content/membership';

export const metadata = {
  title: 'Membership',
  description: hero.sub,
  openGraph: { title: 'Membership | Narelo', description: hero.sub, images: ['/images/membership-hero.webp'] },
};

/**
 * The source staggers these four as a checkerboard: columns 1 and 3 lead with
 * text, columns 2 and 4 lead with the image.
 */
const ZIGZAG = [
  { item: 0, image: 0, textFirst: true },
  { item: 1, image: 1, textFirst: false },
  { item: 2, image: 2, textFirst: true },
  { item: 3, image: 3, textFirst: false },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero — full-bleed image, copy set right and right-aligned in dark type. */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden md:min-h-[706px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt="" width={1672} height={941} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <div className="ml-auto max-w-md text-right">
            <h1 className="display mb-6 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] text-sage">{hero.heading}</h1>
            <p className="body-copy ml-auto max-w-xs text-warm-grey">{hero.sub}</p>
          </div>
        </div>
      </section>

      {/* Eyebrow band */}
      <Section className="text-center">
        <div className="reveal">
          <h2 className="display mb-5 text-[clamp(1.5rem,1rem+2vw,2.5rem)] uppercase">{eyebrowBand.heading}</h2>
          <p className="eyebrow text-warm-grey">{eyebrowBand.line}</p>
        </div>
      </Section>

      {/* Four "becomes" — 4-column zigzag of text and image cells */}
      <Section>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {ZIGZAG.map(({ item, image, textFirst }) => (
            <li key={becomes.items[item].name} className="reveal flex flex-col gap-6">
              {!textFirst && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={becomes.images[image]}
                  alt=""
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="order-1 w-full rounded-sm object-cover lg:order-none"
                  style={{ aspectRatio: '4 / 3' }}
                />
              )}
              <div>
                <h3 className="display mb-3 text-lg leading-snug md:text-xl">{becomes.items[item].name}</h3>
                <span className="mb-4 block h-px w-10 bg-sage/30" aria-hidden="true" />
                <p className="body-copy text-sm text-warm-grey">{becomes.items[item].body}</p>
              </div>
              {textFirst && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={becomes.images[image]}
                  alt=""
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="w-full rounded-sm object-cover"
                  style={{ aspectRatio: '4 / 3' }}
                />
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Solid sage band (no content on the source) */}
      <div className="h-[240px] bg-sage-light md:h-[450px]" aria-hidden="true" />

      {/* Benefits — heading, italic statement, then six divided columns */}
      <Section>
        <div className="reveal mb-16 text-center">
          <h2 className="display mb-6 text-[clamp(1.75rem,1.2rem+2.2vw,2.6rem)]">{benefits.heading}</h2>
          <p className="body-copy mx-auto max-w-md text-sm italic text-warm-grey">{statement.heading}</p>
        </div>

        <ul className="reveal grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {benefits.items.map((item, i) => (
            <li
              key={item.name}
              className={`px-4 text-center md:px-6 ${i > 0 ? 'border-l border-sage/15' : ''} ${
                i % 2 === 0 ? 'max-sm:border-l-0' : ''
              }`}
            >
              <h3 className="display mb-4 text-base leading-snug md:text-lg">{item.name}</h3>
              <p className="body-copy text-xs text-warm-grey md:text-sm">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Standalone beach image band */}
      <div className="h-[180px] overflow-hidden md:h-[274px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={beachBand} alt="" width={1855} height={848} loading="lazy" className="h-full w-full object-cover" />
      </div>

      {/* Tiers — four plain columns on the lighter cream */}
      <Section bg="bg-cream-light">
        <div className="reveal mb-16 text-center">
          <h2 className="display mb-5 text-[clamp(1.5rem,1.1rem+1.7vw,2.25rem)]">{tiers.heading}</h2>
          <p className="body-copy mx-auto max-w-sm text-sm italic text-warm-grey">{tiers.intro}</p>
        </div>
        {/* The source shows no prices and attaches no links here — see audit §7E #21. */}
        <ul className="reveal grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.items.map((tier) => (
            <li key={tier.name}>
              <h3 className="display mb-4 text-lg tracking-[0.02em]">{tier.name}</h3>
              <p className="body-copy max-w-[14rem] text-sm text-warm-grey">{tier.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Closing */}
      <VideoBand src={closing.video} poster={closing.poster} minHeight="min-h-[420px] md:min-h-[502px]" overlay="bg-black/25">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 text-center md:px-12">
          <h2 className="display text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] text-cream">{closing.heading}</h2>
        </div>
      </VideoBand>
    </>
  );
}
