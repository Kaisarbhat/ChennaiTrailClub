import { notFound } from "next/navigation";
import { UpcomingEvents } from "@/components";

export const metadata = {
  title: "Upcoming Events | Chennai Trail Club",
  description: "Browse and register for our upcoming events",
  openGraph: {
    title: "Upcoming Events | Chennai Trail Club",
    description: "Browse and register for our upcoming events",
    type: "website",
  },
};

async function fetchData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/upcomingevents`,
      {
        next: {
          revalidate: 3600,
          tags: ["upcomingevents"],
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch events: ${res.status}`);
    }

    const upcomingEvents = await res.json();
    return upcomingEvents;
  } catch (error) {
    notFound();
  }
}

export default async function UpcomingEventsServer() {
  const upcomingEvents = await fetchData();

  return (
    <main>
      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </main>
  );
}
