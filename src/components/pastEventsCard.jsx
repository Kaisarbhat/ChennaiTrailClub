import React from "react";
import { Button } from ".";
const PastEventsCard = ({
  id,
  name,
  shortName,
  location,
  date,
  banner,
  resultLink,
}) => {
  // const imgSrc = banner ?? "/JHU-2024-Event.jpg";
  console.log(banner);
  return (
    <div className="border border-solid hover:shadow-mine rounded-xl  md:w-1/2 xs:w-full   p-3 2xl:space-x-4 md:space-x-2 xs:space-x-0 my-6 min-h-52 xs:max-h-44 md:max-h-96 justify-center hover:border-[#7328f6] flex sm:flex-row xs:flex-col">
      <img
        src={"/JHU-2024-Event.jpg"}
        width="350px"
        height="200px"
        className="md:w-1/2 md:h-1/2 lg:h-full xs:w-full lg:w-1/3 rounded-lg"
      />

      <div className="flex flex-col space-y-3 justify-between ml-1 xs:mt-3 md:mt-0">
        <h1 className="text-2xl">
          {name} {shortName}
        </h1>
        <div className="text-[16px] text-[#50514c]" href="">
          <i class="bi bi-geo-alt-fill text-[#50514c]mr-2 "></i> {location}
        </div>
        <div className="text-[16px]  text-[#50514c]">
          <i className="bi bi-calendar3 text-[#50514c] mr-2"></i>
          {date}
        </div>

        <div className="xl:flex justify-evenly ">
          <Button
            title={"View Details"}
            link={`/events/${id}`}
            classname={
              "text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black"
            }
          />
          <Button
            title={"Results"}
            link={resultLink ?? "/"}
            classname={
              "text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PastEventsCard;
