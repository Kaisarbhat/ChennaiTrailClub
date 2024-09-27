"use client";

import RegisterCard from "@/components/registerCard";
import Image from "next/image";
import React, { useState } from "react";
import content from "../../components/registerContent";

const EventRegistration = () => {
  const [selectedItem, setSelectedItem] = useState(content[0].key);
  const totalSteps = 4;

  const selectedComponent =
    content.find((item) => item.key === selectedItem)?.component ||
    (() => null);


  const moveFront = () => {
    setSelectedItem((prev) => Math.min(parseInt(prev) + 1, totalSteps).toString());
  };

  const moveBack = () => {
    setSelectedItem((prev) => Math.max(parseInt(prev) - 1, 1).toString());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <div className="w-full flex flex-col items-center overflow-hidden"> 
    <div className="xl:w-3/4 lg:w-full md:px-4 xs:px-4 md:pt-32 xs:pt-24">
      <div>
        <Image
          src="/JHU-2024-Banner.jpg"
          alt="JHU-2024-Banner(1)"
          width={1300}
          height={500}
        />
      </div>
      <div className="flex flex-col md:mt-10 xs:mt-2 pt-6">
        <Timeline currentStep={parseInt(selectedItem)} totalSteps={totalSteps} />
        <div className="text-[#50514C] text-[16px] flex lg:flex-row md:flex-col xs:flex-col items-center justify-between">
          <div className="xl:1/2 lg:w-3/5 md:w-full xs:w-full">
            {selectedComponent()}
            <div className="w-full flex items-center justify-between mt-8">
              {selectedItem === "1" && <ButtonNext onClick={moveFront} />}
              {selectedItem === "2" && (
                <>
                  <ButtonPrevious onClick={moveBack} />
                  <ButtonNext onClick={moveFront} />
                </>
              )}
              {selectedItem === "3" && (
                <>
                  <ButtonPrevious onClick={moveBack} />
                  <ButtonNext onClick={moveFront} />
                </>
              )}
              {selectedItem === "4" && (
                <>
                <ButtonPrevious onClick={moveBack}/>
                <ButtonSubmit  onClick={handleSubmit}/>
                </>
              ) }
            </div>
          </div>
            <RegisterCard />
        </div>
      </div>
    </div>
</div>
  );
};

const Timeline = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div  
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep ? 'bg-[#50514c] text-[#FCFDF8]' : 'bg-[#E4E4E4] text-[#B6B6B3]'
              }`}
            >
              {index + 1}
            </div>
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`flex-1 h-[2px] ${
                index + 1 < currentStep ? 'bg-[#50514c]' : 'bg-[#E4E4E4]'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const ButtonNext = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-[14px] border bg-black border-solid text-[#D0F700] rounded-3xl p-2 w-24 font-bold">
      Next
    </button>
  );
};

const ButtonPrevious = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-sm border border-solid border-[#121212] text-[#121212] rounded-3xl p-2 w-24 font-bold">
      Previous
    </button>
  );
};

const ButtonSubmit = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-[14px] border bg-black border-solid text-[#D0F700] rounded-3xl p-2 w-24 font-bold">
      Submit
    </button>
  );
};
export default EventRegistration;