import type { Metadata } from 'next';
import LegalPage from '@/components/pages/LegalPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/legal/');

export default function Page() {
  return <LegalPage lang="en" />;
}
