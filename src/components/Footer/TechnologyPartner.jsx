"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
const TechnologyPartner = memo(({ isInView, reff }) => (
  <div>
    <p className="font-bold text-[#FCFDF8] text-[12px]">
      OUR TECHNOLOGY PARTNER
    </p>
    <motion.div
      ref={reff}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
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
));

TechnologyPartner.displayName = "TechnologyPartner";
export default TechnologyPartner;
