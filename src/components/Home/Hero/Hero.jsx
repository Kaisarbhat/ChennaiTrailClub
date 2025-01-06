"use client";
import { Button } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = ({ recentEvent, formattedDate }) => {
  return (
    <div className="relative z-10 2xl:max-w-[1320px] h-screen w-full flex md:flex-row sm:flex-col xs:flex-col xs:pt-12 sm:pt-14 md:pt-10 items-center justify-center space-x-4">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 xs:w-full xs:px-4 lg:px-0 lg:ml-16 lg:mr-4 mt-10 flex justify-center 2xl:w-2/5"
      >
        <Image
          src={recentEvent?.eventBannerOne}
          alt="event logo"
          width={480}
          height={220}
          className="xs:pt-10 md:pt-0 xs:mb-10 md:mb-0"
          loading="lazy"
        />
      </motion.div>
      <div className="flex flex-col flex-1 md:w-1/2 xs:w-full xs:text-center md:text-start lg:space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-5xl lg:text-[56px] xs:text-[26px] font-extrabold sm:mb-4 xs:mb-1 xs:mt-4 md:mt-12 xs:px-10 sm:px-0"
        >
          {recentEvent?.name}{" "}
          <br className="md:block lg:hidden xl:block xs:hidden" />
          {`(${recentEvent?.shortName})`}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-wrap md:mb-6 xs:mb-0 sm:leading-loose 2xl:text-lg font-man text-[#FCFDF8] tracking-wide 2xl:w-4/5"
        >
          {recentEvent?.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold md:mb-6 xs:mb-0"
        >
          Event date:{" "}
          <span className="font-normal text-lg">{formattedDate}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-2/3 xs:w-full flex md:justify-start xs:justify-center sm:mt-10 xs:mt-auto xs:mb-2 md:mb-0 md:mt-0"
        >
          <Button
            title={recentEvent?.shortName}
            link={`/events/${recentEvent?.id}`}
            classname="bg-[#D0F700] text-black md:text-lg xs:text-sm font-bold rounded-3xl md:px-6 xs:px-3 py-3 mb-4 hover:bg-black hover:text-[#D0F700] max-h-[60px] md:max-w-[600px] xs:max-w-[320px]"
            icon={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
