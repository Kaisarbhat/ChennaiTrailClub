'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useRef } from 'react';

const TechnologyPartner = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <p className="font-bold text-white text-[12px]">OUR TECHNOLOGY PARTNER</p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-6"
      >
        <Link
          href="https://www.calibraint.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/footer-calibraint-logo.png"
            alt="Calibraint - Technology Partner"
            width={130}
            height={100}
            className="mt-4 cursor-pointer"
            loading="lazy"
          />
        </Link>
      </motion.div>
    </div>
  );
});

export default TechnologyPartner;
