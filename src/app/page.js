import { HeroServer } from "@/components";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Features = dynamic(() =>
  import("../components/Home/Features/FeaturesServer")
);
const RecentActivities = dynamic(() =>
  import("../components/Home/Recent/RecentActivitiesServer")
);

export default async function Home() {
  return (
    <>
      <HeroServer />
      <Suspense>
        <Features />
      </Suspense>
      <Suspense>
        <RecentActivities />
      </Suspense>
    </>
  );
}
