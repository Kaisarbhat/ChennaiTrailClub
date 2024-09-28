'use client'
import React from "react";
import { motion } from "framer-motion";
import {Carousel , AboutUsText1 ,AboutUsText2} from '@/components'
const AboutUs = () => {
  return (
    <>
    <div className="w-screen px-4 pt-20 flex  flex-col items-center ">
      <div className="mt-10 ">
        <div className=" w-full flex bg-[url('https://c1.wallpaperflare.com/preview/23/342/352/run-jog-sport-leisure.jpg')] rounded-lg bg-cover  xs:h-[350px] xl:h-[60vh] lg:h-[50vh] 2xl:h-[45vh] sm:h-[70vh] md:h-[75vh] 2xl:w-[1340px] lg:w-[1024px] overflow-clip">
          <motion.div 
          initial ={{ x : '-100%'}}
          animate = {{opacity : 1 , x : 0}}
          transition={{duration : 0.5}}
          className="flex flex-col md:justify-end xs:justify-end xs:w-full  px-8 text-white xs:mb-4 sm:mb-10 md:ml-6 xs:ml-0 lg:ml-0 ">
            <h1 className="sm:text-[40px] xs:text-[26px] font-bold lg:mb-7 sm:mb-0 xs:mb-3">About Us</h1>
            <p className="sm:font-medium xs:font-medium sm:text-[26px] lg:text-[16px]
            lg:font-semibold xs:text-[15px] md:leading-loose sm:leading-relaxed xs:leading-5 mb-4 sm:w-full md:w-4/5 lg:w-1/2 xl:w-1/3 2xl:w-1/5">
            We are a passionate community of outdoor running, hiking, swimming and exploration.
            </p>
          </motion.div>
        </div>
      </div>
      <AboutUsText1/>
        <div className="flex items-center justify-center xs:px-4 2xl:max-w-[1840px]">
         <Carousel/>
        </div>
      <AboutUsText2/>
     </div>
     </>
  );
};

export default AboutUs;
