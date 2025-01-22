'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';
const RecentActivities = ({ webImages = [], smallImages = [] }) => {
  const processImages = (images) => {
    return images.map((image) => {
      return {
        imageUrl: `${process.env.NEXT_PUBLIC_S3_BUCKET}/${image.imageUrl}`,
      };
    });
  };

  const images = processImages(webImages);
  const mobileImages = processImages(smallImages);
  const recentActivitiesData = [
    { key: '1', layout: 'single', content: [images[0]] },
    { key: '2', layout: 'complex', content: [images[1], images[2], images[3]] },
    { key: '3', layout: 'stacked', content: [images[4], images[5]] },
    { key: '4', layout: 'single', content: [images[6]] },
    { key: '5', layout: 'complex', content: [images[7], images[8], images[9]] },
    { key: '6', layout: 'stacked', content: [images[10], images[11]] },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isShowingMore, setIsShowingMore] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderLayoutContent = useCallback(({ layout, content, key }) => {
    const layouts = {
      single: (
        <div className="grid-item single-image h-full relative">
          <div className="absolute inset-0">
            <Image
              src={content[0]?.imageUrl}
              alt={`Activity image ${key}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      ),
      complex: (
        <div className="grid-item complex-layout grid grid-rows-2 gap-4 h-full">
          <div className="relative w-full h-full">
            <Image
              src={content[0]?.imageUrl}
              alt={`Main activity image ${key}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 h-full">
            {content.slice(1, 3).map((img, idx) => (
              <div key={idx} className="relative w-full h-full">
                <Image
                  src={img?.imageUrl}
                  alt={`Additional activity image ${key}-${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 16vw"
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ),
      stacked: (
        <div className="grid-item stacked-layout grid grid-rows-2 gap-4 h-full">
          {content.map((img, idx) => (
            <div key={idx} className="relative w-full h-full">
              <Image
                src={img?.imageUrl}
                alt={`Stacked activity image ${key}-${idx}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ),
    };

    return layouts[layout] || null;
  }, []);

  const moveCarousel = useCallback(
    (direction) => {
      setStartIndex((prevIndex) => {
        const newIndex =
          direction === 'forward'
            ? (prevIndex + 1) % recentActivitiesData.length
            : (prevIndex - 1 + recentActivitiesData.length) %
              recentActivitiesData.length;
        return newIndex;
      });
    },
    [recentActivitiesData.length]
  );

  useEffect(() => {
    const interval = setInterval(() => moveCarousel('forward'), 5000);
    return () => clearInterval(interval);
  }, [moveCarousel]);

  const visibleComponents = Array.from(
    { length: 3 },
    (_, i) =>
      recentActivitiesData[(startIndex + i) % recentActivitiesData.length]
  );

  const slideVariants = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full min-h-[60vh] bg-primaryExtraLight flex justify-center md:justify-start lg:justify-center items-center mt-[100px] mb-8">
      <div
        className="xl:w-maxWidth w-full xs:py-10 px-4 lg:py-[100px]"
        style={{
          backgroundImage: `url('https://chennaitrailclub.s3.ap-south-1.amazonaws.com/media-uploads/2023/09/08181417/curved-lines-bg.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">
          <div className="lg:w-1/2">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={slideVariants}
              transition={{ duration: 0.5 }}
              className="xs:text-[26px] sm:text-[56px] text-black font-bold text-center md:text-start"
            >
              Recent Activities
            </motion.h1>
            <motion.p
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeVariants}
              transition={{ duration: 0.5 }}
              className="text-blackLight xs:text-[16px] xs:mt-[10px] sm:text-lg xs:leading-6 font-manrope text-center md:text-start md:w-[700px]"
            >
              We&apos;re thrilled to present a recap of the fantastic array of
              recent activities that we&apos;ve had the pleasure of organizing
              and participating in. We&apos;re excited to share our
              accomplishments and experiences with you.
            </motion.p>
          </div>
          <div className="hidden lg:flex items-end">
            <button
              onClick={() => moveCarousel('backward')}
              className="text-blackLight hover:text-black transition-colors text-6xl ml-4"
              aria-label="Previous activities"
            >
              <IoChevronBackCircleOutline />
            </button>
            <button
              onClick={() => moveCarousel('forward')}
              className="text-blackLight hover:text-black transition-colors text-6xl ml-4"
              aria-label="Next activities"
            >
              <IoChevronForwardCircleOutline />
            </button>
          </div>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:block md:h-[344px] sxl:h-[442px]">
          <div className="grid grid-cols-3 gap-4 h-full">
            {visibleComponents.map((item) => (
              <div key={item.key} className="h-full">
                {renderLayoutContent(item)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Gallery */}
        <div className="md:hidden xs:mt-[26] space-y-4">
          {mobileImages.slice(0, isShowingMore ? 4 : 3).map((item, index) => (
            <div
              key={index}
              className="relative w-full  xs:h-[180px] sm:h-[378px]"
            >
              <Image
                src={item.imageUrl}
                alt={`Mobile activity image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover rounded-xl"
              />
            </div>
          ))}
          {!isShowingMore && mobileImages.length > 3 && (
            <div className="flex justify-center">
              <button
                onClick={() => setIsShowingMore(true)}
                className="px-8 py-2 border border-black rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(RecentActivities);
