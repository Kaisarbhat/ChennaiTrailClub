import { dateOptions } from "@/utils/constants";
import { HeroClient } from "@/components";
async function getData() {
  try {
    const [recentEventRes, heroImageRes] = await Promise.all(
      [
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/recentevent`),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/adminservices/heroimage`),
      ],
      {
        next: { revalidate: 3600 },
      }
    );

    if (recentEventRes.ok && heroImageRes.ok) {
      const [recentEvent, heroImage] = await Promise.all([
        recentEventRes.json(),
        heroImageRes.json(),
      ]);
      return {
        recentEvent: recentEvent,
        heroImage: heroImage,
      };
    }
    return {};
  } catch (error) {
    console.error("Server error Failed to fetch data : ", error);
    return {};
  }
}

export default async function HeroServer() {
  const { recentEvent, heroImage } = await getData();
  const date = new Date(recentEvent?.date);
  const formattedDate = date.toLocaleDateString("en-Us", dateOptions);
  return (
    <HeroClient
      recentEvent={recentEvent}
      heroImage={heroImage}
      formattedDate={formattedDate}
    />
  );
}
