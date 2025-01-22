'use client';
import { Button } from '@/components';
import ErrorBoundary from '@/components/Error/ErrorBoundary';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Hero = ({ recentEvent, formattedDate }) => {
  const date = new Date(recentEvent.date);
  const date_today = new Date();
  return (
    <ErrorBoundary>
      <div className="z-10 xl:w-maxWidth xs:min-h-[calc(100vh+40px)] sm:h-screen w-screen flex md:flex-row xs:flex-col items-center justify-evenly box-border xs:pt-32 sm:pt-0 md:pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 xs:w-screen xs:px-4 lg:px-0 flex justify-center"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${recentEvent.eventBannerOne}`}
            alt="event logo"
            width={480}
            height={220}
            className="w-full h-full sm:mx-32 md:mx-0 lg:mx-2 sxl:mx-20 xs:mb-10 md:mb-0"
            loading="lazy"
          />
        </motion.div>
        <div className="flex flex-col md:w-1/2 xs:w-full sm:items-center md:items-start xs:text-center md:text-start max-w-[644px] lg:pr-7 box-content">
          <motion.h1
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-5xl lg:text-[56px] xs:text-[26px] font-extrabold xs:mt-6 md:mt-0"
          >
            {recentEvent?.name} <br className="lg:hidden xl:block xs:block" />
            {`(${recentEvent?.shortName})`}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-wrap sm:leading-snug xs:text-[16px] md:text-lg font-manrope text-white lg:tracking-wide xl:w-4/5 max-w-[500px] mt-6"
          >
            {recentEvent?.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold lg:text-lg font-manrope xs:text-[16px] max-w-[500px] mt-6"
          >
            Event date:
            <span className="font-normal">{formattedDate}</span>
          </motion.div>
          {date_today > date && (
            <div className="font-bold text-white lg:text-lg font-manrope xs:text-[16px] max-w-[500px] mt-6">
              Registration for this event is closed
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 xs:w-full flex md:justify-start xs:justify-center mt-6 xs:mb-10 md:mb-0"
          >
            <Button
              title={recentEvent?.shortName}
              link={`/events/${recentEvent?.id}`}
              classname="bg-primary text-black md:text-[20px] xs:text-sm font-bold rounded-[30px] md:px-6 xs:px-3 lg:py-4 lg:px-7 hover:bg-white hover:text-black max-h-[60px] xs:w-36 xs:h-12 md:w-44"
              icon={true}
            />
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(Hero);
