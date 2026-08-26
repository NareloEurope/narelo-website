type Testimonial = { readonly quote: string; readonly attribution: string };

/**
 * The source shows all three quotes at once, staggered horizontally down the
 * section — it is not a carousel. Indents below approximate the source's
 * absolute placement.
 */
const INDENT = ['md:ml-[36%]', 'md:ml-[8%]', 'md:ml-[40%]'];

export default function Testimonials({ items }: { items: readonly Testimonial[] }) {
  return (
    <ul className="flex flex-col gap-16 md:gap-20">
      {items.map((item, i) => (
        <li key={item.attribution} className={`reveal max-w-md ${INDENT[i] ?? ''}`}>
          <blockquote className="display mb-3 text-[clamp(1.05rem,0.95rem+0.5vw,1.4rem)] italic leading-snug">
            {item.quote}
          </blockquote>
          <p className="eyebrow text-warm-grey">{item.attribution}</p>
        </li>
      ))}
    </ul>
  );
}
