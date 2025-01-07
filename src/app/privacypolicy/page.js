import { Heading } from '@/components';
import { privacyData } from '@/utils/privacyUtils';
import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Chennai Trail Club',
  description: 'Chennai Trail Club Privacy Policy Page',
  openGraph: {
    title: 'Privacy Policy - Chennai Trail Club',
    description: 'Chennai Trail Club Privacy Policy Page',
    type: 'website',
  },
};

const PrivacyPolicy = () => {
  return (
    <div
      className="flex justify-center px-4"
      role="page"
      aria-label="privacy policy"
    >
      <div className="2xl:max-w-[1340px] w-full flex justify-center">
        <div className="w-full  mt-32 mb-16 text-[14px] text-[#50514C]">
          <Heading title="Privacy Policy" subTitle=" Effective Mar 18, 2023" />
          <div className="space-y-4 mt-8 sm:tracking-normal  xs:tracking-tighter leading-loose font-man">
            {privacyData.map((item, index) => (
              <div key={index}>
                <h3 className="md:text-[32px] xs:text-[18px] text-[#070802] font-bold font-urbanist mb-4 mt-8">
                  {item.heading}
                </h3>
                {item.text.map((para, index) => (
                  <p
                    key={index}
                    className="mt-[10px] text-sm font-man font-manrope tracking-wide"
                  >
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

export default React.memo(PrivacyPolicy);
