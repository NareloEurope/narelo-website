import type { Metadata } from 'next';
import JournalPage from '@/components/pages/JournalPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/journal/');

export default function Page() {
  return <JournalPage lang="en" />;
}
