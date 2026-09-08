import type { Metadata } from 'next';
import WhoWeArePage from '@/components/pages/WhoWeArePage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/who-we-are/');

export default function Page() {
  return <WhoWeArePage lang="en" />;
}
