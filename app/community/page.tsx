import type { Metadata } from 'next';
import CommunityPage from '@/components/pages/CommunityPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/community/');

export default function Page() {
  return <CommunityPage lang="en" />;
}
