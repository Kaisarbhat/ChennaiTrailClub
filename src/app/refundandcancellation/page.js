import { Heading } from '@/components';
import { refundData } from '@/utils/refundUtils';
import React from 'react';

export const metadata = {
  title: 'Refund And Cancellation Policy - Chennai Trail Club',
  description: 'Chennai Trail Club Refund And Cancellation Policy Page',
  openGraph: {
    title: 'Refund And Cancellation Policy - Chennai Trail Club',
    description: 'Chennai Trail Club Refund And Cancellation Policy Page',
    type: 'website',
  },
};

const RefundAndCancellation = () => {
  return (
    <div
      className="flex justify-center px-4"
      role="page"
      aria-label="refund and cancellation policy"
    >
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-blackLight">
          <Heading
            title="Refund and Cancellation Policy"
            subTitle=" Effective Mar 18, 2023"
          />
          <div className="space-y-4 mt-8 sm:tracking-normal xs:tracking-tighter leading-loose font-manrope tracking-wide">
            {refundData.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RefundAndCancellation);
