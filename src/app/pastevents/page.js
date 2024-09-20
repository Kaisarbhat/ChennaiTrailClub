import React from "react";
import Image from "next/image";
import Button1 from "../../components/button1";
const PastEvents = () => {
  return (
    <div className="pt-[100px] lg:px-64">
      <div className="text-[#070802] h-36 bg-[#DDF94A] p-6 m-6 rounded-xl flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-[20px] font-semibold text-center">
            Chennai Trail Club Past Events
          </h2>
          <p className="text-sm text-[#50514C] text-center">
            Below are events organised by our club in recent past
          </p>
        </div>
      </div>

      {/* {container} */}
      <div className="px-5">
        <div className="flex  space-x-4">
          <Button1 title={'2023'} />
          <Button1 title={'2024'}/>
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-3/6 border border-solid hover:shadow-2xl hover:shadow-violet-800  rounded-xl  flex p-3 space-x-3 my-6 min-h-72 justify-between">
            <Image src="/new-events-1.png" width={300} height={400} className="w-2/5 h-3/6" />

            <div className="flex flex-col justify-between ml-1">
              <h1 className="text-2xl">Jawadhu Hills Ultra (JHU-24)</h1>
              <div className="text-[16px]  text-[#50514c]">
                <i class="bi bi-calendar3 text-[#D0F700]"></i> 09 November 2024
                (Saturday)
              </div>
              <a className="text-[16px] underline text-[#50514c]" href="">
                <i class="bi bi-geo-alt-fill text-[#D0F700] "></i> St.Joseph
                Higher Secondary School, Jamunamarathur
              </a>
              <Button1 title={'View Details'}/>
              <Button1 title={'Results'}/>
            </div>
          </div>
          <div className="w-3/6"></div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
