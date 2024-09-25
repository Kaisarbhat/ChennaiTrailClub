"use client";
import { useState,useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const images = [
    "/about-us-img-1.png",
    "/about-us-img-2.png",
    "/about-us-img-3.png",
    "/about-us-img-4.png",
    "/about-us-img-5.png",
    "/about-us-img-4.png",
  ];

  const totalSlides = images.length;

  const updateCarousel = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative w-full  md:p-20 xs:p-0">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full min-h-full">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevImage}
        className="xs:hidden md:flex absolute left-2 top-1/2  text-gray-500 text-3xl p-2 rounded-full"
      >
        <i class="bi bi-arrow-left-circle-fill"></i>
      </button>
      <button
        onClick={nextImage}
        className="xs:hidden md:flex  absolute right-2 top-1/2  text-gray-500 text-3xl p-2 rounded-full"
      >
       <i class="bi bi-arrow-right-circle-fill"></i>
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot w-3 h-3 rounded-full focus:outline-none ${
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
