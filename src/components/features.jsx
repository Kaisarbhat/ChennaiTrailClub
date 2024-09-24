"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/utils/motion";

function Features() {
  const ref =useRef();
  const isInView = useInView(ref);
  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-4/5 md:w-full flex justify-center items-center lg:m-4">
        <div className="lg:w-4/5 md:w-full bg-black rounded-2xl md:mx-3 p-5 text-white">
          <motion.h1 
          ref={ref}
          initial={{opacity : 0 , x : 150}}
          animate={{opacity : isInView ? 1 : 0 , x : isInView ? 0 : 150}}
          transition={{duration : 0.5}}
          className="text-5xl m-4 font-bold"> Our Features</motion.h1>
          <hr className="ml-4" />
          <motion.div 
          ref={ref}
          initial = {{opacity :0.6}}
          animate = {{opacity : isInView ? 1 : 0.6}}
          transition={{duration : 0.5}}
          className="flex flex-col mt-8 px-4">
            <div className="flex lg:flex-row  space-x-5">
              <div className="lg:w-3/6 md:4/5 bg-[#1B1C16] my-6 p-3 flex flex-col justify-start border border-solid rounded-xl hover:bg-purple-950 grayscale hover:grayscale-0">
                <Image
                  src="/new-events-1.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="text-xl font-bold mt-4 mb-4">
                  Urapakkam Trail Marathon Bliss
                </h1>
                <p>
                  Exploring lakes and trails around Urapakkam that goes through
                  bush forests and sleepy villages. The trails run through rural
                  areas around suburbs of south Chennai that are aimed to
                  promote trail running in spirit
                </p>
              </div>
              <div className="lg:w-3/6 md:4/5 bg-[#1B1C16] my-6 p-3 flex flex-col justify-start border border-solid rounded-xl hover:bg-purple-950 grayscale hover:grayscale-0">
                <Image
                  src="/new-events-3.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="text-xl font-bold mt-4 mb-4">
                  Adyar River Bank Trail
                </h1>
                <p>
                  Nestled in the heart of the Chennai city, Adyar river bank is
                  a 3km trail that runs alongside Adyar river. It is a go-to
                  place for trail runners for Chennai who seek to run in a
                  peaceful and serene environment
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row  space-x-5">
              <div className="lg:w-3/6 md:4/5 bg-[#1B1C16] my-6 p-3  flex flex-col flex-1 justify-start border border-solid rounded-xl hover:bg-purple-950 grayscale hover:grayscale-0">
                <Image
                  src="/new-events-3.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="text-xl font-bold mt-4 mb-4">Weekend events</h1>
                <p>
                  Weekends are for outdoors and we head out to the nearby
                  hills/places around chennai for running and cycling. You would
                  be meeting like minded people and sleeping under the stars in
                  such events
                </p>
              </div>
              <div className="lg:w-3/6 md:4/5 bg-[#1B1C16] my-6 p-3 flex flex-col flex-1 justify-start border border-solid rounded-xl hover:bg-purple-950  grayscale hover:grayscale-0">
                <Image
                  src="/new-events-4.png"
                  alt="event image"
                  width={500}
                  height={400}
                  layout="responsive"
                  className="w-full rounded-lg "
                />
                <h1 className="text-xl font-bold mt-4 mb-4">Anjur Hill Runs</h1>
                <p>
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
