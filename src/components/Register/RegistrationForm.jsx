"use client";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { NavigationButtons, TermsAndConditions } from "..";

const RegistrationForm = ({
  currentStep,
  totalSteps,
  handleFormSubmission,
  setCurrentStep,
  setSelectedCategory,
  setPrice,
  registerContent,
  registerInitialValues,
  registerValidationSchemas,
}) => {
  const [showOtherClubInput, setShowOtherClubInput] = useState(false);
  const [otherClubName, setOtherClubName] = useState("");

  const renderField = (
    { field, form: { setFieldValue, values } },
    fieldConfig
  ) => {
    switch (fieldConfig.type) {
      case "select":
        return (
          <div>
            <select
              {...field}
              className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
              onChange={(e) => {
                setFieldValue(field.name, e.target.value);
                if (field.name === "runningCategory") {
                  setSelectedCategory(e.target.value);
                  const selectedPrice =
                    e.target.value
                      .split("(")[1]
                      ?.split(")")[0]
                      ?.split(" ")[1] || "0";
                  setPrice(selectedPrice);
                }
                if (field.name === "runningClub") {
                  const selectedValue = e.target.value;
                  if (selectedValue === "Others") {
                    setShowOtherClubInput(true);
                  } else {
                    setShowOtherClubInput(false);
                    setFieldValue(field.name, selectedValue);
                  }
                }
              }}
            >
              <option value="">---please choose an option---</option>
              {fieldConfig.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {showOtherClubInput && field.name === "runningClub" && (
              <input
                type="text"
                value={otherClubName}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setOtherClubName(newValue);
                  setFieldValue(field.name, newValue);
                }}
                placeholder="Enter the name of your club"
                className="mt-2 w-full border border-solid p-2 rounded-md"
              />
            )}
          </div>
        );

      case "radio":
        return (
          <div className="flex items-center space-x-4 text-[#070802]">
            {fieldConfig.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2"
              >
                <input
                  type="radio"
                  {...field}
                  id={`${field.name}-${index}`}
                  value={option}
                  checked={values[field.name] === option}
                  onChange={() => setFieldValue(field.name, option)}
                  className="mb-0"
                />
                <label htmlFor={`${field.name}-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              {...field}
              checked={values[field.name]}
              onChange={(e) => setFieldValue(field.name, e.target.checked)}
              className="w-[12px] h-[12px] p-0 mb-0 mr-2"
            />
            <label htmlFor={field.name}>{fieldConfig.label}</label>
          </div>
        );

      case "date":
        return (
          <input
            type="date"
            {...field}
            min={fieldConfig.min}
            max={fieldConfig.max}
            className="mt-2 w-full border border-solid p-2 rounded-md"
          />
        );

      case "termsandconditions":
        return <TermsAndConditions values={values} />;

      case "address":
        return (
          <div className="font-bold text-lg text-black mt-2">
            {fieldConfig.text}
          </div>
        );

      case "para":
        return <div className="font-semibold text-sm">{fieldConfig.text}</div>;

      default:
        return (
          <input
            type={fieldConfig.type}
            {...field}
            className="mt-2 w-full border border-solid p-2 rounded-md"
          />
        );
    }
  };

  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchemas[currentStep - 1]}
      validateOnMount={false}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={handleFormSubmission}
    >
      {({ isSubmitting, touched, errors, setTouched, validateForm }) => (
        <Form className="space-y-4 text-sm">
          <h1 className="text-2xl text-[#070802] font-bold mb-6">
            {registerContent[currentStep - 1].title}
          </h1>

          {registerContent[currentStep - 1].fields.map((fieldConfig, index) => (
            <div key={index}>
              <label className="block mb-1">{fieldConfig.label}</label>
              <Field name={fieldConfig.name}>
                {(fieldProps) => renderField(fieldProps, fieldConfig)}
              </Field>
              {touched[fieldConfig.name] && errors[fieldConfig.name] && (
                <div className="text-red-500 text-sm mt-1">
                  {errors[fieldConfig.name]}
                </div>
              )}
            </div>
          ))}

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            isSubmitting={isSubmitting}
            setTouched={setTouched}
            setCurrentStep={setCurrentStep}
            validateForm={validateForm}
            registerContent={registerContent}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
