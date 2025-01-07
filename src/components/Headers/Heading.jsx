import React from 'react';

const Heading = React.memo(({ title, subTitle }) => (
  <div
    className="text-[#070802] h-36 bg-[#DDF94A] p-6 rounded-xl flex flex-col items-center justify-center 2xl:w-[1340px] xs:w-full"
    role="region"
    aria-labelledby="Page Heading"
  >
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="xs:text-sm sm:text-[20px] font-urbanist  lg:text-[32px] font-semibold text-center">
        {title}
      </h2>
      <p className="xs:text-sm lg:text-[20px] font-manrope text-[#50514C] text-center">
        {subTitle}
      </p>
    </div>
  </div>
));

export default Heading;
