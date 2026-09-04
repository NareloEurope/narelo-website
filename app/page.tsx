import type { Metadata } from 'next';
import HomePage from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/');

export default function Page() {
  return <HomePage lang="en" />;
}
