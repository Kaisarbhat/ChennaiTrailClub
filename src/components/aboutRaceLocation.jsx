"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { raceDate } from "@/utils/constants";
function AboutRaceLocation({ heading, middleImageUrl, text }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#F6FFC7] my-10">
      <div className="2xl:w-[1340px]  md:py-4 lg:py-8 xs:py-8">
        <h1 className="md:text-5xl xs:text-[22px] text-[#070802] font-bold text-center mb-6">
          {heading}
        </h1>
        <div
          className="flex md:flex-row xs:flex-col justify-between 
      xs:items-center 2xl:items-center md:items-start 2xl:space-x-10 md:space-x-4 xs:space-x-0 p-3 w-full"
        >
          <motion.img
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5 }}
            src={middleImageUrl}
            width={520}
            height={510}
            className="md:w-45 xs:w-full"
          />
          <div className="text-[#50514C] text-[16px] lg:space-y-6 md:space-y-3 flex flex-col xs:mt-4 md:mt-0  md:text-start xs:text-center">
            {text && text.length > 0 ? (
              text.map((item, index) => <p key={index}>{item}</p>)
            ) : (
              <div>No Text</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutRaceLocation;
