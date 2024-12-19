"use client";
import React, { useEffect, useState } from "react";
import PastEventsCard from "@/components/pastEventsCard";
import { Button } from "@/components";
import axios from "axios";
import { API_URL } from "@/utils/constants";
const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/events/pastevents`);
        if (res.status === 200) {
          setPastEvents(res.data);
          // Set the default selected year to the first year in the list
          const years = res.data
            .map((event) => new Date(event?.date).getFullYear().toString())
            .filter((year, index, self) => self.indexOf(year) === index)
            .sort((a, b) => a - b);
          setSelectedYear(years[0] || "2023");
        } else {
          console.log("failed to fetch data");
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);

  const getUniqueYears = () => {
    const years = pastEvents
      .map((event) => new Date(event?.date).getFullYear().toString())
      .filter((year) => year);
    return Array.from(new Set(years)).sort((a, b) => a - b);
  };

  const filteredEvents = pastEvents.filter((event) => {
    const eventYear = new Date(event?.date).getFullYear().toString();
    return eventYear === selectedYear;
  });

  const handleClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="pt-[100px] w-full overflow-clip flex flex-col items-center px-4">
      <div className="text-[#070802] h-36 bg-[#DDF94A] p-6 m-6 rounded-xl flex flex-col items-center justify-center 2xl:w-[1340px] xs:w-full">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="xs:text-sm lg:text-[32px]  font-semibold text-center">
            Chennai Trail Club Past Events
          </h2>
          <p className="xs : text-sm lg:text-[20px] text-[#50514C] text-center">
            Below are events organised by our club in recent past
          </p>
        </div>
      </div>

      <div className="px-5 2xl:w-[1340px] xs:w-full ">
        <div className="flex space-x-4">
          {getUniqueYears().map((year) => (
            <Button
              key={year}
              title={year}
              onClick={() => handleClick(year)}
              classname={`text-[16px] border rounded-3xl p-2 w-32 font-bold transition-colors duration-200 ${
                selectedYear === year
                  ? "bg-black text-[#D0F700]"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            />
          ))}
        </div>
        <div className="flex md:flex-row xs:flex-col justify-between mt-4 md:space-x-8 xs:space-x-0 mb-auto">
          {filteredEvents.map((event, index) => {
            const {
              id,
              name,
              shortName,
              location,
              eventBannerThree,
              resultLink,
            } = event || {};

            const date = new Date(event?.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              year: "numeric",
              day: "2-digit",
            });
            return (
              <PastEventsCard
                key={index}
                id={id}
                name={name}
                shortName={shortName}
                location={location}
                banner={eventBannerThree}
                date={formattedDate}
                resultLink={resultLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
