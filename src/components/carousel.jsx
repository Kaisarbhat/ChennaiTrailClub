"use client";
import { useState, useEffect } from "react";

const Carousel = ({ carouselImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    //automatically change the images after 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const totalSlides = carouselImages.length;

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
    <div className="relative w-full  lg:p-20 xs:p-0">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages?.map((item, index) => (
            <div key={index} className="min-w-full min-h-full">
              <img
                src={item.imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevImage}
        className="xs:hidden lg:flex absolute left-2 top-1/2  text-gray-500 text-3xl p-2 rounded-full"
      >
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>
      <button
        onClick={nextImage}
        className="xs:hidden lg:flex  absolute right-2 top-1/2  text-gray-500 text-3xl p-2 rounded-full"
      >
        <i className="bi bi-arrow-right-circle-fill"></i>
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`dot md:w-3 md:h-3 xs:w-2 xs:h-2 rounded-full focus:outline-none ${
              currentIndex === index ? "bg-[#BCD700]" : "bg-gray-400"
            }`}
            onClick={() => updateCarousel(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
