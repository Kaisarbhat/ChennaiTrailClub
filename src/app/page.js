import {
  FeaturesServer,
  HeroServer,
  RecentActivitiesServer,
} from "@/components";

export default async function Home() {
  return (
    <>
      <HeroServer />
      <FeaturesServer />
      <RecentActivitiesServer />
    </>
  );
}
