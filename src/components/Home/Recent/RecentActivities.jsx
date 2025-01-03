"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const RecentActivities = ({ images, mobileImages }) => {
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

  const renderLayoutContent = (item) => {
    switch (item.layout) {
      case "single":
        return (
          <div className="grid-item single-image h-full relative">
            <div className="absolute inset-0">
              <Image
                src={item.content[0].imageUrl}
                alt={`single-image-${item.key}`}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        );

      case "complex":
        return (
          <div className="grid-item complex-layout grid grid-rows-2 gap-4 h-full">
            <div className="relative w-full h-full">
              <Image
                src={item.content[0].imageUrl}
                alt={`main-image-${item.key}`}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative w-full h-full">
                <Image
                  src={item.content[1].imageUrl}
                  alt={`sub-image-1-${item.key}`}
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full h-full">
                <Image
                  src={item.content[2].imageUrl}
                  alt={`sub-image-2-${item.key}`}
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );

      case "stacked":
        return (
          <div className="grid-item stacked-layout grid grid-rows-2 gap-4 h-full">
            <div className="relative w-full h-full">
              <Image
                src={item.content[0].imageUrl}
                alt={`stacked-image-${item.key}-0`}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src={item.content[1].imageUrl}
                alt={`stacked-image-${item.key}-1`}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
    <div className="w-screen h-[70vh] md:h-auto xs:h-auto md:px-4 xs:px-4 lg:py-10 xs:py-8 md:mt-32 xs:mt-24 flex flex-col xs:justify-start md:justify-center lg:items-center bg-[#F6FFC7]">
      <div className="xl:max-w-[1340px] xs:w-full">
        <div className="flex justify-between">
          <div className="lg:w-1/2 md:w-full xs:w-full xs:py-10 lg:py-0">
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
              We're thrilled to present a recap of the fantastic array of recent
              activities that we've had the pleasure of organizing and
              participating in. We're excited to share our accomplishments and
              experiences with you.
            </motion.p>
          </div>
          <div className="lg:flex md:hidden xs:hidden items-end mb-6 space-x-6">
            <button
              className="px-3 py-2 text-gray-500 hover:text-black text-5xl"
              onClick={moveBackward}
            >
              <i className="bi bi-arrow-left-circle"></i>
            </button>
            <button
              className="py-2 text-gray-500 hover:text-black text-5xl rounded-full"
              onClick={moveForward}
            >
              <i className="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
        <div className="w-full h-[500px] md:flex xs:hidden mt-4">
          <div className="w-full h-full grid grid-cols-3 gap-4">
            {visibleComponents.map((item) => (
              <div key={item.key} className="h-full">
                {renderLayoutContent(item)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className="xs:flex md:hidden flex-col space-y-4 w-full">
          {mobileImages.slice(0, 3).map((item, index) => (
            <div key={index} className="relative w-full h-[180px] sm:h-[240px]">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
          <div className="w-full flex justify-center items-center">
            <button
              className="w-1/3 border border-[#070802] border-solid rounded-3xl py-2 px-4 text-sm text-[#070802] font-bold show_btn"
              onClick={showImg}
            >
              Show more
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden relative w-full h-[180px] sm:h-[240px] last_img"
          >
            <Image
              src={mobileImages[3]?.imageUrl}
              alt={mobileImages[3]?.alt || "recent-images-4"}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecentActivities);
