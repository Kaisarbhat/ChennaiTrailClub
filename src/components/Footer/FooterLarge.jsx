import React from 'react';
import {
  ContactInfo,
  PolicyLinks,
  QuickLinks,
  SocialLinks,
  TechnologyPartner,
} from '..';

const FooterLarge = () => {
  return (
    <div className="xl:max-w-[1340px] lg:w-full lg:px-2 2xl:px-0">
      <div className="w-full flex justify-center mt-8">
        <div className="w-full rounded-3xl text-white font-urbanist bg-black px-12 py-8 mb-0 h-[270px] text-[14px] flex items-start justify-between">
          <div className="flex flex-col w-[350px]">
            <h2 className="text-2xl mt-3 font-bold">Chennai Trail Club</h2>
            <p className="text-whiteDark mt-3 text-[16px]">
              Join us for epic outdoor adventures and bond with fellow nature
              enthusiasts
            </p>
            <SocialLinks className="mt-4" />
          </div>
          <div className="flex justify-between mt-8 w-3/4 text-[12px] ml-52">
            <QuickLinks />
            <ContactInfo />
            <TechnologyPartner />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-blackLight text-sm">
        <div className="flex w-full justify-between py-8">
          <nav aria-label="Footer links">
            <PolicyLinks />
          </nav>
          <p>
            Chennaitrailclub © {new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FooterLarge);
