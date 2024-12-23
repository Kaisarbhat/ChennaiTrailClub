"use client";
import UpcomingEventsHero from "@/components/upcomingEventsHero";
import UpcomingEventsCard from "@/components/upcomingEventsCard";
import { useEffect, useState } from "react";
import { API_URL, dateOptions } from "@/utils/constants";
import EmptyEvents from "@/components/emptyEvents";
import axios from "axios";
import Loading from "@/components/loading";
import ErrorPage from "@/app/error/page";
const UpcomingEvents = () => {
  const [state, setState] = useState({
    upcomingEvents: [],
    isLoading: false,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const res = await axios.get(`${API_URL}/events/upcomingevents`);
        if (res.status === 200) {
          setState((prev) => ({ ...prev, upcomingEvents: res.data }));
        }
      } catch (error) {
        setState((prev) => ({ ...prev, error: error }));
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };
    fetchData();
  }, []);

  if (state.isLoading) {
    return <Loading />;
  }
  if (state.error !== "") {
    return <ErrorPage error={error} />;
  }
  return (
    <div className="overflow-clip">
      {state.upcomingEvents && state.upcomingEvents.length > 0 ? (
        <>
          <div className="mb-4 leading-loose ">
            <UpcomingEventsHero data={state?.upcomingEvents} />
          </div>
          <div className="w-full md:px-96  xs:px-4">
            <div className="2xl:w-4/5 xs:w-full flex flex-col justify-center items-center">
              <h2 className="text-black text-start text-[32px] font-bold px-4 self-start">
                Upcoming Events
              </h2>
              <div className=" py-6 2xl:max-w-[1340px] xs:block lg:flex items-center justify-center lg:space-x-10 xs:space-x-0">
                {state?.upcomingEvents.map((event, index) => {
                  const { id, name, shortName, eventBannerTwo, location } =
                    event;
                  const date = new Date(event?.date);
                  const formattedDate = date.toLocaleDateString(
                    "en-US",
                    dateOptions
                  );
                  return (
                    <UpcomingEventsCard
                      key={index}
                      id={id}
                      name={name}
                      shortName={shortName}
                      eventBannerTwo={eventBannerTwo}
                      location={location}
                      date={formattedDate}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <EmptyEvents />
      )}
    </div>
  );
};

export default UpcomingEvents;
