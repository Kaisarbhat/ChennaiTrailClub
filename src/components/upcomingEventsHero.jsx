import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from ".";
import { eventData } from "@/utils/constants";
function UpcomingEventsHero() {
  return (
    <div className="bg-[#070802] xs:h-[100vh] sm:h-[71vh] md:h-[100vh] text-white box-border  flex flex-col  pt-24  md:px-4 font-serif items-center justify-center">
      <div className="flex md:flex-row xs:flex-col  md:space-x-8 xs:space-x-0 xs:text-center md:text-start max-w-[1340px] ">
        <div className="flex flex-col text-wrap md:w-3/5  xs:w-full ">
          <motion.h1
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[38px] xs:text-[20px] leading-tight"
          >
            {eventData.eventName}
            <br className="xs:hidden md:block lg:hidden" /> {eventData.eventAbbr}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-lg xs:text-[16px] text-[#ffffffbf] leading-normal mt-4 font-man"
          >
          {eventData.eventText}
          </motion.p>
        </div>
        <div className="flex flex-col xs:items-center md:items-start mb-10  md:mt-0 xs:mt-8 md:space-y-3 xs:space-y-0">
          <div className="md:text-[18px] xs:text-[14px]  text-[#ffffffbf]">
            <i class="bi bi-calendar3 text-[#D0F700] mr-1"></i> {eventData.eventDate}
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              className="md:text-[18px] xs:text-[16px]  text-[#ffffffa6] underline mt-8"
              href=""
            >
              <i class="bi bi-geo-alt-fill text-[#D0F700] mr-1 "></i>{eventData.eventLocation}{" "}
              <i class="bi bi-arrow-up-right"></i>
            </a>
          </motion.div>
          <Button
            title={"View Details"}
            link={"/jhu"}
            classname={
              "md:text-xl xs:text-sm border border-solid mt-3  text-[#ffffffbf] rounded-3xl p-2  w-[150px]  font-bold hover:text-white"
            }
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-lg xs:px-2 md:px-0 md:mt-8 xs:mt-0 max-w-[1340px]"
      >
        <Image
          src={eventData.banner}
          width={1288}
          height={440}
          className="w-full rounded-lg "
        />
      </motion.div>
    </div>
  );
}

export default UpcomingEventsHero;
