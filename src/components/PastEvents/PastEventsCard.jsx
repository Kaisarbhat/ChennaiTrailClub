import React from "react";
import { Button } from "..";
import Image from "next/image";

const PastEventsCard = ({
  id,
  name,
  shortName,
  location,
  date,
  banner,
  resultLink,
}) => {
  return (
    <div
      className="w-full overflow-hidden rounded-lg bg-white shadow  xs:w-full md:w-1/2 xs:mb-4 md:mb-0"
      role="region"
      aria-label="Past Events Card"
    >
      <div className="sm:flex">
        <div className="lg:w-1/3 sm:w-1/4">
          <Image
            src={banner}
            alt={name}
            width={100}
            height={100}
            className="h-48 w-full object-cover lg:h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2">
            <h3 className="text-xl font-semibold">
              {name} {shortName}
            </h3>
          </div>

          <div className="mb-2 text-gray-600">{location}</div>

          <div className="mb-4 text-gray-600">{date}</div>

          {resultLink && (
            <div className="flex justify-evenly sm:space-x-2 xs:space-x-0">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PastEventsCard;
