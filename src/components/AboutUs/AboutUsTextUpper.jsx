"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AboutUsTextUpper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: "-100%" }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
        transition={{ duration: 1 }}
        className="flex xs:flex-col md:flex-row justify-between items-center  md:py-[100px]  xs:px-4 md:px-0 xs:py-12 xl:max-w-[1340px] xs:text-center md:text-start"
      >
        <h1 className="md:text-[56px]   xs:text[22px] font-bold lg:leading-tight text-wrap xs:leading-loose md:leading-none">
          We believe in
          <br className="xl:block xs:hidden " /> transformative power of
          <br className="xs:hidden 2xl:block" />
          individuals
        </h1>
        <p className="xs:text-center md:text-start  md:text-xl xs:text-sm leading-normal text-[#50514c] xl:w-2/5 2xl:w-1/3 2xl:leading-loose">
          We are a passionate community of outdoor enthusiasts who share a
          common love for trail running, hiking, swimming and exploration.
        </p>
      </motion.div>
    </div>
  );
};

export default React.memo(AboutUsTextUpper);
