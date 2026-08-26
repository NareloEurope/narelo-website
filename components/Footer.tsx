import Link from 'next/link';
import { site, nav, contact, socialIcons } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-forest text-linen">
      <div className="mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-32">
        <div className="fade" data-reveal>
          <p className="display display-lg max-w-3xl">
            Our first Narelo home opens in Marbella this autumn.
          </p>
          <Link href="/membership" className="btn btn-ghost mt-10 text-linen">
            Become a member
          </Link>
        </div>

        <div className="mt-24 grid gap-12 border-t border-linen/15 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/narelo-logo.webp"
              alt={site.name}
              width={796}
              height={341}
              loading="lazy"
              className="h-8 w-auto opacity-90 [filter:invert(1)_brightness(2)]"
            />
            <p className="body-copy mt-6 max-w-xs text-linen/70">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow mb-5 text-linen/70">Explore</h2>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="body-copy text-linen/85 transition-opacity hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5 text-linen/70">Contact</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={contact.emailHref} className="body-copy text-linen/85 transition-opacity hover:opacity-60">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="body-copy text-linen/85 transition-opacity hover:opacity-60">
                  {contact.phone}
                </a>
              </li>
              <li className="body-copy text-linen/60">{site.location}</li>
            </ul>

            <ul className="mt-8 flex items-center gap-4">
              {socialIcons.map((icon) => (
                <li key={icon.label}>
                  {icon.href ? (
                    <a
                      href={icon.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={icon.label}
                      className="block transition-opacity hover:opacity-60"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={icon.src}
                        alt=""
                        width={1254}
                        height={1254}
                        loading="lazy"
                        className="h-8 w-8 [filter:invert(1)_brightness(2)]"
                      />
                    </a>
                  ) : (
                    // TODO: no URL yet — add one in content/site.ts to make this live.
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={icon.src}
                      alt={icon.label}
                      width={1254}
                      height={1254}
                      loading="lazy"
                      className="h-8 w-8 opacity-40 [filter:invert(1)_brightness(2)]"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="body-copy mt-16 text-xs text-linen/65">{site.copyright}</p>
      </div>
    </footer>
  );
}
