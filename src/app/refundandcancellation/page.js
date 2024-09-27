import React from "react";

const RefundAndCancellation = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-[#50514C]">
          <div className="w-full bg-[#DDF94A] rounded-lg p-10 flex flex-col justify-center items-center max-h-40">
            <h2 className="md:text-[32px] xs:text-xl text-[#070802] font-bold">
              Refund and Cancellation Policy
            </h2>
            <p className="md:text-[16px] xs:text-sm mt-3">
              Effective Mar 18, 2023
            </p>
          </div>
          <div className="space-y-4 mt-8 sm:tracking-normal xs:tracking-tighter leading-loose font-man">
            <p>
              Per the marathon running industry policy, all entry fees are
              non-refundable and non-transferable to a different year or
              different runner. This policy applies to all entrants and is in
              effect whether you are injured, have an unexpected family/business
              emergency, have a medical emergency, etc.
            </p>
            <p>
              If the course has to be changed or the race cancelled due to an
              act of nature, or the event time changed due to circumstances
              beyond our control, there are no refunds or rollovers. You may not
              sell or give your bib to another person without going through the
              transfer process. There are NO exceptions.
            </p>
            <p>
              Your entry fee IS NOT TRANSFERABLE to a future year. You do not
              need to inform us of your cancellation.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancellation;
