"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion ,useInView} from "framer-motion";
const RecentActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [startIndex, setStartIndex] = useState(0);

  const data = [
    {
      key: "1",
      component: () => (
        <img
          src="/new-recent-activities-4.png"
          alt="new-recent-activities-4"
          className="rounded-lg"
        />
      ),
    },
    {
      key: "2",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg">
            <img
              src="/recent-activities-new-1.png"
              alt="recent-activities-new-1"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex space-x-4 ">
            <div className="w-2/4 rounded-lg">
              <img
                src="/new-recent-activities-2-1.png"
                alt="new-recent-activities-2-1"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/4 rounded-lg">
              <img
                src="/recent-activities-new-2.png"
                alt="recent-activities-new-2"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/new-recent-activities-11.png"
              alt="new-recent-activities-11"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/new-recent-activities-12.png"
              alt="new-recent-activities-12"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ),
    },
    {
      key: "4",
      component: () => (
        <img
          src="/recent-activities-new-4.png"
          alt="recent-activities-new-4"
          className="rounded-lg"
        />
      ),
    },
    {
      key: "5",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg">
            <img
              src="/new-recent-activities-7.png"
              alt="new-recent-activities-7"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex space-x-4 ">
            <div className="w-2/4 rounded-lg">
              <img
                src="/recent-activities-new-5.png"
                alt="recent-activities-new-5"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/4 rounded-lg">
              <img
                src="/new-recent-activities-9.png"
                alt="new-recent-activities-9"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "6",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/new-recent-activities-5.png"
              alt="new-recent-activities-5"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/recent-activities-new-3.png"
              alt="recent-activities-new-3"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  const moveForward = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const moveBackward = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const visibleComponents = [
    data[startIndex % data.length],
    data[(startIndex + 1) % data.length],
    data[(startIndex + 2) % data.length],
  ];

  const updateCarousel = (index) => {
    setStartIndex((index + data.length) % data.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateCarousel(startIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const showImg = () =>{
    document.querySelector('.last_img').style.display = 'flex';
    document.querySelector('.show_btn').style.display = 'none'
  }
  return (
    <div className="w-full xl:h-screen md:h-auto xs:h-auto md:px-4  xs:px-4 lg:py-10   xs:py-8 md:mt-32 xs:mt-24 flex flex-col xs:justify-start md:justify-center lg:items-center bg-[#F6FFC7] ">
      <div className="xl:max-w-[1340px] lg:w-full md:w-full xs:w-full">
      <div className="flex  justify-between ">
        <div className="lg:w-1/2 md:w-full xs:w-full xs:py-10  lg:py-0 ">
          <motion.h1 
          ref={ref}
          initial = {{opacity:0 , y:-150}}
          animate = {isInView ? {opacity : 1 , y : 0} : {opacity:0 , y:-150}}
          transition={{duration : 0.5}}
          className="md:text-[56px] xs:text-[26px] font-bold mb-2 xs:text-center md:text-start">Recent Activities
          </motion.h1>
          <motion.p 
          ref={ref}
          initial={{opacity : 0 , x : '-100%'}}
          animate = {isInView ? {opacity : 1 , x : 0} : {opacity : 0 , x : '-100%'}}
          transition={{duration : 0.5}}
          className="text-[#50514C] md:text-lg xs:text-[16px] md:text-start xs:text-center">
            We’re thrilled to present a recap of the fantastic array of recent
            activities that we’ve had the pleasure of organizing and
            participating in. We’re excited to share our accomplishments and
            experiences with you.
          </motion.p>
        </div>
        <div className="lg:flex  md:hidden xs:hidden items-end mb-6 space-x-6">
          <button
            className="px-3 py-2 text-gray-500 hover:text-black text-5xl "
            onClick={moveBackward}
          >
            <i class="bi bi-arrow-left-circle"></i>
          </button>
          <button
            className=" py-2  text-gray-500 hover:text-black text-5xl  rounded-full"
            onClick={moveForward}
          >
            <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
      <div className="w-full md:h-2/3 flex md:flex-nowrap mt-4">
        <div className="w-full xl:h-[500px] md:flex xs:hidden flex-row space-x-4 ">
          {visibleComponents.map((item) => (
            <div key={item.key}>{item.component()}</div>
          ))}
        </div>
        </div>

        {/* Display images on mobile phones */}
        <div className="xs:flex md:hidden flex-col items-center space-y-3 w-full">
            <img src="/running-activities-768x512.png" alt="running-activities-768x512" className="rounded-lg  xs:h-[180px] sm:h-full w-full"/>
            <img src="/recent-activities-new-3.png" alt="recent-activities-new-3" className="rounded-lg xs:h-[180px] sm:h-full w-full"/>
            <img src="recent-activities-new-1.png" alt="recent-activities-new-1" className="rounded-lg xs:h-[180px] sm:h-full w-full"/>
              <button className="border border-[#070802] border-solid rounded-3xl py-2 px-4 text-sm text-[#070802] font-bold show_btn" onClick={showImg}>Show more</button>
            <motion.img 
            initial={{opacity:0 , y : -100 }}
            animate = {{opacity : 1 , y : 0}}
            transition={{duration : 2}}
            src="new-recent-activities-5.png" alt="new-recent-activities-5" className=" hidden rounded-lg xs:h-[180px] sm:h-full w-full last_img"/>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
