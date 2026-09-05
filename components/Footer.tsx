'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from '@/components/LanguageSelector';
import { content } from '@/content/dictionary';
import { langFromPath, localePath } from '@/content/locales';

export default function Footer() {
  /* Same as the header: the language comes from the URL, not a prop. */
  const pathname = usePathname();
  const lang = langFromPath(pathname);
  const { site, nav, contact, socialIcons, footerCta, ui } = content(lang).site;
  const t = (path: string) => localePath(lang, path);

  return (
    <footer className="bg-forest text-linen">
      <div className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-24">
        <div className="fade" data-reveal>
          <p className="display display-lg max-w-3xl">{footerCta.heading}</p>
          <p className="lede mt-6 max-w-xl text-linen/85">{footerCta.subheading}</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-linen/15 pt-12 md:grid-cols-[1.6fr_1fr]">
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
            <p className="body-copy mt-6 max-w-xs text-linen/80">{footerCta.blurb}</p>
          </div>

          <div>
            <h2 className="eyebrow mb-5 text-linen/80">{ui.footerContact}</h2>
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
              <li className="body-copy text-linen/80">{site.location}</li>
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

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <p className="body-copy text-xs text-linen/80">{site.copyright}</p>
          {/* Second, quieter place to change language, for anyone who has
              scrolled past the header. */}
          <LanguageSelector current={lang} pathname={pathname} light onDark />
        </div>
      </div>
    </footer>
  );
}
