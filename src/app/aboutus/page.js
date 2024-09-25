'use client'
import React, { useRef } from "react";
import Carousel from "../../components/carousel";
import { motion } from "framer-motion";
import useInView from "@/utils/motion";
const AboutUs = () => {
  const ref = useRef();
  let isInView = useInView(ref);
  return (
    <div className="px-4 pt-20">
      <div className="mt-10">
        <div className=" flex bg-[url('https://c1.wallpaperflare.com/preview/23/342/352/run-jog-sport-leisure.jpg')] rounded-lg bg-cover  xs:h-[450px] lg:h-[600px] lg:mx-64 ">
          <motion.div 
          ref={ref}
          initial ={{ x : '-100%'}}
          animate = {{opacity : 1 , x : 0}}
          transition={{duration : 0.5}}
          className="flex flex-col md:justify-center xs:justify-end md:w-2/5 xs:w-2/3 px-8 text-white  ">
            <h1 className="md:text-4xl xs:text-[26px] font-bold md:mb-7 xs:mb-3">About Us</h1>
            <p className="md:font-bold xs:font-medium md:text-xl sm:text-[15px] md:leading-7 xs:leading-5 mb-4">
              It’s a community built on shared passions, support, and
              camaraderie.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div 
      ref={ref}
      initial ={{opacity : 0 , x : '-100%'}}
      animate = {{opacity :  1 , x : 0}}
      transition={{duration : 0.5}}
      className="flex xs:flex-col md:flex-row justify-center items-center lg:px-64 xs:px-4  xs:py-12 md:p-10 my-10">
        <h1 className="lg:text-[56px] md:text-4xl xs:text[22px] font-bold lg:leading-tight text-wrap xs:leading-loose">
          We believe in transformative power of individuals
        </h1>
        <p className=" flex items-center md:text-xl xs:text-[14px] leading-normal text-[#50514c]">
          {" "}
          We are a passionate community of outdoor enthusiasts who share a
          common love for trail running, hiking, swimming and exploration.
        </p>
      </motion.div>
        <div className="lg:px-44 flex items-center justify-center xs:px-4">
         <Carousel/>
        </div>
      <div className="w-full flex md:flex-row xs:flex-col  items-center md:justify-between  my-28 md:space-x-14 xs:space-x-0 lg:px-64 xs:px-4 xs:text-center md:text-start">
        <motion.div 
        ref={ref}
        initial ={{opacity : 0 , x : -50}}
        animate = {{opacity : isInView ? 1 : 0 , x : isInView ? 0 : -50}}
        transition={{duration : 0.5}}
        className="lg:text-[56px] md:text-3xl xs:text-[22px]  lg:w-2/5 font-bold xs:mb-5 md:mb-0">
        Built on shared passions
        </motion.div>
        <div className="flex flex-col md:w-3/5  xs:w-full space-y-4">
            <div className="md:font-bold xs:font-semibold md:text-[22px] xs:text-[15px]">
            Our club was founded with the vision of creating a space where individuals from all walks of life can come together, and share experiences
            </div>
            <motion.p 
            ref={ref}
            initial ={{opacity : 0 , x : 50}}
            animate = {{opacity : isInView ? 1 : 0 , x : isInView ? 0 : 50}}
            transition={{duration : 0.5}}
            className="md:text-xl xs:text-sm text-[#50514c]">We also emphasize responsible outdoor practices, encouraging environmental awareness and leaving no trace behind. We foster an inclusive and welcoming environment where friendships are formed, stories are shared, and memories are created.</motion.p>
            <motion.p 
            ref={ref}
            initial ={{opacity : 0 , x : 50}}
            animate = {{opacity : isInView ? 1 : 0 , x : isInView ? 0 : 50}}
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
