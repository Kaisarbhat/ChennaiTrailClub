import { Heading } from '@/components';
import { termsAndConditions } from '@/utils/termsAndConditionsUtils';
import React from 'react';

export const metadata = {
  title: 'Terms Of Service - Chennai Trail Club',
  description: 'Chennai Trail Club Terms Of Service Page',
  openGraph: {
    title: 'Terms Of Service - Chennai Trail Club',
    description: 'Chennai Trail Club Terms Of Service Page',
    type: 'website',
  },
};

const TermsOfService = () => {
  return (
    <div
      className="flex justify-center px-4"
      role="page"
      aria-label="Terms of Service"
    >
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-[#50514C]">
          <Heading title="TERMS OF SERVICE" subTitle="Effective Mar 18, 2023" />
          <div className="space-y-4 mt-8  sm:tracking-normal xs:tracking-tighter leading-loose">
            {termsAndConditions.map((item, index) => (
              <di key={index}>
                <h3 className="md:text-[32px] xs:text-lg text-[#070802] font-bold font-urbanist mb-4 mt-8">
                  {item.heading}
                </h3>
                {item.text.map((para, index) => (
                  <p
                    key={index}
                    className="mb-[10px] text-sm font-manrope tracking-wide"
                  >
                    {para}
                  </p>
                ))}
              </di>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TermsOfService);
