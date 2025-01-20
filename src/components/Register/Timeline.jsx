import React from 'react';

const Timeline = ({ currentStep, totalSteps }) => {
  const steps = [
    'Personal Details',
    'Other Details',
    'Medical Questions',
    'Qualification and Waiver Form',
  ];

  return (
    <div
      className="flex items-center mb-8 w-full"
      role="region"
      aria-label="Registration TimeLine"
    >
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center min-w-fit">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep
                  ? 'bg-blackLight text-white'
                  : 'bg-shadeLight text-whiteDark'
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
                  index + 1 < currentStep ? 'bg-blackLight' : 'bg-shadeLight'
                }`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default React.memo(Timeline);
