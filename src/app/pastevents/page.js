"use client";
import React from "react";
import EventCard from "@/components/eventCard";
import Button1 from "../../components/button1";
const PastEvents = () => {
  return (
    <div className="pt-[100px] lg:px-64">
      <div className="text-[#070802] h-36 bg-[#DDF94A] p-6 m-6 rounded-xl flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-[20px] font-semibold text-center">
            Chennai Trail Club Past Events
          </h2>
          <p className="text-sm text-[#50514C] text-center">
            Below are events organised by our club in recent past
          </p>
        </div>
      </div>

      {/* {container} */}
      <div className="px-5">
        <div className="flex  space-x-4">
          <Button1 title={"2023"} />
          <Button1 title={"2024"} />
        </div>
        <div className="flex justify-between mt-4 space-x-8">
          <EventCard/>
          <EventCard/>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
