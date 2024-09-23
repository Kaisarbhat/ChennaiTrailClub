'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import React from "react";

const UpcomingEvents = () => {

  const router = useRouter()
  return (
    <div>
      <div className="mb-4">
      <div className="bg-[#070802] text-white box-border h-full flex flex-col items-center py-40  px-80">
        <div className="flex space-x-10">
          <div className="flex flex-col text-wrap w-4/5">
            <h1 className="text-[38px] font-bold ">
              Jawadhu Hills Ultra (JHU-24)
            </h1>
            <p className="text-xl text-[#ffffffb8] leading-normal mt-5">
              Jawadhu Hills Ultra is back! Experience the most scenic trails in
              the Eastern Ghats, weaving through the pristine hills of Jawadhu
              range. Challenge yourself on diverse terrains, enjoy breathtaking
              vistas, and immerse in the natural beauty.
            </p>
          </div>
          <div className="flex flex-col justify-between mb-10 space-y-6">
            <div className="text-[20px]  text-[#ffffffb8]">
              <i class="bi bi-calendar3 text-[#D0F700] mr-1"></i> 09 November 2024
              (Saturday)
            </div>
            <a className="text-[20px]  text-[#ffffffa6] underline" href="">
              <i class="bi bi-geo-alt-fill text-[#D0F700] mr-1"></i> St.Joseph
              Higher Secondary School, Jamunamarathur <i class="bi bi-arrow-up-right"></i>
            </a>
            <button 
            className="text-[18px] border border-solid  text-[#50514c] rounded-3xl p-2 w-[170px] hover:bg-[#D0F700] font-bold hover:text-black"
            onClick={()=> router.push('/jhu')}
            >
              View Details
            </button>
          </div>
        </div>
        <Image
          src="/JHU-2024-Banner.jpg"
          width={1288}
          height={440}
          className="w-full rounded-lg "
          layout="responsive"
        />
      </div>
      </div>
      <div className="md:px-3 py-6 lg:px-80 ">
        <h2 className="text-black text-start text-[32px] font-bold">Upcoming Events</h2>

        <div className="flex justify-between ">
          <div className="border border-solid hover:shadow-mine hover:border-[#7328f6]  rounded-xl  flex p-2 space-x-2 my-6 min-h-52 justify-between">
            <Image src="/new-events-1.png" width={300} height={400} 
            className="h-full"
            />

            <div className="flex flex-col justify-between ml-1">
              <h1 className="text-2xl">Jawadhu Hills Ultra (JHU-24)</h1>
              <div className="text-[16px]  text-[#50514c]">
                <i class="bi bi-calendar3 text-[#D0F700]"></i> 09 November 2024
                (Saturday)
              </div>
              <a className="text-[16px] underline text-[#50514c]" href="">
                <i class="bi bi-geo-alt-fill text-[#D0F700] "></i> St.Joseph
                Higher Secondary School, Jamunamarathur
              </a>
              <button 
              onClick={()=> router.push('/register')}
              className="text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-[170px] hover:bg-[#D0F700] font-bold hover:text-black">
                Register
              </button>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
