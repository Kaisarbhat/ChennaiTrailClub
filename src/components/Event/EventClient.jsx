import dynamic from "next/dynamic";
import { EventInfo, EventDetailsHero } from "..";
import { dateOptions } from "@/utils/constants";

const RegisterButton = dynamic(() => import("../Register/RegisterButton"));
const AboutRaceLocation = dynamic(() => import("./AboutRaceLocation"));
const MaintainigCleaniless = dynamic(() => import("./MaintainigCleaniless"));
const Sponsors = dynamic(() => import("./Sponsors"));
const EventClient = ({ eventData }) => {
  if (!eventData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-600">
          The event you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const date = new Date(eventData?.date);
  const formattedDate = date.toLocaleDateString("en-Us", dateOptions);
  return (
    <div
      className="md:py-16 xs:py-7 text-[#50514C]"
      aria-labelledby="Event details"
    >
      <EventDetailsHero
        name={eventData.name}
        shortName={eventData.shortName}
        eventBannerTwo={eventData.eventBannerThree}
        description={eventData.description}
        date={formattedDate}
        location={eventData.location}
        locationUrl={eventData.locationUrl}
        resultLink={eventData?.resultLink}
      />

      <div className="flex  flex-col justify-center items-center md:py-8 md:px-4  w-full">
        <div className="2xl:w-[1340px] md:px-0 xs:px-0">
          <h2 className="text-[22px] text-black font-bold my-4 ml-10 md:hidden">
            Things to know
          </h2>
          <EventInfo />
        </div>

        <RegisterButton
          id={eventData.id}
          name={eventData.name}
          resultLink={eventData?.resultLink}
        />
        <AboutRaceLocation
          heading={eventData.heading}
          middleImageUrl={eventData.middleImageUrl}
          text={eventData.text}
        />
        <MaintainigCleaniless
          bottomHeading={eventData.bottomHeading}
          bottomImageUrl={eventData.bottomImageUrl}
          bottomText={eventData.bottomText}
          warning={eventData.warning}
        />
      </div>
      {eventData?.sponsors.length > 0 && (
        <div className="w-full flex flex-col justify-center items-center h-52 p-2 xs:px-2 md:px-10">
          <h3 className="text-[#070802] xs:text-sm md:text-lg font-serif mb-3">
            OUR LEADING SPONSORS
          </h3>
          <Sponsors sponsors={eventData?.sponsors} />
        </div>
      )}
    </div>
  );
};

export default EventClient;
