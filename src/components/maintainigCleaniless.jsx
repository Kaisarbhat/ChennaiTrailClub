'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function MaintainigCleaniless() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once :true});
  return (
    <div className="2xl:w-[1340px] py-20 flex md:flex-row xs:flex-col-reverse items-center justify-center md:space-x-20 xs:space-x-0">
          <div className="text-[#070802] text-[16px] md:w-1/2  xs:w-full xs:flex xs:flex-col xs:items-center xs:px-1 md:px-0">
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: "-100%" }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
              }
              transition={{ duration: 0.5 }}
              className="md:text-5xl xs:text-[22px] font-bold mb-4 "
            >
              Maintaining Cleanliness
            </motion.h1>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, x: "-100%" }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }
              }
              transition={{ duration: 0.5 }}
              className="mb-4 2xl:w-4/5 md:w-full xs:w-full leading-6 xs:text-center md:text-start md:text-[16px] xs:text-sm"
            >
              Runners are advised not to throw any cups, wrappers
              (chocolate/gels), other waste either on the trail or inside water
              bodies. Use the waste bins kept near the refreshment points.
              Sholavaram tank is one of the well maintained tank and major
              supplier of drinking water to the people of Chennai city.
              Therefore, requesting the cooperation from the runners to maintain
              the cleanliness of the tank and the trail.
            </motion.p>
            <div className="bg-[#FFF1F1] my-4 lg:w-2/3 xs:w-full md:w-full text-center p-2 rounded-lg md:text-[16px] xs:text-sm">
              <i class="bi bi-exclamation-triangle-fill text-[#f86b6b] mr-2"></i>{" "}
              Please note that barefoot running is not recommended.
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
              src="/clean-place-img.png"
              alt="clean-place-img"
              className="md:w-full xs:w-full"
              height={350}
              width={484}
            />
          </div>
        </div>
  )
}

export default MaintainigCleaniless