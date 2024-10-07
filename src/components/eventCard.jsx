import React from "react";
import Image from "next/image";
import { Button } from ".";
import { pastEvents } from "@/utils/constants";
const EventCard = () => {
  
  return (
    <div className="border border-solid hover:shadow-mine rounded-xl  md:w-1/2 xs:w-full   p-3 2xl:space-x-4 md:space-x-2 xs:space-x-0 my-6 min-h-52 justify-cenetr hover:border-[#7328f6] flex md:flex-row xs:flex-col">
      <Image
        src={pastEvents.imageUrl}
        width={300}
        height={400}
        className="md:w-1/2 md:h-1/2 lg:h-full xs:w-full h-full lg:w-1/3 rounded-lg"
      />

      <div className="flex flex-col space-y-3 justify-between ml-1 xs:mt-3 md:mt-0">
        <h1 className="text-2xl">{pastEvents.eventName}</h1>
        <div className="text-[16px] text-[#50514c]" href="">
          <i class="bi bi-geo-alt-fill text-[#50514c]mr-2 "></i> {pastEvents.eventLocation}
        </div>
        <div className="text-[16px]  text-[#50514c]">
          <i class="bi bi-calendar3 text-[#50514c] mr-2"></i>{pastEvents.eventDate}
        </div>

        <div className="lg:flex justify-evenly ">
          <Button
            title={"View Details"}
            link={"/jhu"}
            classname={
              "text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black"
            }
          />
          <Button
            title={"Results"}
            link={pastEvents.resultUrl}
            classname={
              "text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
