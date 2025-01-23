'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const Carousel = ({ carouselImages }) => {
  const totalSlides = carouselImages?.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //automatically change the images after 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const updateCarousel = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full lg:px-[115px]" aria-labelledby="Images">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((item, index) => (
            <div key={index} className="min-w-full min-h-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${item.imageUrl}`}
                alt={`Image ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevImage}
        className="xs:hidden lg:flex absolute left-2 top-1/2  text-blackLight text-4xl p-2 rounded-full"
      >
        <IoArrowBackCircleOutline />
      </button>
      <button
        onClick={nextImage}
        className="xs:hidden lg:flex  absolute right-2 top-1/2  text-blackLight text-4xl p-2 rounded-full"
      >
        <IoArrowForwardCircleOutline />
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`dot md:w-3 md:h-3 xs:w-2 xs:h-2 rounded-full focus:outline-none ${
              currentIndex === index ? `bg-primaryLight` : 'bg-gray-400'
            }`}
            onClick={() => updateCarousel(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Carousel);
