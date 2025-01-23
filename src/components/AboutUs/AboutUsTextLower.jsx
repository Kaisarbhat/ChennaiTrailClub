'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

function AboutUsTextLower() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="w-full flex md:flex-row text-black xs:flex-col xs:items-center md:items-start md:justify-center xs:px-4 xs:py-12 md:py-[100px] md:px-4 xs:text-center md:text-start xl:w-maxWidth overflow-hidden"
      aria-labelledby="Abous us Text"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="md:text-[56px] sm:text-3xl xs:text-[22px] lg:w-1/2 md:w-full h-full md:leading-[61px] font-bold"
      >
        Built on shared
        <br className="lg:flex xs:hidden" /> passions
      </motion.div>
      <div className="flex flex-col lg:w-1/2 xs:w-full xs:space-y-[14px] md:space-y-5 lg:space-y-[36px] xs:mt-5 md:mt-[22px] lg:mt-0">
        <div className="md:font-bold xs:font-semibold md:text-[22px] xs:text-[15px] xs:leading-[22px] lg:leading-8">
          Our club was founded with the vision of creating a space where
          individuals from all walks of life can come together, and share
          experiences
        </div>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="md:text-xl xs:text-sm text-blackLight xs:font-normal xs:leading-6 md:leading-[34px] font-manrope"
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
          className="md:text-xl xs:text-sm text-blackLight xs:font-normal xs:leading-6 md:leading-[34px] font-manrope"
        >
          So, if you&apos;re ready to break free from the confines of everyday
          life and embark on incredible nature trails, we invite you to join the
          Chennai Trail Club. Together, let&apos;s discover the beauty of
          nature, challenge ourselves, and create memories that will last a
          lifetime. Welcome to the club!
        </motion.p>
      </div>
    </div>
  );
}

export default React.memo(AboutUsTextLower);
