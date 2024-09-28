'use client'
import React,{useRef} from 'react'
import { motion ,useInView } from 'framer-motion';
function AboutRaceLocation() {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-[#F6FFC7] my-10">
    <div className="2xl:w-[1340px]  md:py-4 lg:py-8 xs:py-8">
      <h1 className="md:text-5xl xs:text-[22px] text-[#070802] font-bold text-center mb-6">
        About Race Location
      </h1>
      <div
        className="flex md:flex-row xs:flex-col justify-between 
      xs:items-center 2xl:items-center md:items-start 2xl:space-x-10 md:space-x-4 xs:space-x-0 p-3 w-full"
      >
        <motion.img
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.5 }}
          src="/trails-img.png"
          width={520}
          height={510}
          className="md:w-1/2 xs:w-full"
        />

        <div className="text-[#50514C] text-[16px] lg:space-y-6 md:space-y-3 flex flex-col xs:mt-4 md:mt-0  md:text-start xs:text-center">
          <p>
            Jawadhu Hill Ultra is an Ultra Trail Marathon is organized by
            Chennai Trail Club in the hills of Jawadhu Hills (Eastern
            ghats). Chennai Trail club is a group of fitness enthusiasts
            who are passionate about long distance running. Through this
            Ultra running, we are providing an opportunity and experience
            to run through the trails, streams, farms and by the hamlet of
            Jawadhu hills.
          </p>
          <p>
            The Jawadhu Hills is an extension of the Eastern Ghats spread
            across parts of Vellore, Tirupattur and Tiruvannamalai
            districts in the northern part of the state of Tamil Nadu in
            south-eastern India.
          </p>
          <p>
            Jamanamarathur is one of the larger villages in these hills,
            populated with around 10,000. With an altitude of 857m, it is
            the second village in height in Jawadhu hills in Tiruvannamali
            district.
          </p>
          <p>One can reach Jamanamarathur from</p>
          <p>West - Tirupattur or Vaniyambadi</p>
          <p>East - Polur</p>
          <p>Northeast - Vellore</p>
          <p>South - Chengam</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutRaceLocation