
import Image from "next/image";
import { motion } from "framer-motion";

function EventDetailsHero() {
    
  return (
    <div className="bg-[#070802] w-full 2xl:px-64 md:px-4 md:py-14 xs:py-4 xs:px-4  xs:pt-16 flex md:flex-row-reverse  xs:flex-col items-center  xs:justify-center md:justify-between overflow-hidden">
      <div className="2xl:w-1/3 md:w-1/2 xs:w-full xs:px-10 md:px-0">
        <Image
          src="/JHU-2024-Event.jpg"
          width={450}
          height={300}
          className="w-full  rounded-xl"
          layout="responsive"
        />
      </div>
      <div className=" md:w-1/2 xs:w-full xs:mt-12 md:mt-0 flex flex-col xs:items-center md:items-start justify-between text-lg space-y-4 xs:text-center md:text-start">
        <motion.h2
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-[38px] xs:text-[26px] text-white md:font-bold leading-snug xs:w-2/3  md:w-full"
        >
          Jawadhu Hills Ultra
          <br className="xs:block md:hidden" /> (JHU-24)
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#FFFFFFBF] xs:text-[15px] md:text-xl xs:px-2 md:px-0"
        >
          Jawadhu Hills Ultra is back! Experience the most scenic trails in the
          Eastern Ghats, weaving through the pristine hills of Jawadhu range.
          Challenge yourself on diverse terrains, enjoy breathtaking vistas, and
          immerse in the natural beauty
        </motion.p>
        <div className="xs:text-[14px]">Trail Day</div>
        <div className="md:text-2xl xs:text-[20px] text-[#d0f700] font-bold">
          <i class="bi bi-calendar3 mr-2"></i>November 09, 2024 (Saturday)
        </div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#FFFFFFA6] underline"
        >
          <span className="text-[#d0f700] mr-2">
            <i class="bi bi-geo-alt-fill"></i>
          </span>
          <a
            className="text-[#FFFFFFA6] xs:text-[14px] hover:text-[#d0f700]"
            href="https://maps.app.goo.gl/oA6V8JTCUffSKoXSA"
          >
            St.Joseph Higher Secondary School, Jamunamarathur
          </a>{" "}
          <i class="bi bi-arrow-up-right"></i>
        </motion.div>
      </div>
    </div>
  );
}

export default EventDetailsHero;
