import type { Metadata } from 'next';
import ExperiencesPage from '@/components/pages/ExperiencesPage';
import { pageMetadata } from '@/lib/metadata';
import { PREFIXED_LANGS, type Lang } from '@/content/locales';

/** Only the two prefixed languages are built here; English lives at the root. */
export function generateStaticParams() {
  return PREFIXED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata(lang, '/experiences/');
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <ExperiencesPage lang={lang} />;
}
