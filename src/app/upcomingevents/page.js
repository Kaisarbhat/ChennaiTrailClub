'use client'
import UpcomingEventsHero from "@/components/upcomingEventsHero";
import UpcomigEventsCard from "@/components/upcomigEventsCard";

const UpcomingEvents = () => {
  return (
    <>
      <div className="mb-4 leading-loose ">
        <UpcomingEventsHero/>
      </div>
      <div className="md:px-3 py-6 2xl:max-w-[1340px] xs:block 2xl:flex flex-col items-center justify-center">
        <h2 className="text-black text-start text-[32px] font-bold px-4 ">
          Upcoming Events
        </h2>

        <UpcomigEventsCard/>
      </div>
    </>
  );
};

export default UpcomingEvents;
