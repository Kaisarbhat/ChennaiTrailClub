'use client';
import React from 'react';
import { AboutUsTextLower, AboutUsTextUpper, Carousel } from '..';
import AboutUsHeroSection from './AboutUsHeroSection';

const AboutUsClient = ({ abousUsHeroImg, carouselImages }) => {
  return (
    <div
      className="w-full px-4 pt-20 flex flex-col items-center"
      aria-labelledby="About Page"
    >
      <div className="mt-10 rounded-xl">
        <AboutUsHeroSection imageUrl={abousUsHeroImg?.imageUrl} />
      </div>

      <AboutUsTextUpper />

      <div className="flex items-center justify-center xs:px-4 2xl:max-w-[1500px]">
        <Carousel carouselImages={carouselImages} />
      </div>

      <AboutUsTextLower />
    </div>
  );
};

export default React.memo(AboutUsClient);
