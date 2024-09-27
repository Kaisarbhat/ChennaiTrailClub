"use client";
import Image from "next/image";
import React, { useRef } from "react";
import EventInfo from "@/components/eventInfo";
import { Button } from "@/components";
import { motion ,useInView} from "framer-motion";

const EventDetails = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div className="py-16 text-[#50514C]" >
      <div className="bg-[#070802] w-full 2xl:px-64 md:px-4 md:py-14 xs:py-4 xs:px-4  xs:pt-16 flex md:flex-row-reverse  xs:flex-col items-center  xs:justify-center md:justify-between overflow-hidden">
        
      <div className="2xl:w-1/3 md:w-1/2 xs:w-full xs:px-10 md:px-0">
          <Image
            src="/JHU-2024-Event.jpg"
            width={450}
            height={300}
            className="w-full  rounded-xl"
            layout="responsive"
          />
        </div>
        <div className=" md:w-1/2 xs:w-full xs:mt-12 md:mt-0 flex flex-col xs:items-center md:items-start justify-between text-lg space-y-4 xs:text-center md:text-start">
          <motion.h2 
          initial={{opacity: 0,y : '-100%'}}
          animate={ {opacity: 1,y :  0 }}
          transition={{duration : 0.5 }}
          className="md:text-[38px] xs:text-[26px] text-white md:font-bold leading-snug xs:w-2/3  md:w-full">
            Jawadhu Hills Ultra<br className="xs:block md:hidden" /> (JHU-24)
          </motion.h2>
          <motion.p 
          initial={{opacity: 0,x : '-100%'}}
          animate={{opacity: 1,x : 0 }}
          transition={{duration : 0.5 }}
          className="text-[#FFFFFFBF] xs:text-[15px] md:text-xl xs:px-2 md:px-0">
            Jawadhu Hills Ultra is back! Experience the most scenic trails in
            the Eastern Ghats, weaving through the pristine hills of Jawadhu
            range. Challenge yourself on diverse terrains, enjoy breathtaking
            vistas, and immerse in the natural beauty
          </motion.p>
          <div className="xs:text-[14px]">Trail Day</div>
          <div className="md:text-2xl xs:text-[20px] text-[#d0f700] font-bold">
            <i class="bi bi-calendar3 mr-2"></i>November 09, 2024 (Saturday)
          </div>
          <motion.div 
          initial={{opacity: 0,y : '100%'}}
          animate={{opacity: 1,y : 0  } }
          transition={{duration : 0.5 }}
          className="text-[#FFFFFFA6] underline">
            <span className="text-[#d0f700] mr-2">
              <i class="bi bi-geo-alt-fill"></i>
            </span>
            <a className="text-[#FFFFFFA6] xs:text-[14px] hover:text-[#d0f700]" href="https://maps.app.goo.gl/oA6V8JTCUffSKoXSA">St.Joseph Higher Secondary School, Jamunamarathur</a> {" "}
            <i class="bi bi-arrow-up-right"></i>
          </motion.div>
        </div>
        
      </div>
      <div className="flex  flex-col justify-center items-center md:py-8 md:px-4  w-full">
        <div className="2xl:w-[1340px] md:px-0 xs:px-0">
          <h2 className="text-[22px] text-black font-bold my-4 ml-10 md:hidden">Things to know</h2>
          <EventInfo />
        </div>
        <motion.div 
        ref={ref}
        initial={{opacity : 0, y : '100%'}}
        animate={isInView ? {opacity :  1 ,y: 0 } : {opacity : 0, y : '100%'}}
        transition={{duration : 0.5 }}
        className="flex items-center justify-center py-8">
          <Button
            title={"Register for Jawadhu Hill Ultra (JHU-24)"}
            link={"/register"}
          />
        </motion.div>
        <div className="bg-[#F6FFC7] my-10">
          <div className="2xl:w-[1340px]  md:py-4 lg:py-8 xs:py-8">
            <h1 className="md:text-5xl xs:text-[22px] text-[#070802] font-bold text-center mb-6">
              About Race Location
            </h1>
            <div className="flex md:flex-row xs:flex-col justify-between 
            xs:items-center 2xl:items-center md:items-start 2xl:space-x-10 md:space-x-4 xs:space-x-0 p-3 w-full">

                 <motion.img 
                 ref={ref}
                 initial={{opacity : 0, scale: 0}}
                 animate={isInView ? {opacity : 1  , scale : 1} : {opacity : 0, scale: 0}}
                 transition={{duration : 0.5 }}
                 src="/trails-img.png" width={520} height={510} 
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
        <div className="2xl:w-[1340px] py-20 flex md:flex-row xs:flex-col-reverse items-center justify-center md:space-x-20 xs:space-x-0">
          <div className="text-[#070802] text-[16px] md:w-1/2  xs:w-full xs:flex xs:flex-col xs:items-center xs:px-1 md:px-0">
            <motion.h1 
            ref={ref}
            initial={{opacity : 0, y : '-100%'}}
            animate={isInView ? {opacity : 1  , y : 0 } : {opacity : 0, y : '-100%'}}
            transition={{duration : 0.5 }}
            className="md:text-5xl xs:text-[22px] font-bold mb-4 ">Maintaining Cleanliness</motion.h1>
            <motion.p 
            ref={ref}
            initial={{opacity : 0, x : '-100%'}}
            animate={isInView ? {opacity :1  , x : 0 } : {opacity : 0, x : '-100%'}}
            transition={{duration : 0.5 }}
            className="mb-4 2xl:w-4/5 md:w-full xs:w-full leading-6 xs:text-center md:text-start md:text-[16px] xs:text-sm">
              Runners are advised not to throw any cups, wrappers
              (chocolate/gels), other waste either on the trail or inside water
              bodies. Use the waste bins kept near the refreshment points.
              Sholavaram tank is one of the well maintained tank and major
              supplier of drinking water to the people of Chennai city.
              Therefore, requesting the cooperation from the runners to maintain
              the cleanliness of the tank and the trail.
            </motion.p>
            <div className="bg-[#FFF1F1] my-4 lg:w-2/3 xs:w-full md:w-full text-center p-2 rounded-lg md:text-[16px] xs:text-sm">
              <i class="bi bi-exclamation-triangle-fill text-[#f86b6b] mr-2"></i>{" "}
              Please note that barefoot running is not recommended.
            </div>
          </div>
          <div className="flex">
            <motion.img
              ref={ref}
              initial={{opacity : 0, scale: 0}}
              animate={isInView ? {opacity : 1  , scale : 1}:{opacity : 0, scale: 0}}
              transition={{duration : 0.5 }}
              src="/clean-place-img.png"
              alt="clean-place-img"
              className="md:w-full xs:w-full"
              height={350}
              width={484}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
