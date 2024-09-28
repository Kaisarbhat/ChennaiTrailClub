"use client"

//import {EventInfo,EventDetailsHero,AboutRaceLocation,RegisterButton,MaintainigCleaniless} from '../../components/index'
import EventInfo from "@/components/eventInfo";
import EventDetailsHero from "@/components/eventDetailsHero";
import AboutRaceLocation from "@/components/aboutRaceLocation";
import RegisterButton from "@/components/registerButton";
import MaintainigCleaniless from "@/components/maintainigCleaniless";

const JhuEventDetails = () => {
 
  return (
    <div className="py-16 text-[#50514C]">

      <EventDetailsHero />

      <div className="flex  flex-col justify-center items-center md:py-8 md:px-4  w-full">
        <div className="2xl:w-[1340px] md:px-0 xs:px-0">
          <h2 className="text-[22px] text-black font-bold my-4 ml-10 md:hidden">
            Things to know
          </h2>
          <EventInfo />
        </div>
        
        <RegisterButton/>
        <AboutRaceLocation/>
        <MaintainigCleaniless/>
      </div>
    </div>
  );
};

export default JhuEventDetails;
