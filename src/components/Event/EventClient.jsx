import dynamic from "next/dynamic";
import { EventInfo, EventDetailsHero } from "..";
import { dateOptions } from "@/utils/constants";

const RegisterButton = dynamic(() => import("../Register/RegisterButton"));
const AboutRaceLocation = dynamic(() => import("./AboutRaceLocation"));
const MaintainigCleaniless = dynamic(() => import("./MaintainigCleaniless"));

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
    <div className="py-16 text-[#50514C]" aria-labelledby="Event details">
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
    </div>
  );
};

export default EventClient;
