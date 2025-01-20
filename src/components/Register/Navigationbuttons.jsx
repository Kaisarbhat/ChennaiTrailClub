const NavigationButtons = ({
  currentStep,
  totalSteps,
  isSubmitting,
  setTouched,
  setCurrentStep,
  validateForm,
  registerContent,
}) => (
  <div className="w-full flex items-center justify-between mt-8">
    {currentStep > 1 && (
      <button
        type="button"
        onClick={() => {
          setTouched({});
          setCurrentStep((prevState) => prevState - 1);
        }}
        className="text-sm border border-solid border-shadeDarker text-shadeDarker rounded-3xl p-2 w-24 font-bold"
      >
        Previous
      </button>
    )}
    <button
      type={currentStep < totalSteps ? 'button' : 'submit'}
      disabled={isSubmitting}
      className="text-[14px] border bg-black border-solid text-primary rounded-3xl px-4 py-2 min-w-24 w-auto font-bold"
      onClick={async () => {
        const currentFields = registerContent[currentStep - 1].fields;
        const touchedFields = Object.fromEntries(
          currentFields.map((field) => [field.name, true])
        );
        setTouched(touchedFields);

        if (currentStep < totalSteps) {
          const errors = await validateForm();
          const currentFieldNames = currentFields.map((field) => field.name);
          const currentStepErrors = Object.keys(errors).filter((key) =>
            currentFieldNames.includes(key)
          );

          if (currentStepErrors.length === 0) {
            setCurrentStep((prev) => prev + 1);
            setTimeout(() => setTouched({}, false), 0);
          }
        } else {
          document.forms[0].dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true })
          );
        }
      }}
    >
      {currentStep < totalSteps ? 'Next' : 'Proceed for Payment'}
    </button>
  </div>
);

export default NavigationButtons;
