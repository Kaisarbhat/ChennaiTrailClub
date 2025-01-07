import { EventClient } from '@/components';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Events - Chennai Trail Club',
  description: 'Check the Events hosted by Chennai Trail Club ',
  openGraph: {
    title: 'Events - Chennai Trail Club ',
    description: 'Check the Events hosted by Chennai Trail Club ',
    type: 'website',
  },
};

async function fetchEventData(eventId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/event/${eventId}`,
      {
        next: { revalidate: 3600, tags: ['event'] },
      }
    );
    if (res.ok) {
      const data = await res.json();
      return {
        eventData: data,
      };
    }
    return {};
  } catch (error) {
    notFound();
  }
}
export default async function DynamicEvent({ params }) {
  const eventId = params.eventId;
  const { eventData } = await fetchEventData(eventId);

  return (
    <main>
      <EventClient eventData={eventData} />;
    </main>
  );
}
