"use client";

import RegisterCard from "@/components/registerCard";
import Image from "next/image";
import React, { useState } from "react";
import content from '../../components/registerContent'

const EventRegistration = () => {
  const [selectedItem, setSelectedItem] = useState(content[0].key);
  const selectedComponent =
    content.find((item) => item.key === selectedItem)?.component ||
    (() => null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  const handleClick = (k) => {
    setSelectedItem(k);
  };

  return (
    <div className="lg:px-64 py-32">
      <div>
        <Image
          src="/JHU-2024-Banner.jpg"
          alt="JHU-2024-Banner(1)"
          width={1300}
          height={500}
        />
      </div>
      <div className="flex flex-col mt-10 p-6">
        <div className="flex justify-evenly mb-10">
          {content.map((item)=> (
            <button key={item.key}
            onClick={() => handleClick(item.key)}
            >
              {item.key}
            </button>
          ))}
        </div>
        <div className="text-[#50514C] text-[16px] flex justify-between p-4">
          <div className="w-1/2 px-4">
          {selectedComponent()}
          </div>

          <RegisterCard/>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
