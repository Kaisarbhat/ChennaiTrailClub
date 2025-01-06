'use client';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import AboutUsHeroSection from './AboutUsHeroSection';
import { withErrorHandling } from '@/app/Error/page';

const AboutUsTextUpper = dynamic(() => import('../AboutUs/AboutUsTextUpper'), {
  ssr: false,
});

const AboutUsTextLower = dynamic(() => import('../AboutUs/AboutUsTextLower'), {
  ssr: false,
});

const Carousel = dynamic(() => import('../AboutUs/Carousel'), {
  ssr: false,
});

const AboutUsClient = ({ abousUsHeroImg, carouselImages }) => {
  return (
    <div
      className="w-screen px-4 pt-20 flex flex-col items-center"
      aria-labelledby="About Page"
    >
      <div className="mt-10">
        <AboutUsHeroSection imageUrl={abousUsHeroImg?.imageUrl} />
      </div>

      <Suspense>
        <AboutUsTextUpper />
      </Suspense>

      <Suspense>
        <div className="flex items-center justify-center xs:px-4 2xl:max-w-[1500px]">
          <Carousel carouselImages={carouselImages} />
        </div>
      </Suspense>

      <Suspense>
        <AboutUsTextLower />
      </Suspense>
    </div>
  );
};

export default withErrorHandling(React.memo(AboutUsClient));
