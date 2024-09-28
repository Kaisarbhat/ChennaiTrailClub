'use client'
import React,{useRef} from 'react'
import {motion , useInView} from 'framer-motion';
import { Button } from '.';
const HeroText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
  return (
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
            <Button title={"About Us "} link={"/aboutus"} classname={'bg-[#D0F700] text-black md:text-lg xs:text-sm font-bold rounded-3xl md:px-6 xs:px-3 py-3 mt-4 hover:bg-black hover:text-[#D0F700] max-h-[60px] md:max-w-[600px] xs:max-w-[320px]'}
            icon={true}
            />
          </motion.div>
        </div>
  )
}

export default HeroText