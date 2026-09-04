import type { Metadata } from 'next';
import MembershipPage from '@/components/pages/MembershipPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/membership/');

export default function Page() {
  return <MembershipPage lang="en" />;
}
