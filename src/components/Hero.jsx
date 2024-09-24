"use client";
import React,{useRef} from "react";
import Image from "next/image";
import { Button } from "./index";
import { motion } from "framer-motion";
import useInView, {slideVariants, } from "@/utils/motion";

function Hero() {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <>
      <div className="h-screen w-full  lg:px-80 flex items-center justify-center bg-black text-white space-x-20 bg-[url('https://c0.wallpaperflare.com/preview/894/641/116/asphalt-dark-dawn-environment.jpg')] bg-cover bg-fixed">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=" mx-4 flex items-center justify-center"
        >
          <Image src="/banner.png" alt="event logo" width={480} height={220} />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col flex-1 mx-4">
          <motion.h1 
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit='exit'
          className="text-5xl font-bold mb-8">
            Jawadhu Hills Ultra 2024 (JHU-24)
          </motion.h1>
          <p className="text-wrap mb-6">
            Jawadhu Hills Ultra is back! Experience the most scenic trails in
            the Eastern Ghats, weaving through the pristine hills of Jawadhu
            range. Challenge yourself on diverse terrains, enjoy breathtaking
            vistas, and immerse in the natural beauty.
          </p>
          <div className="font-bold mb-6">
            Event date:{" "}
            <span className="font-light">09 November 2024, Saturday</span>
          </div>
          <div className="w-2/3 flex ">
            <Button title={"JNU 2024"} link="/jhu" />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center py-28 max-w-6xl ">
          <motion.h1 
          ref={ref}
          initial={{opacity: 0 , y:-50}}
          animate={{opacity: isInView ? 1 : 0 , y: isInView ? 0: -50}}
          transition={{duration: 0.5 }}
          className="text-2xl">Lets Explore Together</motion.h1>
          <motion.h1 
          ref={ref}
          initial={{opacity:0 , scale:0}}
          animate={{opacity: isInView ? 1 : 0 , scale: isInView ? 1 : 0}}
          transition={{duration: 0.5 }}
          className="mt-8 text-5xl font-bold">
            Welcome to Chennai Trail Club
          </motion.h1>
          <motion.p 
          ref={ref}
          initial={{opacity:0 , x : '-100%' }}
          animate = {{opacity : isInView ? 1 : 0, x : isInView ? 0 : '-100%'}}
          transition={{duration: 0.5 }}
          className="mt-8 text-xl text-center">
            At Chennai Trail Club, we believe in the transformative power of
            individuals who are embracing nature constantly. We are a passionate
            community of outdoor enthusiasts who share a common love for trail
            running, hiking, swimming and exploration.
          </motion.p>
          <motion.div 
          initial={{opacity:0 , y:50}}
          animate={{opacity: isInView ? 1 : 0 , y: isInView ? 0 : 50}}
          transition={{duration: 0.5 }}
          className="mt-4"
          >
          <Button title={"About Us "} link={'/aboutus'} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
