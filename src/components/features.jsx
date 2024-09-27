"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion,useInView } from "framer-motion";


function Features() {
  const ref =useRef();
  const isInView = useInView(ref, {once:true});
  return (
    <div className="w-full flex justify-center">
      <div className="xl:max-w-[1340px] lg:w-full md:w-full xs:w-full flex justify-center items-center lg:m-4 xs:m-0">
        <div className="md:w-full xs:w-full bg-black md:rounded-2xl xs:rounded-none md:mx-3 p-5 text-white">
          <motion.h1 
          ref={ref}
          initial={{opacity : 0 , x : 150}}
          animate={isInView ? {opacity :  1 , x : 0 } : {opacity : 0 , x : 150}}
          transition={{duration : 0.5}}
          className="md:text-5xl xs:text-[22px] m-4 font-bold"> Our Features</motion.h1>
          <hr className="ml-4" />
          <motion.div 
          ref={ref} 
          initial = {{opacity :0.5}}
          animate = {isInView ? {opacity : 1} : {opacity : 0.5}}
          transition={{duration : 0.5}}
          className="flex flex-col mt-8 md:px-4 xs:px-1">
            <div className="flex md:flex-row xs:flex-col md:space-x-5 xs:space-x-0">
              <div className="md:w-3/6 xs:w-full bg-[#1B1C16] my-6 p-4 flex flex-col justify-start border border-solid rounded-xl hover:bg-purple-950 grayscale hover:grayscale-0">
                <Image
                  src="/new-events-1.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="md:text-xl xs:text-lg font-bold mt-4 mb-4">
                  Urapakkam Trail Marathon Bliss
                </h1>
                <p className="md:text-[16px] xs:text-sm">
                  Exploring lakes and trails around Urapakkam that goes through
                  bush forests and sleepy villages. The trails run through rural
                  areas around suburbs of south Chennai that are aimed to
                  promote trail running in spirit
                </p>
              </div>
              <div className="md:w-3/6 xs:w-full bg-[#1B1C16] my-6 p-4 flex flex-col justify-start border border-solid rounded-xl hover:bg-purple-950 grayscale hover:grayscale-0">
                <Image
                  src="/new-events-3.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="md:text-xl xs:text-lg font-bold mt-4 mb-4">
                  Adyar River Bank Trail
                </h1>
                <p className="md:text-[16px] xs:text-sm">
                  Nestled in the heart of the Chennai city, Adyar river bank is
                  a 3km trail that runs alongside Adyar river. It is a go-to
                  place for trail runners for Chennai who seek to run in a
                  peaceful and serene environment
                </p>
              </div>
            </div>
            <div className="flex md:flex-row xs:flex-col md:space-x-5 xs:space-x-0">
              <div className="md:w-3/6 xs:w-full bg-[#1B1C16] my-6 p-4  flex flex-col flex-1 justify-start border border-solid rounded-xl hover:bg-purple-950 grayscale hover:grayscale-0">
                <Image
                  src="/new-events-3.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="md:text-xl xs:text-lg font-bold mt-4 mb-4">Weekend events</h1>
                <p className="md:text-[16px] xs:text-sm">
                  Weekends are for outdoors and we head out to the nearby
                  hills/places around chennai for running and cycling. You would
                  be meeting like minded people and sleeping under the stars in
                  such events
                </p>
              </div>
              <div className="md:w-3/6 xs:w-full bg-[#1B1C16] my-6 p-4 flex flex-col flex-1 justify-start border border-solid rounded-xl hover:bg-purple-950  grayscale hover:grayscale-0">
                <Image
                  src="/new-events-4.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="md:text-xl xs:text-lgfont-bold mt-4 mb-4">Anjur Hill Runs</h1>
                <p className="md:text-[16px] xs:text-sm">
                  Anjur hill near Chengalpet is a hill trail for 1km with an
                  elevation of 150m, where runners can do hill repeats. Doing
                  hill repeats strengthens your endurance and prepares you for
                  long ultra runs organized by Chennai Trail Club.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
