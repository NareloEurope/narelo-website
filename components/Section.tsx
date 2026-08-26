/** Page section with the site's max width and generous editorial rhythm. */
export default function Section({
  children,
  className = '',
  bg = '',
  id,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
  wide?: boolean;
}) {
  return (
    <section id={id} className={`px-6 py-[var(--spacing-section)] md:px-10 ${bg}`}>
      <div className={`mx-auto ${wide ? 'max-w-[1560px]' : 'max-w-[1280px]'} ${className}`}>{children}</div>
    </section>
  );
}
