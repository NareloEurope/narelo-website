import type { Metadata } from 'next';
import MembershipPage from '@/components/pages/MembershipPage';
import { pageMetadata } from '@/lib/metadata';
import { PREFIXED_LANGS, type Lang } from '@/content/locales';

/** Only the two prefixed languages are built here; English lives at the root. */
export function generateStaticParams() {
  return PREFIXED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata(lang, '/membership/');
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return <MembershipPage lang={lang} />;
}
