"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { featuresData } from "@/utils/constants";
function Features() {
  

  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div className="w-full flex justify-center">
      <div className="xl:max-w-[1340px] lg:w-full md:w-full xs:w-full flex justify-center items-center lg:m-4 xs:m-0">
        <div className="md:w-full xs:w-full bg-black md:rounded-2xl xs:rounded-none md:mx-3 p-5 text-white">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, x: 150 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ duration: 0.5 }}
            className="md:text-5xl xs:text-[22px] m-4 font-bold"
          >
            {" "}
            Our Features
          </motion.h1>
          <hr className="ml-4" />
          <motion.div
            ref={ref}
            initial={{ opacity: 0.5 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col mt-8 md:px-4 xs:px-1"
          >
            <div className="w-full flex md:flex-row flex-wrap xs:flex-col  xs:space-x-0 justify-evenly ">
              {featuresData.map((item , index) => ( 
                <div
                key={index} 
                className="md:w-45 xs:w-full bg-[#1B1C16] p-5 md:my-5 xs:my-1 flex flex-col justify-start border border-solid rounded-xl hover:bg-[#7328F6] grayscale hover:grayscale-0">
                <Image
                  src={item.imageUrl}
                  alt="event image"
                  width={500}
                  height={400}
                  className="w-full rounded-lg "
                />
                <h1 className="md:text-xl xs:text-lg font-bold mt-4 mb-4">
                  {item.eventName}
                </h1>
                <p className="md:text-[16px] xs:text-sm">
                  {item.eventText}
                </p>
              </div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
