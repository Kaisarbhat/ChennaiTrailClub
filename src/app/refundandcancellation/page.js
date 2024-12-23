import React from "react";
import { refundData } from "@/utils/constants";
import Heading from "@/components/heading";
const RefundAndCancellation = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-[#50514C]">
          <Heading
            title="Refund and Cancellation Policy"
            subTitle=" Effective Mar 18, 2023"
          />
          <div className="space-y-4 mt-8 sm:tracking-normal xs:tracking-tighter leading-loose font-man">
            {refundData.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancellation;
