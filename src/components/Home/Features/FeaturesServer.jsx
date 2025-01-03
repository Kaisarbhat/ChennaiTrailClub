import { Features } from "@/components";

async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/adminservices/ourfeatures`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      console.error("Failed to fetch features");
      return;
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function FeaturesServer() {
  const features = await getData();
  return <Features features={features} />;
}
