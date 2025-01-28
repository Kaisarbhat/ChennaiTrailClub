import React from 'react';

const Heading = React.memo(({ title, subTitle }) => (
  <div
    className="text-black xs:h-44 sm:h-fit bg-primaryLighter xs:p-6 sm:p-10 rounded-xl flex flex-col items-center justify-center xl:w-maxWidth xs:w-full xs:mt-[104px] xs:mb-4 lg:mt-[124px] lg:mb-[60px]"
    role="region"
    aria-labelledby="Page Heading"
  >
    <div className="flex flex-col items-center justify-center xs:w-[263px] sm:w-full">
      <h2 className="xs:text-[20px] font-urbanist  lg:text-[32px] font-bold text-center xs:leading-[22px] h-full w-full lg:p-1">
        {title}
      </h2>
      <p className="xs:text-sm xs:mt-3 lg:text-[16px] font-manrope text-blackLight text-center xs:leading-6 h-full w-full">
        {subTitle}
      </p>
    </div>
  </div>
));

export default Heading;
