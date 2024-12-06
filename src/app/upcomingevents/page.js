"use client";
import UpcomingEventsHero from "@/components/upcomingEventsHero";
import UpcomingEventsCard from "@/components/upcomingEventsCard";
import { useEffect, useState } from "react";
import { API_URL } from "@/utils/constants";
const UpcomingEvents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/events/upcomingevents`);
        if (!res.ok) {
          console.log("Failed to fetch data");
        }
        const data = await res.json();
        setData(data);
        console.log("Data", data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-clip">
      {data && data.length > 0 ? (
        <>
          <div className="mb-4 leading-loose ">
            <UpcomingEventsHero data={data} />
          </div>
          <div className="md:px-3 py-6 2xl:max-w-[1340px] xs:block 2xl:flex flex-col items-center justify-center">
            <h2 className="text-black text-start text-[32px] font-bold px-4 ">
              Upcoming Events
            </h2>

            <UpcomingEventsCard data={data} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[550px] pt-32 flex flex-col flex-wrap items-center justify-center">
            <div className="h-1/2">Image</div>
            <div className="flex flex-col text-center flex-wrap">
              <h2 className="text-[32px] text-[#070802] font-bold ">
                There are no events at this time
              </h2>
              <h6 className="mt-3 text-[#5d5d5d] text-[20px]">
                There are currently no upcoming events.to{" "}
                <button className="text-[#7328f6]">Join Our Club </button> to
                get latest updates.
              </h6>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpcomingEvents;
