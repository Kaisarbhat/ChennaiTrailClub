import React from "react";

const Timeline = ({ currentStep, totalSteps  }) => {
  const steps = ["Personal Details" , "Other Details" , "Medical Questions" , "Qualification and Waiver Form"]
  return (
    <div className="flex items-center justify-between mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep
                  ? "bg-[#50514c] text-[#FCFDF8]"
                  : "bg-[#E4E4E4] text-[#B6B6B3]"
              }`}
            >
              {index + 1}
            </div>
              {/* <span className="2xl:block xs:hidden font-bold">{steps[index]}</span> */}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`flex-1 h-[2px] ${
                index + 1 < currentStep ? "bg-[#50514c]" : "bg-[#E4E4E4]"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;
