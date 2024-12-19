import React from "react";
import Link from "next/link";
import { registerCardData } from "@/utils/constants";
const RegisterCard = ({
  imageUrl,
  name,
  date,
  location,
  locationUrl,
  price,
  category,
}) => {
  return (
    <div className="border border-solid border-gray-600 rounded-xl shadow-lg p-4 flex flex-col xl:w-1/3 lg:w-2/5 md:w-full xs:w-full lg:h-1/3 md:h-full s xs:h-full xs:mt-4  lg:mt-0 lg:ml-2 xs:ml-0">
      <div className="w-full h-1/2 ">
        <img
          src={imageUrl}
          className="rounded-md md:h-32 lg:h-full w-full xs:h-full"
          alt={imageUrl}
        />
        <h1 className="relative top-[-30px] text-white font-bold px-2">
          {name}
        </h1>
      </div>
      <div className="flex flex-col lg:space-y-4 md:space-y-2 xs:space-y-2">
        <div className="flex justify-between">
          <div>Trail Date</div>
          <div className="text-[#070802]">{date}</div>
        </div>
        <div className="flex justify-between">
          <div>Trail Location</div>
          <div className="w-2/3 text-right">
            <Link
              href={
                `${locationUrl}` || "https://maps.app.goo.gl/VhYxsGumg4dSLJ4s6"
              }
              className="text-[#070802] underline"
            >
              {location}
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Running Category</div>
          <div className="text-[#070802]">{category || "Select KM"}</div>
        </div>
        <div className="flex justify-between ">
          <div className="text-[#070802] font-semibold">Registration Fee</div>
          <div className="text-[#070802] font-semibold text-[22px]">
            {price ? `₹${price}` : "Select KM"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
