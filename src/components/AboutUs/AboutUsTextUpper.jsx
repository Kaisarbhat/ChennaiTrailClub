'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const AboutUsTextUpper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="w-full flex justify-center items-center box-border xs:px-4 md:px-0 lg:px-10 xs:py-12 sxl:py-[100px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: '-100%' }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
        transition={{ duration: 1 }}
        className="flex xs:flex-col md:flex-row justify-between items-center xl:w-maxWidth xs:text-center md:text-start"
      >
        <h1 className=" xs:text-[22px] md:text-[56px] font-bold lg:leading-[61px] text-wrap xs:leading-6 md:leading-none md:w-1/2">
          We believe in
          <br className="xl:block xs:hidden " /> transformative power of{' '}
          <br className="xs:hidden lg:block sxl:hidden" />
          individuals
        </h1>
        <p className="xs:text-center md:text-start md:text-xl xs:text-sm xs:leading-[22px] text-blackLight xs:w-full sm:w-[440px] xl:w-2/5 2xl:w-1/3 lg:leading-[34px]  xs:mt-5 lg:mt-0 xs:px-4 sm:px-0">
          We are a passionate community of outdoor enthusiasts who share a
          common love for trail running, hiking, swimming and exploration.
        </p>
      </motion.div>
    </div>
  );
};

export default React.memo(AboutUsTextUpper);
