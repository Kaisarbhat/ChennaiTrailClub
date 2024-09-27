import React from "react";
import Link from "next/link";
const RegisterCard = () => {
  return (
    <div className=" sticky border border-solid border-gray-600 rounded-xl shadow-lg p-4 flex flex-col xl:w-1/3 lg:w-2/5 md:w-full xs:w-full lg:h-1/3 md:h-full s xs:h-full xs:mt-4 md:mt-4 lg:mt-0 lg:ml-2 xs:ml-0">
      <div className="w-full h-1/2 ">
        <img src="/JHU-2024-Banner.jpg" className="rounded-md md:h-32 lg:h-full w-full xs:h-full" />
        <h1 className="z-10 relative top-[-30px] text-white font-bold px-2">
          Jawadhu Hills Ultra (JHU-24)
        </h1>
      </div>
      <div className="flex flex-col lg:space-y-4 md:space-y-2 xs:space-y-2">
        <div className="flex justify-between">
          <div>Trail Date</div>
          <div className="text-[#070802]">09 November 2024</div>
        </div>
        <div className="flex justify-between">
          <div>Trail Location</div>
          <div className="w-2/3 text-right">
            <Link
              href="https://maps.app.goo.gl/VhYxsGumg4dSLJ4s6"
              className="text-[#070802] underline"
            >
              St.Joseph Higher Secondary School, Jamunamarathur
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Running Category</div>
          <div className="text-[#070802]">30 KM (INR 1800)</div>
        </div>
        <div className="flex justify-between ">
          <div className="text-[#070802] font-semibold">Registration Fee</div>
          <div className="text-[#070802] font-semibold text-[22px]">
            {" "}
            ₹ 1800
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
