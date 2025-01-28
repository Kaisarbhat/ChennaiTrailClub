'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

function MaintainigCleaniless({ eventData }) {
  const { bottomHeading, bottomImageUrl, bottomText, warning } = eventData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="xl:w-maxWidth lg:w-full xs:py-12 md:py-20 xs:px-4 overflow-x-hidden mb-[70px]">
      <div className="xs:flex  md:flex-row-reverse xs:flex-col xs:items-center md:items-baseline justify-center lg:hidden">
        <div className="text-black text-[16px] md:w-1/2  xs:w-full xs:flex xs:flex-col xs:items-center">
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, y: '-100%' }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '-100%' }
            }
            transition={{ duration: 0.5 }}
            className="md:text-5xl xs:w-full xs:text-center md:text-start xs:text-[22px] font-extrabold"
          >
            {bottomHeading}
          </motion.h3>
          <motion.img
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5 }}
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${bottomImageUrl}`}
            alt="clean-place-img"
            className="md:w-full xs:w-full xs:my-4 md:my-0"
            height={350}
            width={484}
          />
        </div>
        <div className="font-manrope text-black flex flex-col justify-center items-center xs:w-full md:w-1/2">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: '-100%' }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }
            }
            transition={{ duration: 0.5 }}
            className="xs:my-4 xs:w-full xs:leading-6 md:leading-[27px] xs:text-center md:text-start md:text-[16px] xs:text-sm max-w-[566px]"
          >
            {bottomText}
          </motion.p>
          <div className="md:text-[16px] xs:text-[13px] flex items-center xs:justify-center md:justify-start w-full font-urbanist ">
            <div className="bg-roseLighter flex items-center max-w-[386px] xs:mt-6 xs:px-4 xs:py-[10px] rounded-[10px]">
              <i className="bi bi-exclamation-triangle-fill text-rose mr-2 text-2xl"></i>
              <p>{warning}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:hidden w-full flex-row-reverse justify-between lg:flex lg:gap-3">
        <div className="text-black text-[16px] w-1/2 max-w-[484px]">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.5 }}
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${bottomImageUrl}`}
            alt="clean-place-img"
            className="w-full"
            height={350}
            width={484}
          />
        </div>
        <div className="font-manrope text-black flex flex-col items-center max-w-[629px]">
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, y: '-100%' }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '-100%' }
            }
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold"
          >
            {bottomHeading}
          </motion.h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: '-100%' }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }
            }
            transition={{ duration: 0.5 }}
            className="mt-4 leading-[27px] text-start text-[16px] max-w-[566px]"
          >
            {bottomText}
          </motion.p>
          <div className="md:text-[16px] flex items-center md:justify-start w-full font-urbanist mt-6">
            <div className="bg-roseLighter flex items-center max-w-[464px] rounded-[10px] px-4 py-[10px]">
              <i className="bi bi-exclamation-triangle-fill text-rose mr-2 text-2xl"></i>
              <p>{warning}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MaintainigCleaniless);
