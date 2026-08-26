import Link from 'next/link';
import Section from '@/components/Section';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <Section className="min-h-[55vh] max-w-2xl text-center">
      <h1 className="display mb-6 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)]">Page not found</h1>
      <p className="body-copy mb-10 text-warm-grey">The page you were looking for isn’t here.</p>
      <Link href="/" className="eyebrow rounded-full bg-forest px-8 py-4 !tracking-[0.12em] text-cream">
        Back to home
      </Link>
    </Section>
  );
}
