"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import AboutUsHeroSection from "./AboutUsHeroSection";

const AboutUsText1 = dynamic(() => import("../AboutUs/AboutUsText1"), {
  ssr: false,
});

const AboutUsText2 = dynamic(() => import("../AboutUs/AboutUsText2"), {
  ssr: false,
});

const Carousel = dynamic(() => import("../AboutUs/Carousel"), {
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
        <AboutUsText1 />
      </Suspense>

      <Suspense>
        <div className="flex items-center justify-center xs:px-4 2xl:max-w-[1500px]">
          <Carousel carouselImages={carouselImages} />
        </div>
      </Suspense>

      <Suspense>
        <AboutUsText2 />
      </Suspense>
    </div>
  );
};

export default React.memo(AboutUsClient);
