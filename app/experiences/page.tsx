import type { Metadata } from 'next';
import ExperiencesPage from '@/components/pages/ExperiencesPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/experiences/');

export default function Page() {
  return <ExperiencesPage lang="en" />;
}
