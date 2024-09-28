import React from "react";
import { privacyData } from "@/utils/constants";
const PrivacyPolicy = () => {
 
  return (
    <div className="flex justify-center px-4 ">
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-[#50514C]">
          <div className="w-full bg-[#DDF94A] rounded-lg p-10 flex flex-col justify-center items-center max-h-40">
            <h2 className="md:text-[32px] xs:text-xl text-[#070802] font-bold">
              Privacy Policy
            </h2>
            <p className="md:text-[16px] xs:text-sm mt-3">Effective Mar 18, 2023</p>
          </div>
          <div className="space-y-4 mt-8 sm:tracking-normal  xs:tracking-tighter leading-loose  font-man">
            {privacyData.map((item) => (
              <di key={item.key}>
                <h3 className="md:text-[32px] xs:text-[18px] text-[#070802] font-bold font-serif mb-4 mt-8">
                  {" "}
                  {item.heading}
                </h3>
                {item.text.map((para) => (
                  <p className="mt-[10px] text-sm font-man">{para}</p>
                ))}
              </di>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
