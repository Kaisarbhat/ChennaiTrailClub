'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

function Features({ features }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="w-full flex justify-center overflow-x-hidden"
      role="region"
      aria-labelledby="our features"
    >
      <div className=" bg-black xl:w-maxWidth xs:w-screen flex justify-center items-center xs:px-4 xs:py-5 sm:px-10 sm:py-12 md:mx-4 md:rounded-[34px] xs:rounded-none">
        <div className="xs:w-full text-white">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, x: 150 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ duration: 0.5 }}
            className="md:text-[44px] xs:text-[22px] font-bold xs:pb-4 md:pb-8"
          >
            Our Features
          </motion.h1>
          <hr className="border border-[#3E3E3E] xs:mb-5 md:mb-12 xs:mx-0 mx-2" />
          <motion.div
            ref={ref}
            initial={{ opacity: 0.5 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col"
          >
            <div className="w-full flex md:flex-row flex-wrap xs:flex-col justify-evenly gap-5">
              {features &&
                features.length &&
                features.map((item, index) => (
                  <div
                    key={index}
                    className="md:w-45 xs:w-full flex-auto p-5 flex flex-col justify-start rounded-[20px] hover:bg-secondary bg-[#1B1C16] grayscale hover:grayscale-0"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${item.imageUrl}`}
                      alt="featured events image"
                      width={500}
                      height={240}
                      className=" xs:h-[170px] sm:h-[300px] md:h-72 w-full rounded-[20px] object-cover"
                      loading="lazy"
                    />
                    <h1 className="md:text-[26px] font-urbanist text-white xs:text-lg font-bold mt-4 overflow-hidden">
                      {item.title}
                    </h1>
                    <p className="md:text-[16px] font-manrope xs:text-sm text-whiteDark xs:mt-2 md:mt-5 xs:leading-[21px] md:leading-[24px]">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Features);
