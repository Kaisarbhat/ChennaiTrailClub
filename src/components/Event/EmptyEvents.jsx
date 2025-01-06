import Image from "next/image";
import React from "react";

const EmptyEvents = () => {
  return (
    <div
      className="w-full pt-24  flex items-center justify-center"
      role="region"
      aria-label="No Upcoming Events"
    >
      <div className="w-4/5">
        <h1 className="text-start text-3xl font-semibold">Upcoming Events</h1>
        <div className=" flex flex-col flex-wrap items-center justify-center">
          <div className="h-1/2 mb-10">
            <Image src="/empty.svg" alt="svg" height={400} width={500} />
          </div>
          <div className="flex flex-col text-center flex-wrap">
            <h2 className="text-[32px] text-[#070802] font-bold ">
              There are no events at this time
            </h2>
            <h6 className="mt-3 text-[#5d5d5d] text-[20px]">
              There are currently no upcoming events.to{" "}
              <button className="text-[#7328f6]">Join Our Club </button> to get
              latest updates.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EmptyEvents);
