import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line react/display-name
const Sponsors = React.memo(({ sponsors }) => {
  const isAnimated = sponsors.length > 6;
  if (!isAnimated) {
    return (
      <div className="flex items-center justify-center md:space-x-20 xs:space-x-3">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${sponsor.imageUrl}`}
              alt={'sponsor images'}
              width={80}
              height={50}
              className="object-contain lg:w-[160px] xs:w-[60px] xs:h-[50px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center animate-scroll xs:gap-6 md:gap-0">
        {duplicatedSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 lg:mx-10 sm:mx-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${sponsor.imageUrl}`}
              alt={'sponsor images'}
              width={80}
              height={50}
              className="object-contain lg:w-[160px] xs:w-[60px] xs:h-[50px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
});
export default Sponsors;
