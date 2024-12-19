"use client";
import EventInfo from "@/components/eventInfo";
import EventDetailsHero from "@/components/eventDetailsHero";
import AboutRaceLocation from "@/components/aboutRaceLocation";
import RegisterButton from "@/components/registerButton";
import MaintainigCleaniless from "@/components/maintainigCleaniless";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { API_URL } from "@/utils/constants";
import axios from "axios";
const DynamicEvent = () => {
  const params = useParams();
  const eventId = params.eventId;
  useEffect(() => {
    console.log("Page mounted");
    console.log("Current params:", params);
  }, [params]);
  const [eventData, setEventData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchEventData() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_URL}/events/event/${eventId}`);
        if (res.status === 200) {
          setEventData(res.data);
        } else {
          setError("failed to fetch Event data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEventData();
  }, [eventId]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Error Loading Event</h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

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
  const {
    name,
    shortName,
    description,
    location,
    eventBannerTwo,
    locationUrl,
    middleImageUrl,
    heading,
    text,
    bottomImageUrl,
    bottomHeading,
    bottomText,
    warning,
  } = eventData;
  const date = new Date(eventData?.date);
  const formattedDate = date.toLocaleDateString("en-Us", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  console.log("here");

  return (
    <div className="py-16 text-[#50514C]">
      <EventDetailsHero
        name={name}
        shortName={shortName}
        eventBannerTwo={eventBannerTwo}
        description={description}
        date={formattedDate}
        location={location}
        locationUrl={locationUrl}
      />

      <div className="flex  flex-col justify-center items-center md:py-8 md:px-4  w-full">
        <div className="2xl:w-[1340px] md:px-0 xs:px-0">
          <h2 className="text-[22px] text-black font-bold my-4 ml-10 md:hidden">
            Things to know
          </h2>
          <EventInfo />
        </div>

        <RegisterButton />
        <AboutRaceLocation
          heading={heading}
          middleImageUrl={middleImageUrl}
          text={text}
        />
        <MaintainigCleaniless
          bottomHeading={bottomHeading}
          bottomImageUrl={bottomImageUrl}
          bottomText={bottomText}
          warning={warning}
        />
      </div>
    </div>
  );
};

export default DynamicEvent;
