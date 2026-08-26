import Link from 'next/link';
import { site, socialIcons } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-sage/10 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12">
        {/* Source layout: wordmark left, social icons right, then the two text lines. */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link href="/" aria-label={`${site.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/narelo-logo.webp" alt={site.name} width={796} height={341} loading="lazy" className="h-9 w-auto" />
          </Link>

          {/* Four social icons, ~55px, as on the source. None are linked there. */}
          <ul className="flex items-center gap-5 md:gap-6">
          {socialIcons.map((icon) => (
            <li key={icon.label}>
              {icon.href ? (
                <a href={icon.href} target="_blank" rel="noreferrer noopener" aria-label={icon.label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon.src} alt={icon.label} width={1254} height={1254} loading="lazy" className="h-9 w-9 transition-opacity hover:opacity-70 md:h-10 md:w-10" />
                </a>
              ) : (
                // TODO: no destination on the source site — add href in content/site.ts.
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={icon.src} alt={icon.label} width={1254} height={1254} loading="lazy" className="h-9 w-9 md:h-10 md:w-10" />
              )}
              </li>
            ))}
          </ul>
        </div>

        <div className="body-copy mt-10 flex flex-col items-center gap-2 text-sm text-warm-grey md:mt-14 md:flex-row md:justify-between">
          <span>{site.location}</span>
          <span>{site.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
