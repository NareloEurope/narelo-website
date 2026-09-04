import type { Metadata } from 'next';
import EventsPage from '@/components/pages/EventsPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', '/events/');

export default function Page() {
  return <EventsPage lang="en" />;
}
