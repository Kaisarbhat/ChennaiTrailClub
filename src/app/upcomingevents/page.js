"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const UpcomingEvents = () => {

  const router = useRouter();
  return (
    <div>
      <div className="mb-4 leading-loose">
        <div className="bg-[#070802] h-screen text-white box-border  flex flex-col items-center py-24  lg:px-80 md:px-4 font-serif">
          <div className="flex md:flex-row xs:flex-col md:space-x-8 xs:space-x-0 xs:text-center md:text-start">
            <div className="flex flex-col text-wrap md:w-4/5 xs:w-full px-8 ">
              <motion.h1 
              initial={{opacity: 0, y : '-100%'}}
              animate={{opacity: 1 ,y : 0 }}
              transition={{duration : 0.5 }}
              className="md:text-[38px] xs:text-[20px]">Jawadhu Hills Ultra (JHU-24)</motion.h1>
              <motion.p 
              initial={{opacity : 0,x : '-100%'}}
              animate={{opacity : 1 ,x : 0 }}
              transition={{duration : 0.5 }}
              className="md:text-lg xs:text-[16px] text-[#ffffffbf] leading-normal mt-4 font-man">
                Jawadhu Hills Ultra is back!
                Experience the most scenic trails in the Eastern Ghats, weaving
                through the pristine hills of Jawadhu range. Challenge yourself
                on diverse terrains, enjoy breathtaking vistas, and immerse in
                the natural beauty.
              </motion.p>
            </div>
            <div className="flex flex-col xs:items-center md:items-start mb-10  md:mt-0 xs:mt-8">
              <div className="md:text-[18px] xs:text-[14px]  text-[#ffffffbf]">
                <i class="bi bi-calendar3 text-[#D0F700] mr-1"></i> 09 November
                2024 (Saturday)
              </div>
              <motion.div
              initial={{opacity : 0 ,y : '100%'}}
              animate={{opacity :1 , y : 0 }}
              transition={{duration : 0.5 }}
              >
              <a className="md:text-[18px] xs:text-[16px]  text-[#ffffffa6] underline mt-8" href="">
                <i class="bi bi-geo-alt-fill text-[#D0F700] mr-1 "></i> St.Joseph
                Higher Secondary School, Jamunamarathur{" "}
                <i class="bi bi-arrow-up-right"></i>
              </a>
              </motion.div>
              <button
                className="md:text-xl xs:text-sm border border-solid mt-3  text-[#ffffffbf] rounded-3xl p-2  w-[150px]  font-bold hover:text-white"
                onClick={() => router.push("/jhu")}
              >
                View Details
              </button>
            </div>
          </div>
          <motion.div
          initial={{opacity : 0,scale: 0}}
          animate={{opacity :  1 ,scale : 1}}
          transition={{duration : 0.5 }}
          className="w-full rounded-lg xs:px-2 md:px-0"
          >
          <Image
            src="/JHU-2024-Banner.jpg"
            width={1288}
            height={440}
            className="w-full rounded-lg "
            layout="responsive"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:px-3 py-6 lg:px-80 ">
        <h2 className="text-black text-start text-[32px] font-bold px-4">
          Upcoming Events
        </h2>

        <div className="flex md:flex-row xs:flex-col md:justify-between xs:justify-center  md:w-1/2 xs:w-full md:px-0 xs:px-4">
          <div className="border border-solid hover:shadow-mine hover:border-[#7328f6]  rounded-xl  flex md:flex-row  xs:flex-col md:justify-between p-2 md:space-x-2 xs:space-x-0 my-6 min-h-52 md:space-y-0 xs:space-y-3 ">
            <Image
              src="/JHU-2024-Banner.jpg"
              width={200}
              height={400}
              className="h-full xs:w-full rounded-md"
            />

            <div className="flex flex-col space-y-3 justify-between ml-1">
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
    </div>
  );
};

export default UpcomingEvents;
