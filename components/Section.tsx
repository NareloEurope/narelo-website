/** Standard page section with the site's max width and rhythm. */
export default function Section({
  children,
  className = '',
  bg = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:px-12 md:py-28 ${bg}`}>
      <div className={`mx-auto max-w-[1400px] ${className}`}>{children}</div>
    </section>
  );
}
