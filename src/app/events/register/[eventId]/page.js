import { RegisterClient } from '@/components';
import axios from 'axios';

export const metadata = {
  title: 'Registration for Events - Chennai Trail Club',
  description: 'Regsiter for upcoming events ',
  openGraph: {
    title: 'Registration for Events - Chennai Trail Club',
    description: 'Regsiter for upcoming events ',
    type: 'website',
  },
};

async function fetchData(eventId) {
  try {
    const [keyRes, eventDataRes] = await Promise.all(
      [
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/payment`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/event/${eventId}`),
      ],
      { next: { revalidate: 3600, tags: ['registration-cache'] } }
    );
    if (keyRes.status === 200 && eventDataRes.status === 200) {
      return {
        key: keyRes.data,
        eventData: eventDataRes.data,
      };
    }
    return {};
  } catch (error) {
    throw error;
  }
}

export default async function EventRegistrationServer({ params }) {
  const eventId = params.eventId;
  const { key, eventData } = await fetchData(eventId);
  return (
    <main>
      <RegisterClient key={key} eventData={eventData} eventId={eventId} />
    </main>
  );
}
