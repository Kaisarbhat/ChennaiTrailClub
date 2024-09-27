'use client'
import React, { useRef } from "react";
import Carousel from "../../components/carousel";
import { motion , useInView } from "framer-motion";
const AboutUs = () => {
  const ref = useRef();
  let isInView = useInView(ref,{once:true});
  return (
    <div className="w-screen px-4 pt-20 flex  flex-col items-center overflow-hidden">
      <div className="mt-10 ">
        <div className=" w-full flex bg-[url('https://c1.wallpaperflare.com/preview/23/342/352/run-jog-sport-leisure.jpg')] rounded-lg bg-cover  xs:h-[350px] xl:h-[60vh] lg:h-[45vh] 2xl:h-[45vh] sm:h-[70vh] md:h-[85vh] 2xl:w-[1340px]">
          <motion.div 
          ref={ref}
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
      <motion.div 
      ref={ref}
      initial ={{opacity : 0 , x : '-100%'}}
      animate = {{opacity :  1 , x : 0}}
      transition={{duration : 0.5}}
      className="flex xs:flex-col md:flex-row justify-between items-center  md:py-[100px]  xs:px-4  xs:py-12 2xl:max-w-[1340px] xs:text-center md:text-start">
        <h1 className="md:text-[56px]   xs:text[22px] font-bold lg:leading-tight text-wrap xs:leading-loose md:leading-none">
          We believe in<br className="xl:block xs:hidden "/> transformative power of <br className="xs:hidden 2xl:block"/>individuals
        </h1>
        <p className="xs:text-center md:text-start  md:text-xl xs:text-sm leading-normal text-[#50514c] xl:w-2/5 2xl:w-1/3 2xl:leading-loose">
          {" "}
          We are a passionate community of outdoor enthusiasts who share a
          common love for trail running, hiking, swimming and exploration.
        </p>
      </motion.div>
        <div className="flex items-center justify-center xs:px-4 2xl:max-w-[1840px]">
         <Carousel/>
        </div>
      <div className="w-full flex md:flex-row xs:flex-col  xs:items-center md:items-start md:justify-between  xs:px-4 xs:py-12 md:py-[100px] md:px-4 lg:space-x-14 xs:space-x-0  xs:text-center md:text-start 2xl:max-w-[1340px] ">
        <motion.div 
        ref={ref}
        initial ={{opacity : 0 , x : -50}}
        animate = { isInView ? {opacity :  1  , x :  0} : {opacity : 0 , x : -50}}
        transition={{duration : 0.5}}
        className="md:text-[56px] sm:text-3xl xs:text-[22px]  lg:w-1/2 md:w-full h-full  md:leading-tight font-bold xs:mb-5 md:mb-0">
        Built on shared passions
        </motion.div>
        <div className="flex flex-col lg:w-1/2  md:w-4/5  xs:w-full space-y-4">
            <div className="md:font-bold xs:font-semibold md:text-[22px] xs:text-[15px]">
            Our club was founded with the vision of creating a space where individuals from all walks of life can come together, and share experiences
            </div>
            <motion.p 
            ref={ref}
            initial ={{opacity : 0 , x : 50}}
            animate = {isInView ? {opacity :  1  , x :  0} : {opacity : 0 , x : 50}}
            transition={{duration : 0.5}}
            className="md:text-xl xs:text-sm text-[#50514c]">We also emphasize responsible outdoor practices, encouraging environmental awareness and leaving no trace behind. We foster an inclusive and welcoming environment where friendships are formed, stories are shared, and memories are created.</motion.p>
            <motion.p 
            ref={ref}
            initial ={{opacity : 0 , x : 50}}
            animate = {isInView ? {opacity :  1  , x :  0} : {opacity : 0 , x : 50}}
            transition={{duration : 0.5}}
            className="md:text-xl xs:text-sm text-[#50514c]">
            So, if you’re ready to break free from the confines of everyday life and embark on incredible nature trails, we invite you to join the Chennai Trail Club. Together, let’s discover the beauty of nature, challenge ourselves, and create memories that will last a lifetime. Welcome to the club!
            </motion.p>
        </div>
      </div>
     </div>
  );
};

export default AboutUs;
