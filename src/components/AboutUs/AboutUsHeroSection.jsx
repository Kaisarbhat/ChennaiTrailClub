'use Client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const AboutUsHeroSection = React.memo(({ imageUrl }) => {
  return (
    <div className="relative  flex rounded-lg overflow-clip xs:h-[350px] lg:h-[600px] lg:w-[1024px] sxl:w-[1200px] xl:[w-1340px] 2xl:w-[1340px] ">
      <Image
        src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${imageUrl}`}
        alt="About hero"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="w-full"
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col md:justify-end xs:justify-end xs:w-full text-white xs:mb-4 sm:mb-10 md:ml-6 xs:ml-0 lg:ml-0 px-14"
      >
        <h1 className="sm:text-[40px] xs:text-[26px] lg:text-[56px] font-urbanist font-bold lg:mb-7 sm:mb-0 xs:mb-3">
          About Us
        </h1>
        <p className="sm:font-medium xs:font-medium sm:text-[26px] lg:text-xl font-manrope lg:font-semibold xs:text-[15px] md:leading-loose sm:leading-relaxed xs:leading-5 mb-4 sm:w-full md:w-4/5 lg:w-1/2 xl:w-1/3 ">
          We are a passionate community of outdoor running, hiking, swimming and
          exploration.
        </p>
      </motion.div>
      <ToastContainer />
    </div>
  );
});

export default AboutUsHeroSection;
