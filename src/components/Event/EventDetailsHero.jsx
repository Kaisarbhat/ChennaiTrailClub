'use client';
import { dateOptions } from '@/utils/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '..';

function EventDetailsHero({ eventData }) {
  const date_today = new Date();
  const date = new Date(eventData.date);
  const formattedDate = date.toLocaleDateString('en-Us', dateOptions);

  return (
    <div className="bg-[#070802] w-full flex items-center justify-center">
      <div
        className="w-full 2xl:max-w-[1340px] md:px-4 md:py-14 xs:py-4 xs:px-4  xs:pt-16 flex md:flex-row-reverse  xs:flex-col items-center  xs:justify-center md:justify-between"
        aria-labelledby="Event Details"
      >
        <motion.div
          className="2xl:w-1/3 md:w-1/2 xs:w-full xs:px-10 md:px-4 2xl:px-0 2xl:max-w-[500px]"
          initial={{ scale: 0, y: 0 }}
          animate={{ scale: 1, y: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${eventData.eventBannerThree}`}
            width={450}
            alt="Event Banner"
            height={300}
            className="w-full  rounded-xl"
            loading="lazy"
          />
        </motion.div>
        <div className=" md:w-1/2 xs:w-full xs:mt-12 md:mt-0 flex flex-col xs:items-center md:items-start justify-between text-lg space-y-4 xs:text-center md:text-start">
          <motion.h2
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[38px] xs:text-[26px] text-white md:font-bold leading-snug xs:w-2/3 md:w-full"
          >
            {eventData.name}
            <br className="xs:block md:hidden" /> {`(${eventData.shortName})`}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FFFFFFBF] xs:text-[15px] md:text-xl xs:px-2 md:px-0"
          >
            {eventData.description}
          </motion.p>
          {date_today > date && (
            <div className="font-bold md:mb-6 xs:mb-0">
              Registration for this event is closed
            </div>
          )}
          {eventData?.resultLink && (
            <div className="my-4">
              <Button
                title={'Result'}
                link={eventData?.resultLink}
                icon={true}
                classname={
                  'bg-[#D0F700] text-black py-3 px-8 text-lg font-bold rounded-3xl'
                }
              />
            </div>
          )}
          <div className="xs:text-[14px]">Trail Day</div>
          <div className="md:text-2xl xs:text-[20px] text-[#d0f700] font-bold">
            <i className="bi bi-calendar3 mr-2"></i>
            {formattedDate}
          </div>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FFFFFFA6] underline"
          >
            <span className="text-[#d0f700] mr-2">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <Link
              className="text-[#FFFFFFA6] xs:text-[14px] hover:text-[#d0f700]"
              href={eventData.locationUrl}
            >
              {eventData.location}
            </Link>
            <i className="bi bi-arrow-up-right"></i>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EventDetailsHero);
