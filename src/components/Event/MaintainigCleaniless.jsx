"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function MaintainigCleaniless({
  bottomHeading,
  bottomImageUrl,
  bottomText,
  warning,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="xl:w-[1340px] py-20 flex md:flex-row xs:flex-col-reverse items-center justify-center md:space-x-20 xs:space-x-0">
      <div className="text-[#070802] text-[16px] md:w-1/2  xs:w-full xs:flex xs:flex-col xs:items-center xs:px-1 md:px-0">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: "-100%" }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5 }}
          className="md:text-5xl  xs:w-full xs:text-center md:text-start xs:text-[22px] font-bold mb-4 "
        >
          {bottomHeading}
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: "-100%" }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="mb-4 xs:w-full leading-6 xs:text-center md:text-start md:text-[16px] xs:text-sm"
        >
          {bottomText}
        </motion.p>
        <div className="bg-[#FFF1F1] my-4 xs:w-full md:w-auto xs:text-center md:text-start p-2 rounded-lg md:text-[16px] xs:text-sm">
          <i className="bi bi-exclamation-triangle-fill text-[#f86b6b] mr-2"></i>{" "}
          {warning}
        </div>
      </div>
      <div className="flex">
        <motion.img
          ref={ref}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.5 }}
          src={bottomImageUrl}
          alt="clean-place-img"
          className="md:w-full xs:w-full p-3"
          height={350}
          width={484}
        />
      </div>
    </div>
  );
}

export default React.memo(MaintainigCleaniless);
