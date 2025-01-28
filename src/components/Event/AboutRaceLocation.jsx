'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

function AboutRaceLocation({ eventData }) {
  const { heading, middleImageUrl, text } = eventData;
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="bg-primaryExtraLight w-full flex justify-center items-center "
      aria-labelledby="Race Location Details"
    >
      <div className="xl:w-maxWidth xs:px-4 xs:py-12 md:py-5">
        <h1 className="md:text-5xl xs:text-[22px] text-black font-extrabold text-center pb-8">
          {heading}
        </h1>
        <div className="flex md:flex-row xs:flex-col justify-center xs:items-center 2xl:items-center md:items-start w-full md:gap-10 lg:gap-20">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5 }}
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${middleImageUrl}`}
            alt={middleImageUrl}
            width={520}
            height={510}
            className="md:w-45 xs:w-full xs:my-4 md:my-0 max-w-[520px] max-h-[508px]"
          />
          <div className="text-blackLight text-[16px] font-manrope md:space-y-4 flex flex-col xs:mt-4 md:mt-0 md:text-start xs:text-center xs:leading-[27px] max-w-[644px]">
            {text && text.length ? (
              text.map((item, index) => (
                <p
                  className="xs:mt-4 md:mt-0 font-normal  max-w-[540px]"
                  key={index}
                >
                  {item}
                </p>
              ))
            ) : (
              <div>No Text</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AboutRaceLocation);
