"use client";

import React, { useEffect, useState } from "react";

const RecentActivities = () => {
  const [startIndex, setStartIndex] = useState(0);

  const data = [
    {
      key: "1",
      component: () => (
        <img
          src="/new-recent-activities-4.png"
          alt="new-recent-activities-4"
          className="rounded-lg"
        />
      ),
    },
    {
      key: "2",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg">
            <img
              src="/recent-activities-new-1.png"
              alt="recent-activities-new-1"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex space-x-4 ">
            <div className="w-2/4 rounded-lg">
              <img
                src="/new-recent-activities-2-1.png"
                alt="new-recent-activities-2-1"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/4 rounded-lg">
              <img
                src="/recent-activities-new-2.png"
                alt="recent-activities-new-2"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/new-recent-activities-11.png"
              alt="new-recent-activities-11"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/new-recent-activities-12.png"
              alt="new-recent-activities-12"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ),
    },
    {
      key: "4",
      component: () => (
        <img
          src="/recent-activities-new-4.png"
          alt="recent-activities-new-4"
          className="rounded-lg"
        />
      ),
    },
    {
      key: "5",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg">
            <img
              src="/new-recent-activities-7.png"
              alt="new-recent-activities-7"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full flex space-x-4 ">
            <div className="w-2/4 rounded-lg">
              <img
                src="/recent-activities-new-5.png"
                alt="recent-activities-new-5"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/4 rounded-lg">
              <img
                src="/new-recent-activities-9.png"
                alt="new-recent-activities-9"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "6",
      component: () => (
        <div className="space-y-4">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/new-recent-activities-5.png"
              alt="new-recent-activities-5"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/recent-activities-new-3.png"
              alt="recent-activities-new-3"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  const moveForward = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const moveBackward = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const visibleComponents = [
    data[startIndex % data.length],
    data[(startIndex + 1) % data.length],
    data[(startIndex + 2) % data.length],
  ];

  const updateCarousel = (index) => {
    setStartIndex((index + data.length) % data.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateCarousel(startIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="w-full  lg:px-64 lg:py-10 lg:mt-32 flex flex-col justify-center bg-[#F6FFC7]">
      <div className="flex justify-between">
        <div className="w-3/5 mt-8 py-8">
          <h1 className="text-[56px] font-bold mb-2">Recent Activities</h1>
          <p className="text-[#50514C] text-lg">
            We’re thrilled to present a recap of the fantastic array of recent
            activities that we’ve had the pleasure of organizing and
            participating in. We’re excited to share our accomplishments and
            experiences with you.
          </p>
        </div>
        <div className="flex  items-center space-x-6">
          <button
            className="px-3 py-2 text-gray-500 hover:text-black text-5xl "
            onClick={moveBackward}
          >
            <i class="bi bi-arrow-left-circle"></i>
          </button>
          <button
            className=" py-2  text-gray-500 hover:text-black text-5xl  rounded-full"
            onClick={moveForward}
          >
            <i class="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
      <div className="w-full h-2/3 flex flex-nowrap">
        <div className="w-full h-[500px] flex flex-row space-x-4 ">
          {visibleComponents.map((item) => (
            <div key={item.key}>{item.component()}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
