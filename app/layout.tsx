import type { Metadata } from 'next';
import { Cormorant_Garamond, Nunito_Sans, Fraunces } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { site } from '@/content/site';
import './globals.css';

/**
 * Display face on the source. Cormorant Garamond Light is free on Google Fonts,
 * so this is a like-for-like match rather than a substitute.
 */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
});

/**
 * Stands in for Avenir LT W01 35 Light, which is licensed to Wix and cannot be
 * self-hosted. Approved substitute — see MIGRATION-AUDIT.md §3.
 */
const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600'],
  variable: '--font-nunito',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  // TODO: set NEXT_PUBLIC_SITE_URL to the production domain once it is chosen.
  // Needed so og:image resolves to an absolute URL.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://narelo.es'),
  title: { default: `Home | ${site.name}`, template: `%s | ${site.name}` },
  applicationName: site.name,
  openGraph: { siteName: site.name, type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary_large_image' },
  // TODO: no favicon existed on the Wix site — add one to app/ when brand assets land.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Wix served lang="es" on every page despite English copy — corrected here.
    <html lang={site.locale} className={`${cormorant.variable} ${nunito.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
