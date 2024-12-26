"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const RecentActivities = ({ images, mobileImages }) => {
  const renderLayoutContent = (item) => {
    switch (item.layout) {
      case "single":
        return (
          <div className="grid-item single-image">
            <Image
              src={item.content[0].imageUrl}
              alt={`single-image-${item.key}`}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        );

      case "complex":
        return (
          <div className="grid-item complex-layout grid grid-cols-2 gap-[15px] ">
            <div className="col-span-2">
              <Image
                src={item.content[0].imageUrl}
                alt={`main-image-${item.key}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src={item.content[1].imageUrl}
                alt={`sub-image-1-${item.key}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src={item.content[2].imageUrl}
                alt={`sub-image-2-${item.key}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        );

      case "stacked":
        return (
          <div className="grid-item stacked-layout grid grid-cols-1 gap-[17px]">
            {item.content.map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc.imageUrl}
                width={1000}
                height={1000}
                alt={`stacked-image-${item.key}-${index}`}
                className="w-full object-cover rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };
  const recentActivitiesData = [
    {
      key: "1",
      layout: "single",
      content: [images[0]],
    },
    {
      key: "2",
      layout: "complex",
      content: [images[1], images[2], images[3]],
    },
    {
      key: "3",
      layout: "stacked",
      content: [images[4], images[5]],
    },
    {
      key: "4",
      layout: "single",
      content: [images[6]],
    },
    {
      key: "5",
      layout: "complex",
      content: [images[7], images[8], images[9]],
    },
    {
      key: "6",
      layout: "stacked",
      content: [images[10], images[11]],
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startIndex, setStartIndex] = useState(0);
  const moveForward = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % recentActivitiesData.length);
  };

  const moveBackward = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + recentActivitiesData.length) %
        recentActivitiesData.length
    );
  };

  const visibleComponents = [
    recentActivitiesData[startIndex % recentActivitiesData.length],
    recentActivitiesData[(startIndex + 1) % recentActivitiesData.length],
    recentActivitiesData[(startIndex + 2) % recentActivitiesData.length],
  ];

  const updateCarousel = (index) => {
    setStartIndex(
      (index + recentActivitiesData.length) % recentActivitiesData.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateCarousel(startIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const showImg = () => {
    document.querySelector(".last_img").style.display = "flex";
    document.querySelector(".show_btn").style.display = "none";
  };

  return (
    <div
      className="w-full xl:h-screen md:h-auto xs:h-auto md:px-4  xs:px-4 lg:py-10   xs:py-8 md:mt-32 xs:mt-24 flex flex-col xs:justify-start md:justify-center lg:items-center bg-[#F6FFC7]"
      role="regiom"
      aria-labelledby="recent activities "
    >
      <div className="xl:max-w-[1340px] lg:w-full md:w-full xs:w-full">
        <div className="flex  justify-between ">
          <div className="lg:w-1/2 md:w-full xs:w-full xs:py-10  lg:py-0 ">
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -150 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }
              }
              transition={{ duration: 0.5 }}
              className="md:text-[56px] xs:text-[26px] font-bold mb-2 xs:text-center md:text-start"
            >
              Recent Activities
            </motion.h1>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, x: "-100%" }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }
              }
              transition={{ duration: 0.5 }}
              className="text-[#50514C] md:text-lg xs:text-[16px] md:text-start xs:text-center"
            >
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
              <i className="bi bi-arrow-left-circle"></i>
            </button>
            <button
              className=" py-2  text-gray-500 hover:text-black text-5xl  rounded-full"
              onClick={moveForward}
            >
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
        <div className="w-full md:h-2/3 flex md:flex-nowrap mt-4">
          <div className="w-full xl:h-[500px] md:flex xs:hidden flex-row space-x-4 box-border ">
            {visibleComponents.map((item) => (
              <div key={item.key}>{renderLayoutContent(item)}</div>
            ))}
          </div>
        </div>

        {/* Display images on mobile phones */}
        <div className="xs:flex md:hidden flex-col items-center space-y-3 w-full">
          {mobileImages.slice(0, 3).map((item, index) => (
            <img
              key={index}
              src={item.imageUrl}
              alt={item.alt}
              className="rounded-lg  xs:h-[180px] sm:h-full w-full"
            />
          ))}

          <button
            className="border border-[#070802] border-solid rounded-3xl py-2 px-4 text-sm text-[#070802] font-bold show_btn"
            onClick={showImg}
          >
            Show more
          </button>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            src={mobileImages[3]?.imageUrl}
            alt={mobileImages[3]}
            className=" hidden rounded-lg xs:h-[180px] sm:h-full w-full last_img"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
