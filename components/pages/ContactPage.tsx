import Section from '@/components/Section';
import LazyVideo from '@/components/LazyVideo';
import ContactForm from '@/components/ContactForm';
import { content } from '@/content/dictionary';
import { localePath, type Lang } from '@/content/locales';


export default function ContactPage({ lang }: { lang: Lang }) {
  const c = content(lang);
  const { contactPage } = c.pages;
  const { contact } = c.site;
  const t = (path: string) => localePath(lang, path);
  return (
    <>
      {/* Hero — copy left, dark type over a light image. */}
      <section className="relative isolate flex min-h-[320px] items-center overflow-hidden md:min-h-[420px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={contactPage.image} alt="" width={1536} height={1024} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <h1 className="display mb-6 max-w-lg text-[clamp(1.8rem,1.3rem+2.2vw,2.9rem)] text-ink">{contactPage.heading}</h1>
          <p className="body-copy max-w-md text-sm text-ink-soft">{contactPage.sub}</p>
        </div>
      </section>

      {/* Details */}
      <Section>
        <ul className="grid gap-12 text-center sm:grid-cols-3">
          <li className="reveal">
            <h2 className="eyebrow mb-5 text-ink">{contact.visitLabel}</h2>
            <p className="display text-lg leading-relaxed">
              {contact.visitName}
              <span className="block">{contact.visitNote}</span>
            </p>
          </li>
          <li className="reveal">
            <h2 className="eyebrow mb-5 text-ink">{contact.emailLabel}</h2>
            {/* Plain text on the source; linked here so it is actionable. */}
            <a href={contact.emailHref} className="display text-lg transition-colors hover:text-olive">
              {contact.email}
            </a>
          </li>
          <li className="reveal">
            <h2 className="eyebrow mb-5 text-ink">{contact.phoneLabel}</h2>
            <a href={contact.phoneHref} className="display text-lg transition-colors hover:text-olive">
              {contact.phone}
            </a>
          </li>
        </ul>
      </Section>

      {/* Form left, video right */}
      <section className="grid items-stretch md:grid-cols-2">
        <div className="flex items-center px-6 py-16 md:px-12 md:py-20">
          <div className="w-full max-w-md">
            <h2 className="display mb-10 text-[clamp(1.4rem,1.1rem+1.3vw,1.9rem)]">{contactPage.formHeading}</h2>
            <ContactForm />
          </div>
        </div>
        <LazyVideo src={contactPage.video} poster={contactPage.poster} className="order-first h-[240px] w-full object-cover md:order-none md:h-full md:min-h-[540px]" />
      </section>
    </>
  );
}
