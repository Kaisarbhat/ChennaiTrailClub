'use client';
import { dateFormatter } from '@/utils/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '..';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

function EventDetailsHero({ eventData }) {
  const date_today = new Date();
  const date = new Date(eventData.date);
  const formattedDate = dateFormatter(date);

  return (
    <div className="bg-black w-full flex items-center justify-center">
      <div
        className="w-full xl:w-maxWidth md:px-4 md:pt-6 md:pb-10 xs:py-10 xs:px-4 xl:px-2 flex md:flex-row-reverse xs:flex-col items-center xs:justify-center md:justify-between"
        aria-labelledby="Event Details"
        style={{
          backgroundImage: `url('	https://chennaitrailclub.in/wp-content/uploads/2023/09/events-vector-line.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      >
        <motion.div
          className="2xl:w-1/3  xs:w-full sm:w-[400px] xl:max-w-[500px]"
          initial={{ scale: 0, y: 0 }}
          animate={{ scale: 1, y: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${eventData.eventBannerThree}`}
            width={450}
            alt="Event Banner"
            height={300}
            className="w-full rounded-xl"
            loading="lazy"
          />
        </motion.div>
        <div className="md:w-3/5 xs:w-full xs:mt-12 md:mt-0 flex flex-col xs:items-center md:items-start justify-between text-lg space-y-4 xs:text-center md:text-start">
          <motion.h2
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[38px] xs:text-[26px] text-white xs:font-extrabold md:font-bold xs:leading-8 md:leading-[50px] xs:w-2/3 sm:w-full"
          >
            {eventData.name}
            <br className="xs:block sm:hidden" /> {`(${eventData.shortName})`}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-greyLight xs:text-[15px] md:text-[18px] xs:leading-6 md:leading-[28px] font-manrope"
          >
            {eventData.description}
          </motion.p>
          {date_today > date && (
            <div className="font-bold xs:text-[15px] md:text-[18px] md:mb-6 xs:mb-0 text-greyLight font-manrope">
              Registration for this event is closed
            </div>
          )}
          {eventData?.resultLink && (
            <div className="my-4 xs:hidden">
              <Button
                title={'Result'}
                link={eventData?.resultLink}
                icon={true}
                classname="bg-primary text-black py-3 px-8 text-lg font-bold rounded-3xl"
              />
            </div>
          )}
          <div className="xs:text-sm sm:text-lg text-shade">Trail Day</div>
          <div className="md:text-2xl xs:text-[20px] text-primary font-bold flex items-center justify-center">
            <span className="mr-2 text-primary text-2xl">
              <MdOutlineCalendarMonth />
            </span>
            {formattedDate}
          </div>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-shade underline text-start flex items-center justify-center"
          >
            <span className="text-primary mr-2 text-2xl">
              <FaLocationDot />
            </span>
            <Link
              className="text-shade xs:text-sm hover:text-primary sm:text-lg font-medium"
              href={eventData.locationUrl}
            >
              {eventData.location}
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(EventDetailsHero);
