'use client'
import React,{useRef} from 'react'
import { motion, useInView } from "framer-motion";
import { Button } from '.';
function RegisterButton() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once:true})
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: "100%" }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
    transition={{ duration: 0.5 }}
    className="flex items-center justify-center py-8"
  >
    <Button
      title={"Register for Jawadhu Hill Ultra (JHU-24)"}
      link={"/register"}
      classname={
        "bg-[#D0F700] text-black md:text-lg xs:text-sm font-bold rounded-3xl md:px-6 xs:px-3 py-3 mt-4 hover:bg-black hover:text-[#D0F700] max-h-[60px] md:max-w-[600px] xs:max-w-[320px]"
      }
      icon={true}
    />
  </motion.div>
  )
}

export default RegisterButton;