import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero';

const HeroText = dynamic(() => import('./HeroText'));

function HeroClient({ recentEvent, heroImage, formattedDate }) {
  return (
    <>
      <div
        role="region"
        aria-label="Home Page"
        className="min-h-screen w-full flex md:flex-row sm:flex-col xs:flex-col items-center justify-center bg-black text-white xs:text-center sm:text-start overflow-hidden md:pt-0 relative"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_S3_BUCKET}/${heroImage.imageUrl})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <Hero recentEvent={recentEvent} formattedDate={formattedDate} />
      </div>
      <div className="flex justify-center 2xl:m-w-[1340px]">
        <HeroText />
      </div>
    </>
  );
}

export default React.memo(HeroClient);
