/** Page section with the site's max width and generous editorial rhythm. */
export default function Section({
  children,
  className = '',
  bg = '',
  id,
  wide = false,
  tightBottom = false,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
  wide?: boolean;
  /**
   * Cuts the bottom padding to a bit under half. For a section whose last
   * element already ends in whitespace of its own, where the full rhythm on
   * both sides of the join reads as a hole rather than a breath.
   */
  tightBottom?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 pt-[var(--spacing-section)] md:px-10 ${
        tightBottom ? 'pb-[calc(var(--spacing-section)*0.4)]' : 'pb-[var(--spacing-section)]'
      } ${bg}`}
    >
      <div className={`mx-auto ${wide ? 'max-w-[1560px]' : 'max-w-[1280px]'} ${className}`}>{children}</div>
    </section>
  );
}
