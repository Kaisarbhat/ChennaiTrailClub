"use client";
import React from "react";
import Image from "next/image";

const Sponsors = React.memo(({ sponsors }) => {
  const isAnimated = sponsors.length > 6;
  if (!isAnimated) {
    return (
      <div className="flex items-center justify-center space-x-20">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              width={80}
              height={40}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  // Double the sponsors array for seamless looping
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center animate-scroll">
        {duplicatedSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 mx-10">
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              width={80}
              height={50}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
});
export default Sponsors;
