"use client";
import EventInfo from "@/components/eventInfo";
import EventDetailsHero from "@/components/eventDetailsHero";
import AboutRaceLocation from "@/components/aboutRaceLocation";
import RegisterButton from "@/components/registerButton";
import MaintainigCleaniless from "@/components/maintainigCleaniless";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { API_URL, dateOptions } from "@/utils/constants";
import axios from "axios";
import Loading from "@/components/loading";
import ErrorPage from "@/app/error/page";
const DynamicEvent = () => {
  const params = useParams();
  const eventId = params.eventId;
  const [state, setState] = useState({
    eventData: [],
    isLoading: false,
    error: "",
  });
  useEffect(() => {
    async function fetchEventData() {
      try {
        setState((prev) => ({ ...prev, isLoading: true }));
        const res = await axios.get(`${API_URL}/events/event/${eventId}`);
        if (res.status === 200) {
          setState((prev) => ({ ...prev, eventData: res.data }));
        } else {
          setState((prev) => ({
            ...prev,
            error: "failed to fetch Event data",
          }));
        }
      } catch (error) {
        setState((prev) => ({ ...prev, error: error.message }));
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    }
    fetchEventData();
  }, [eventId]);
  if (state.isLoading) {
    return <Loading />;
  }

  if (state.error !== "") {
    return <ErrorPage error={state.error} />;
  }

  if (!state.eventData) {
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
    id,
    name,
    shortName,
    description,
    location,
    eventBannerThree,
    locationUrl,
    middleImageUrl,
    heading,
    text,
    bottomImageUrl,
    bottomHeading,
    bottomText,
    warning,
    resultLink,
  } = state.eventData;
  const date = new Date(state.eventData?.date);
  const formattedDate = date.toLocaleDateString("en-Us", dateOptions);

  return (
    <div className="py-16 text-[#50514C]">
      <EventDetailsHero
        name={name}
        shortName={shortName}
        eventBannerTwo={eventBannerThree}
        description={description}
        date={formattedDate}
        location={location}
        locationUrl={locationUrl}
        resultLink={resultLink}
      />

      <div className="flex  flex-col justify-center items-center md:py-8 md:px-4  w-full">
        <div className="2xl:w-[1340px] md:px-0 xs:px-0">
          <h2 className="text-[22px] text-black font-bold my-4 ml-10 md:hidden">
            Things to know
          </h2>
          <EventInfo />
        </div>

        <RegisterButton id={id} name={name} resultLink={resultLink} />
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
