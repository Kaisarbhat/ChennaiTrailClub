"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import UpcomingEventsHero from "@/components/upcomingEventsHero";

const UpcomingEvents = () => {
  const router = useRouter();
  return (
    <>
      <div className="mb-4 leading-loose">
        <UpcomingEventsHero/>
      </div>
      <div className="md:px-3 py-6 2xl:px-64">
        <h2 className="text-black text-start text-[32px] font-bold px-4">
          Upcoming Events
        </h2>

        <div className="flex md:flex-row xs:flex-col md:justify-between xs:justify-center  md:w-1/2 sm:w-full xs:w-full  md:px-0 xs:px-4">
          <div className="border border-solid hover:shadow-mine hover:border-[#7328f6]  rounded-xl  flex sm:flex-row  lg:flex-col  xs:flex-col md:justify-between p-3 md:space-x-3  xs:space-x-0 my-6 min-h-52 sm:space-y-0 xs:space-y-3 ">
            <Image
              src="/JHU-2024-Banner.jpg"
              width={200}
              height={400}
              className="h-full xs:w-full sm:w-1/3 sm:h-48 rounded-md"
            />

            <div className="flex flex-col space-y-3  space-x-3 justify-between ml-1">
              <h1 className="text-2xl">Jawadhu Hills Ultra (JHU-24)</h1>
              
              <a className="text-[16px] underline text-[#50514c]" href="">
                <i class="bi bi-geo-alt-fill text-[#D0F700] "></i> St.Joseph
                Higher Secondary School, Jamunamarathur
              </a>
              <div className="text-[16px]  text-[#50514c]">
                <i class="bi bi-calendar3 text-[#D0F700]"></i> 09 November 2024
                (Saturday)
              </div>
              <button
                onClick={() => router.push("/register")}
                className="text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-[170px] hover:bg-[#D0F700] font-bold hover:text-black"
              >
                Register
              </button>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
