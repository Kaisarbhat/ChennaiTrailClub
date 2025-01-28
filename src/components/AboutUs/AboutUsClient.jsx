'use client';
import React from 'react';
import { AboutUsTextLower, AboutUsTextUpper, Carousel } from '..';
import AboutUsHeroSection from './AboutUsHeroSection';

const AboutUsClient = ({ abousUsHeroImg, carouselImages }) => {
  return (
    <div
      className="w-full pt-20 flex flex-col items-center"
      aria-labelledby="About Page"
    >
      <div className="mt-10 rounded-xl px-4">
        <AboutUsHeroSection imageUrl={abousUsHeroImg?.imageUrl} />
      </div>

      <AboutUsTextUpper />

      <div className="flex items-center justify-center xs:p-[19px] sm:p-[38px] lg:p-[55px] sxl:p-[60px] xl:p-[65px] 2xl:p-[100px] xl:w-maxWidth 2xl:w-full">
        <Carousel carouselImages={carouselImages} />
      </div>

      <AboutUsTextLower />
    </div>
  );
};

export default React.memo(AboutUsClient);
