import {
  FeaturesServer,
  HeroServer,
  RecentActivitiesServer,
} from "@/components";

export async function generateMetadata() {
  return {
    title: `Home - Chennai Trail Club`,
    description: "Chennai Trail Club Home Page",
  };
}

export default async function Home() {
  return (
    <>
      <HeroServer />
      <FeaturesServer />
      <RecentActivitiesServer />
    </>
  );
}
