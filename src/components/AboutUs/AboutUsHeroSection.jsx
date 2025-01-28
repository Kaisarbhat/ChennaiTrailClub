'use client';
import { motion } from 'framer-motion';
import React from 'react';

const AboutUsHeroSection = React.memo(({ imageUrl }) => {
  return (
    <div
      className="relative flex flex-col w-full xs:rounded lg:rounded-[14px] xs:h-[350px] sm:h-[750px] md:h-[790px] lg:h-[450px] sxl:h-[578px] sxl:w-[1200px] xl:w-maxWidth box-border overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_S3_BUCKET}/${imageUrl})`,
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-y-0 left-0 xs:w-1/4 lg:w-4/5 bg-gradient-to-r from-black to-transparent xs:rounded lg:rounded-[14px]"
        aria-hidden="true"
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col justify-end h-full w-full text-white xs:p-8 sm:p-20"
      >
        <h1 className="sm:text-[40px] xs:text-[26px] lg:text-[56px] font-urbanist font-bold">
          About Us
        </h1>
        <p className="xs:font-medium sm:text-[26px] lg:text-xl xs:mt-3 lg:mt-4 font-manrope lg:font-normal xs:text-[15px] md:leading-loose lg:leading-[34px] sm:leading-[41px] xs:leading-5 sm:w-full md:w-4/5 lg:w-4/5 xl:w-1/3">
          We are a passionate community of outdoor running, hiking, swimming and
          exploration.
        </p>
      </motion.div>
    </div>
  );
});

export default AboutUsHeroSection;
