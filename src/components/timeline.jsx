import React from "react";

const Timeline = ({ currentStep, totalSteps }) => {
  const steps = [
    "Personal Details",
    "Other Details",
    "Medical Questions",
    "Qualification and Waiver Form",
  ];

  return (
    <div className="flex items-center mb-8 w-full">
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center min-w-fit">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep
                  ? "bg-[#50514c] text-[#FCFDF8]"
                  : "bg-[#E4E4E4] text-[#B6B6B3]"
              }`}
            >
              {index + 1}
            </div>
            <span className="xs:hidden lg:flex ml-2 text-sm font-medium whitespace-nowrap">
              {steps[index]}
            </span>
          </div>
          {index < totalSteps - 1 && (
            <div className="flex-1 mx-4">
              <div
                className={`h-[2px] w-full ${
                  index + 1 < currentStep ? "bg-[#50514c]" : "bg-[#E4E4E4]"
                }`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;
