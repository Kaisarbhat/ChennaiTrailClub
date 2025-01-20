// HeroClient.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero';

const HeroText = dynamic(() => import('./HeroText'));

function HeroClient({ recentEvent, heroImage, formattedDate }) {
  return (
    <div className="relative w-full">
      <div
        role="region"
        aria-label="Home Page"
        className="relative flex md:flex-row xs:flex-col items-center justify-center bg-black text-white xs:text-center sm:text-start h-screen"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_S3_BUCKET}/${heroImage.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <Hero recentEvent={recentEvent} formattedDate={formattedDate} />
      </div>
      <HeroText />
    </div>
  );
}

export default React.memo(HeroClient);
