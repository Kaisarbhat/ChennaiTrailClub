import { PastEventsClient } from '@/components';

export const metadata = {
  title: 'Past Events - Chennai Trail Club',
  description: 'Check our Past Events ',
  openGraph: {
    title: 'Upcoming Events - Chennai Trail Club ',
    description: 'Check our Past Events ',
    type: 'website',
  },
};

async function fetchData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/pastevents`,
      {
        next: { revalidate: 3600, tags: ['pastevents'] },
      }
    );
    if (res.ok) {
      const events = await res.json();
      const years = events
        .map((event) => new Date(event?.date).getFullYear().toString())
        .filter((year, index, self) => self.indexOf(year) === index)
        .sort((a, b) => b - a);
      return {
        pastEvents: events,
        years,
      };
    }
    return {};
  } catch (error) {
    throw error;
  }
}
export default async function PastEvents() {
  const { pastEvents, years } = await fetchData();
  return (
    <main>
      <PastEventsClient pastEvents={pastEvents} years={years} />;
    </main>
  );
}
