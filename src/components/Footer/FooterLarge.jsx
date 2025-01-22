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
    <div className="xl:w-maxWidth lg:px-2 sxl:px-0 lg:w-full">
      <div className="w-full flex justify-center mt-8">
        <div className="w-full rounded-3xl text-white font-urbanist bg-black lg:px-10 xl:py-8 xl:px-12 lg:py-12 h-[270px] text-[14px] flex items-baseline justify-between gap-1">
          <div className="flex flex-col w-[350px]">
            <h2 className="text-2xl mt-3 font-bold">Chennai Trail Club</h2>
            <p className="text-whiteDark mt-3 text-[16px] max-w-[250px]">
              Join us for epic outdoor adventures and bond with fellow nature
              enthusiasts
            </p>
            <SocialLinks className="mt-4" />
          </div>
          <div className="flex w-[700px] justify-between text-[12px]">
            <QuickLinks />
            <ContactInfo />
            <TechnologyPartner />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-blackLight text-sm">
        <div className="flex w-full justify-between py-8 lg:px-4">
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
