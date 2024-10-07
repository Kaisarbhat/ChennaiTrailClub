import Image from "next/image";
import { Button } from ".";
import { eventData } from "@/utils/constants";
function UpcoimigEventsCard() {
  return (
    <div className="flex md:flex-row xs:flex-col md:justify-between xs:justify-center  md:w-1/2 sm:w-full xs:w-full  md:px-0 xs:px-4">
      <div className="border border-solid hover:shadow-mine hover:border-[#7328f6]  rounded-xl  flex sm:flex-row  lg:flex-col  xs:flex-col md:justify-between p-3 md:space-x-3  xs:space-x-0 my-6 min-h-52 sm:space-y-0 xs:space-y-3 ">
        <Image
          src={eventData.banner}
          width={200}
          height={400}
          className="h-full w-full  sm:h-48 rounded-md"
        />

        <div className="flex flex-col space-y-3  space-x-3 justify-between ml-1">
          <h1 className="text-2xl">{eventData.eventName}{" "}{eventData.eventAbbr}</h1>

          <a className="text-[16px] underline text-[#50514c]" href="">
            <i class="bi bi-geo-alt-fill text-[#D0F700] "></i> {eventData.eventLocation}
          </a>
          <div className="text-[16px]  text-[#50514c]">
            <i class="bi bi-calendar3 text-[#D0F700]"></i> {eventData.eventDate}
          </div>
          <Button
            title={"Register"}
            link={"/register"}
            classname={
              "text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-[170px] hover:bg-[#D0F700] font-bold hover:text-black"
            }
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default UpcoimigEventsCard;
