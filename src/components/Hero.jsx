"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "./index";
import { motion, useInView } from "framer-motion";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="h-screen w-full  lg:px-80 flex md:flex-row xs:flex-col xs:pt-32 md:pt-0 items-center justify-center bg-black text-white md:space-x-20 xs:space-x-0 bg-[url('https://c0.wallpaperflare.com/preview/894/641/116/asphalt-dark-dawn-environment.jpg')] bg-cover bg-fixed xs:text-center md:text-start">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" mx-4 flex items-center justify-center"
        >
          <Image src="/banner.png" alt="event logo" width={480} height={220} />
        </motion.div>
        <div className="flex flex-col flex-1 mx-4 xs:px-6 md:px-0">
          <motion.h1
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-5xl xs:text-[26px] font-bold mb-8 xs:mt-8 md:mt-0 xs:px-10 md:px-0"
          >
            Jawadhu Hills Ultra 2024 (JHU-24)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-wrap mb-6"
          >
            Jawadhu Hills Ultra is back! Experience the most scenic trails in
            the Eastern Ghats, weaving through the pristine hills of Jawadhu
            range. Challenge yourself on diverse terrains, enjoy breathtaking
            vistas, and immerse in the natural beauty.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold mb-6"
          >
            Event date:{" "}
            <span className="font-light">09 November 2024, Saturday</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3  xs:w-full flex md:justify-start xs:justify-center"
          >
            <Button title={"JNU 2024"} link="/jhu" 
            />
          
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center py-28 max-w-6xl ">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="md:text-2xl xs:text-sm"
          >
            Lets Explore Together
          </motion.h1>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5 }}
            className="mt-8 md:text-5xl xs:text-[22px] font-bold"
          >
            Welcome to Chennai Trail Club
          </motion.h1>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: "-100%" }}
            animate={
              isInView ? { opacity: 1, x: 1 } : { opacity: 0, x: "-100%" }
            }
            transition={{ duration: 0.5 }}
            className="mt-8 md:text-xl xs:text-[16px] text-center"
          >
            At Chennai Trail Club, we believe in the transformative power of
            individuals who are embracing nature constantly. We are a passionate
            community of outdoor enthusiasts who share a common love for trail
            running, hiking, swimming and exploration.
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <Button title={"About Us "} link={"/aboutus"} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
