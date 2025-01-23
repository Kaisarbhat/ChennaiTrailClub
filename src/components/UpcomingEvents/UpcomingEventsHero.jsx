'use client';
import { dateFormatter } from '@/utils/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { Button } from '..';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

function UpcomingEventsHero({ data }) {
  const [eventData] = data;
  const date = new Date(eventData.date);
  const formattedDate = dateFormatter(date);
  return (
    <section
      className="bg-black xs:min-h-[100vh] sm:min-h-[71vh] md:min-h-[100vh] text-white box-border flex flex-col pt-12 md:px-4 font-urbanist items-center justify-between"
      aria-labelledby="hero-title"
    >
      <div className="flex md:flex-row xs:flex-col md:space-x-8 xs:space-x-0 xs:text-center md:text-start xl:w-maxWidth xs:mt-14">
        <div className="flex flex-col text-wrap md:w-3/5 xs:w-full">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[38px] xs:text-[20px] leading-tight"
          >
            {eventData.name} {eventData.shortName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-lg xs:text-[16px] text-greyLight leading-normal mt-4 font-manrope"
          >
            {eventData.description}
          </motion.p>
        </div>

        <div className="flex flex-col xs:items-center md:items-start mb-10 md:mt-0 xs:mt-8 md:space-y-3 xs:space-y-0">
          <time
            className="md:text-lg xs:text-[14px] text-greyLight"
            dateTime={eventData.date}
          >
            <span className="text-primary mr-1">
              <MdOutlineCalendarMonth />
            </span>
            {formattedDate}
          </time>

          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="md:text-[18px] xs:text-[16px] text-shade underline mt-8 hover:text-primary"
              href={eventData.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View location: ${eventData.location}`}
            >
              <span className="text-primary mr-1">
                <CiLocationOn />
              </span>
              {eventData.location}
              <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </Link>
          </motion.div>

          <Button
            title="View Details"
            link={`/events/${eventData?.id}`}
            classname="md:text-xl xs:text-sm border border-solid mt-3 text-greyLight rounded-3xl p-2 w-[150px] font-bold hover:text-white"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-1/2 rounded-lg xs:px-2 md:px-0 md:mt-8 xs:mt-0 max-w-[1340px] xs:mb-4 md:mb-6 lg:mb-10"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${eventData.eventBannerTwo}`}
          alt={`Banner for ${eventData.name}`}
          width={1280}
          height={480}
          className="lg:w-full h-full rounded-lg"
          loading="lazy"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
        />
      </motion.div>
    </section>
  );
}

export default memo(UpcomingEventsHero);
