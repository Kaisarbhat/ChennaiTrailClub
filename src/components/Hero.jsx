"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./index";
import { motion } from "framer-motion";
import HeroText from "./heroText";
import { API_URL } from "@/utils/constants";
import axios from "axios";
function Hero() {
  const [data, setData] = useState({ recentEvent: {}, heroImage: null });
  useEffect(() => {
    async function fetchData() {
      try {
        const [recentEvent, heroImage] = await Promise.all([
          axios.get(`${API_URL}/events/recentevent`),
          axios.get(`${API_URL}/adminservices/heroimage`),
        ]);
        if (!recentEvent || !heroImage) throw new Error("Failed to fetch data");

        setData({ recentEvent: recentEvent.data, heroImage: heroImage.data });
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, []);

  //destructuring from state
  const { recentEvent, heroImage } = data || {};
  const { imageUrl } = heroImage || {};
  const date = new Date(recentEvent?.date);
  const formattedDate = date.toLocaleDateString("en-Us", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  return (
    <>
      {recentEvent && (
        <div
          // ${imageUrl} ||
          style={{
            backgroundImage: `url(
              https://c0.wallpaperflare.com/preview/894/641/116/asphalt-dark-dawn-environment.jpg
            )`,
          }}
          className="h-screen w-full flex md:flex-row sm:flex-col xs:flex-col  items-center justify-center  bg-black text-white bg-cover bg-fixed xs:text-center sm:text-start overflow-hidden "
        >
          <div className="2xl:max-w-[1340px] 2xl:space-x-20 h-screen w-full flex md:flex-row sm:flex-col xs:flex-col xs:pt-20 sm:pt-24 md:pt-0 items-center justify-center  space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 xs:w-full xs:px-4 md:px-0 mx-4 flex  justify-center 2xl:w-2/5"
            >
              <Image
                src={recentEvent.eventBannerOne}
                alt="event logo"
                width={480}
                height={220}
                className="xs:pt-14 ms:pt-0 xs:mb-14 md:mb-0"
                priority
              />
            </motion.div>
            <div className="flex flex-col flex-1 space-y-10 md:w-1/2 xs:w-full xs:text-center  md:text-start">
              <motion.h1
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sm:text-5xl xs:text-[26px] font-bold sm:mb-8 xs:mb-1 xs:mt-8 md:mt-12 xs:px-10 sm:px-0"
              >
                {recentEvent.name}{" "}
                <br className="md:block lg:hidden 2xl:block xs:hidden" />
                {recentEvent.shortName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-wrap md:mb-6 xs:mb-0 sm:leading-loose 2xl:text-lg font-man 2xl:font-extralight tracking-wide  2xl:w-4/5"
              >
                {recentEvent.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="font-bold md:mb-6 xs:mb-0 "
              >
                Event date:{" "}
                <span className="font-light text-lg">{formattedDate}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-2/3  xs:w-full flex md:justify-start xs:justify-center sm:mt-10 xs:mt-0 md:mt-0"
              >
                <Button
                  title={recentEvent.shortName}
                  link="/jhu"
                  classname={
                    "bg-[#D0F700] text-black md:text-lg xs:text-sm font-bold rounded-3xl md:px-6 xs:px-3 py-3 mt-4 hover:bg-black hover:text-[#D0F700] max-h-[60px] md:max-w-[600px] xs:max-w-[320px]"
                  }
                  icon={true}
                />
              </motion.div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center 2xl:m-w-[1340px]">
        <HeroText />
      </div>
    </>
  );
}

export default Hero;
