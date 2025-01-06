import Image from "next/image";
import React from "react";

// eslint-disable-next-line react/display-name
const Sponsors = React.memo(({ sponsors }) => {
  const isAnimated = sponsors.length > 6;
  if (!isAnimated) {
    return (
      <div className="flex items-center justify-center md:space-x-20 xs:space-x-3">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={sponsor.imageUrl}
              alt={"sponsor images"}
              width={80}
              height={50}
              className="object-contain"
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
      <div className="flex items-center animate-scroll">
        {duplicatedSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 mx-10">
            <Image
              src={sponsor.imageUrl}
              alt={"sponsor images"}
              width={80}
              height={50}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
});
export default Sponsors;
