import React from 'react';
import {
  ContactInfo,
  PolicyLinks,
  QuickLinks,
  SocialLinks,
  TechnologyPartner,
} from '..';

const FooterSmall = () => {
  return (
    <div className="sm:bg-black xs:bg-black md:bg-inherit box-border">
      <div className="w-full flex justify-center mt-8 mb-4">
        <div className="w-full flex flex-col text-white bg-black px-4 mb-0 text-[14px] items-start justify-between md:py-16 xs:py-6 font-urbanist">
          <div className="flex flex-col w-[350px]">
            <h2 className="text-2xl mt-3 font-extrabold">Chennai Trail Club</h2>
            <p className="text-whiteDark mt-3 text-[16px] xs:tracking-wide">
              Join us for epic outdoor adventures and bond with fellow nature
              enthusiasts
            </p>
          </div>
          <div className="flex md:flex-row xs:flex-col xs:justify-start md:justify-between md:items-start xs:items-start w-full ">
            <QuickLinks />
            <ContactInfo />
            <div className="xs:mb-6 ">
              <p className="font-bold text-white text-[16px]">JOIN WITH US</p>
              <SocialLinks />
            </div>
            <TechnologyPartner />
          </div>
        </div>
      </div>
      <div className="w-full flex xs:justify-start xs:pt-6 xs:pb-2 xs:px-4 text-blackLight text-[14px]">
        <div className="flex md:flex-row xs:flex-col lg:w-4/5 md:w-full lg:px-4 md:justify-between sm:justify-start mb-4">
          <nav
            aria-label="Footer links"
            className="sm:flex-row xs:flex-col justify-start"
          >
            <PolicyLinks />
          </nav>
          <p className="xs:mt-3 md:mt-0 text-[15px] ">
            Chennaitrailclub © {new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FooterSmall);
