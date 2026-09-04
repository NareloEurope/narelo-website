import PromiseIcon from '@/components/PromiseIcons';

type Card = { readonly title: string; readonly meta?: string; readonly body: string };

/**
 * The dossier's three cards: a ringed mark, the title, its small line, a
 * hairline, then the paragraph. Forest green on whatever ground the section
 * gives them, with a soft shadow so they lift off it.
 *
 * One component so the style is defined once (Vivien, 2026-09-04). It used to
 * be written inline on the home page while the Membership page said the same
 * three things as accordion rows, which is how the two drifted apart.
 */
export default function PromiseCards({ cards }: { cards: readonly Card[] }) {
  return (
    <ul className="reveal grid gap-6 md:grid-cols-3" data-reveal>
      {cards.map((card, i) => (
        <li
          key={card.title}
          className="flex flex-col rounded-[2px] bg-forest p-9 text-linen shadow-[0_18px_40px_-24px_rgba(43,32,24,0.5)]"
        >
          <PromiseIcon index={i} className="mb-8 h-14 w-14 text-linen/70" />
          <h3 className="display text-2xl leading-snug">{card.title}</h3>
          {card.meta && <p className="eyebrow mt-3 text-linen/60">{card.meta}</p>}
          <div className="mt-5 h-px w-12 bg-linen/30" aria-hidden="true" />
          <p className="body-copy mt-5 text-linen/85">{card.body}</p>
        </li>
      ))}
    </ul>
  );
}
