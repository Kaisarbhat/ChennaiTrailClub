'use client';

import { Button } from '@/components';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const HeroText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center xs:py-12 sm:py-[100px] px-4 max-w-4xl text-center">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="sm:text-[28px] xs:text-sm"
        >
          Lets Explore Together
        </motion.h1>
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.5 }}
          className="mt-2 sm:text-[56px] xs:text-[22px] font-bold sm:leading-[62px]"
        >
          Welcome to Chennai Trail Club
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 1 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-4 sm:text-xl xs:text-[16px] font-manrope text-blackLight sm:leading-[34px]"
        >
          At Chennai Trail Club, we believe in the transformative power of
          individuals who are embracing nature constantly. We are a passionate
          community of outdoor enthusiasts who share a common love for trail
          running, hiking, swimming and exploration.
        </motion.p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            title={'About Us '}
            link={'/aboutus'}
            classname="bg-primary text-black md:text-xl xs:text-sm font-bold rounded-[30px] md:px-7 xs:px-5 xs:py-[10px] py-4 mt-4 hover:bg-black hover:text-primary xs:h-10 xs:w-32 md:h-14 md:w-44"
            icon={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroText);
