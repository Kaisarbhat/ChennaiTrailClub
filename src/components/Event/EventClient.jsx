import dynamic from 'next/dynamic';
import { EventDetailsHero, EventInfo, WithErrorHandling } from '..';
import React from 'react';

const RegisterButton = dynamic(() => import('../Register/RegisterButton'));
const AboutRaceLocation = dynamic(() => import('./AboutRaceLocation'));
const MaintainigCleaniless = dynamic(() => import('./MaintainigCleaniless'));
const Sponsors = dynamic(() => import('./Sponsors'));

const EventClient = ({ eventData }) => {
  if (!eventData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-600">
          The event you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }
  return (
    <div
      className="md:py-16 xs:py-7 text-[#50514C]"
      aria-labelledby="Event details"
    >
      <EventDetailsHero eventData={eventData} />

      <div className="flex  flex-col justify-center items-center md:py-8 md:px-4  w-full">
        <div className="2xl:w-[1340px] md:px-0 xs:px-0">
          <h2 className="text-[22px] text-black font-bold my-4 ml-10 md:hidden">
            Things to know
          </h2>
          <EventInfo />
        </div>

        <RegisterButton eventData={eventData} />
        <AboutRaceLocation eventData={eventData} />
        <MaintainigCleaniless eventData={eventData} />
      </div>
      {eventData?.sponsors.length > 0 && (
        <div className="w-full flex flex-col justify-center items-center h-52 p-2 xs:px-2 md:px-10">
          <h3 className="text-[#070802] xs:text-sm md:text-lg font-urbanist mb-3">
            OUR LEADING SPONSORS
          </h3>
          <Sponsors sponsors={eventData?.sponsors} />
        </div>
      )}
    </div>
  );
};

export default React.memo(EventClient);
