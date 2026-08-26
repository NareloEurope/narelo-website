import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import { site } from '@/content/site';
import './globals.css';

/** Display face. Kept from the original brand — it was the one thing Wix got right. */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

/** Geometric sans for labels, navigation and body — quiet next to the serif. */
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  // TODO: set NEXT_PUBLIC_SITE_URL to the production domain once chosen.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://narelo.es'),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s | ${site.name}` },
  applicationName: site.name,
  openGraph: { siteName: site.name, type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary_large_image' },
  /*
   * Search engines are kept out by default so the pre-launch preview cannot
   * be indexed on its vercel.app URL and compete with the real domain later.
   * At launch, set NEXT_PUBLIC_ALLOW_INDEXING=true in the host's environment
   * (no code change needed).
   */
  robots:
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-linen"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
