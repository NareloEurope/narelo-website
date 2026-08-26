/**
 * Full-bleed autoplaying background video with an overlay, as used on the
 * hero and the closing bands of several pages.
 *
 * `align="end"` anchors the content to the bottom of the band, which is how
 * the home hero is laid out on the source.
 */
import LazyVideo from './LazyVideo';

export default function VideoBand({
  src,
  poster,
  children,
  className = '',
  overlay = 'bg-black/25',
  minHeight = 'min-h-[70vh]',
  align = 'center',
}: {
  src: string;
  poster: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: string;
  minHeight?: string;
  align?: 'center' | 'end';
}) {
  return (
    <section
      className={`relative isolate flex overflow-hidden ${
        align === 'end' ? 'items-end' : 'items-center justify-center'
      } ${minHeight} ${className}`}
    >
      <LazyVideo src={src} poster={poster} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className={`absolute inset-0 -z-10 ${overlay}`} aria-hidden="true" />
      {children}
    </section>
  );
}
