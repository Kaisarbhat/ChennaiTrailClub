'use client'
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function AboutUsText2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="w-full flex md:flex-row xs:flex-col  xs:items-center md:items-start md:justify-between  xs:px-4 xs:py-12 md:py-[100px] md:px-4 lg:space-x-14 xs:space-x-0  xs:text-center md:text-start 2xl:max-w-[1340px] ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="md:text-[56px] sm:text-3xl xs:text-[22px]  lg:w-1/2 md:w-full h-full  md:leading-tight font-bold xs:mb-5 md:mb-0"
      >
        Built on shared passions
      </motion.div>
      <div className="flex flex-col lg:w-1/2  md:w-4/5  xs:w-full space-y-4">
        <div className="md:font-bold xs:font-semibold md:text-[22px] xs:text-[15px]">
          Our club was founded with the vision of creating a space where
          individuals from all walks of life can come together, and share
          experiences
        </div>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="md:text-xl xs:text-sm text-[#50514c]"
        >
          We also emphasize responsible outdoor practices, encouraging
          environmental awareness and leaving no trace behind. We foster an
          inclusive and welcoming environment where friendships are formed,
          stories are shared, and memories are created.
        </motion.p>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="md:text-xl xs:text-sm text-[#50514c]"
        >
          So, if you’re ready to break free from the confines of everyday life
          and embark on incredible nature trails, we invite you to join the
          Chennai Trail Club. Together, let’s discover the beauty of nature,
          challenge ourselves, and create memories that will last a lifetime.
          Welcome to the club!
        </motion.p>
      </div>
    </div>
  );
}

export default AboutUsText2;
