"use client";
import UpcomingEventsHero from "@/components/upcomingEventsHero";
import UpcomingEventsCard from "@/components/upcomingEventsCard";
import { useEffect, useState } from "react";
import { API_URL } from "@/utils/constants";
import EmptyEvents from "@/components/emptyEvents";
import axios from "axios";
const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/events/upcomingevents`);
        if (res.status === 200) {
          setUpcomingEvents(res.data);
        } else {
          console.log("Failed to fetch data");
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  let options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  // Format the date to the given format

  return (
    <div className="overflow-clip">
      {upcomingEvents && upcomingEvents.length > 0 ? (
        <>
          <div className="mb-4 leading-loose ">
            <UpcomingEventsHero data={upcomingEvents} />
          </div>
          <div className="w-full md:px-96  xs:px-4">
            <div className="2xl:w-4/5 xs:w-full flex flex-col justify-center items-center">
              <h2 className="text-black text-start text-[32px] font-bold px-4 self-start">
                Upcoming Events
              </h2>
              <div className=" py-6 2xl:max-w-[1340px] xs:block lg:flex items-center justify-center lg:space-x-10 xs:space-x-0">
                {upcomingEvents.map((event, index) => {
                  const { id, name, shortName, evenntBannerTwo, location } =
                    event;
                  const date = new Date(event?.date);
                  const formattedDate = date.toLocaleDateString(
                    "en-US",
                    options
                  );
                  return (
                    <UpcomingEventsCard
                      key={index}
                      id={id}
                      name={name}
                      shortName={shortName}
                      eventBannerTwo={evenntBannerTwo}
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
