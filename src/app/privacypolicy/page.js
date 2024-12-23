import React from "react";
import { privacyData } from "@/utils/constants";
import Heading from "@/components/heading";
const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center px-4 ">
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-[#50514C]">
          <Heading title="Privacy Policy" subTitle=" Effective Mar 18, 2023" />
          <div className="space-y-4 mt-8 sm:tracking-normal  xs:tracking-tighter leading-loose  font-man">
            {privacyData.map((item) => (
              <div key={item.key}>
                <h3 className="md:text-[32px] xs:text-[18px] text-[#070802] font-bold font-serif mb-4 mt-8">
                  {" "}
                  {item.heading}
                </h3>
                {item.text.map((para, index) => (
                  <p key={index} className="mt-[10px] text-sm font-man">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
