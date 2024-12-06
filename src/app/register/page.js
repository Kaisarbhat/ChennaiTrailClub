"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Timeline, RegisterCard } from "@/components";
import { registerContent } from "@/utils/constants";

const EventRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const totalSteps = 4;

  const validationSchemas = [
    Yup.object({
      runningCategory: Yup.string().required("This field is required"),
      firstName: Yup.string()
        .required("This field is required")
        .min(3, "Name should not be less than 3 characters"),
      lastName: Yup.string()
        .required("This field is required")
        .min(2, "Name should not be less than 2 characters"),
      mobile: Yup.string()
        .required("This field is required")
        .matches(/^[6-9]\d{9}$/, "Please provide a Valid mobile number"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      gender: Yup.string().required("This field is required"),
      dateOfBirth: Yup.date().required("This field is required"),
      tShirtSize: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
    }),
    Yup.object({
      bloodGroup: Yup.string().required("This field is required"),
      bibName: Yup.string().required("This field is required"),
      runningClub: Yup.string().required("This field is required"),
      emergencyContactName: Yup.string().required("This field is required"),
      emergencyContactRelation: Yup.string().required("This field is required"),
      emergencyContactNumber: Yup.string()
        .required("This field is required")
        .matches(/^[6-9]\d{9}$/, "Please provide a Valid mobile number"),
    }),
    Yup.object({
      cardiovascularDisease: Yup.string().required("This field is required"),
      medicalSupervision: Yup.string().required("This field is required"),
      pregnancyRisk: Yup.string().required("This field is required"),
      asthma: Yup.string().required("This field is required"),
      dizziness: Yup.string().required("This field is required"),
      chestPain: Yup.string().required("This field is required"),
      chronicIllness: Yup.string().required("This field is required"),
      otherMedicalConditions: Yup.string(),
    }),
    Yup.object({
      timingCertificates: Yup.string()
        .url("Must be a valid URL")
        .required("This field is required"),
      waiverAcknowledgement: Yup.boolean().oneOf(
        [true],
        "You must acknowledge the waiver form"
      ),
      joinClub: Yup.boolean(),
    }),
  ];
  const initialValues = {
    runningCategory: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    tShirtSize: "",
    city: "",
    state: "",
    bloodGroup: "",
    bibName: "",
    runningClub: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactNumber: "",
    cardiovascularDisease: "",
    medicalSupervision: "",
    pregnancyRisk: "",
    asthma: "",
    dizziness: "",
    chestPain: "",
    chronicIllness: "",
    otherMedicalConditions: "",
    timingCertificates: "",
    waiverAcknowledgement: false,
    joinClub: false,
  };

  const renderField = ({
    field,
    form: { setFieldValue, values, touched, errors },
  }) => {
    const fieldConfig = registerContent[currentStep - 1].fields.find(
      (f) => f.name === field.name
    );

    if (!fieldConfig) return null;

    switch (fieldConfig.type) {
      case "select":
        return (
          <select
            {...field}
            className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
            onChange={(e) => {
              setFieldValue(field.name, e.target.value);
              if (field.name === "runningCategory") {
                setSelectedCategory(e.target.value);
                const selectedPrice =
                  e.target.value.split("(")[1]?.split(")")[0]?.split(" ")[1] ||
                  "0";
                setPrice(selectedPrice);
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
    <div className="w-full flex flex-col items-center overflow-clip">
      <div className="2xl:w-[1340px] lg:w-full md:px-4 xs:px-4 md:pt-32 xs:pt-24">
        <div>
          <Image
            src="/JHU-2024-Banner.jpg"
            alt="JHU-2024-Banner"
            width={1300}
            height={500}
          />
        </div>
        <div className="flex flex-col md:mt-10 xs:mt-2 pt-6">
          <Timeline currentStep={currentStep} totalSteps={totalSteps} />
          <div className="text-[#50514C] text-[16px] flex lg:flex-row md:flex-col xs:flex-col items-center justify-between">
            <div className="xl:1/2 lg:w-3/5 md:w-full xs:w-full">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[currentStep - 1]}
                validateOnMount={false}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={async (values, { setSubmitting, setTouched }) => {
                  try {
                    if (currentStep < totalSteps) {
                      // Reset touched states when moving to next step
                      setTouched({});
                      setCurrentStep(currentStep + 1);
                    } else {
                      console.log("Form submitted:", values);
                      // Handle final submission here
                    }
                  } catch (error) {
                    console.error("Form submission error:", error);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting, touched, errors, setTouched }) => (
                  <Form className="space-y-4 text-sm">
                    <h1 className="text-2xl text-[#070802] font-bold mb-6">
                      {registerContent[currentStep - 1].title}
                    </h1>
                    {registerContent[currentStep - 1].fields.map(
                      (fieldConfig, index) => (
                        <div key={index}>
                          <label className="block mb-1">
                            {fieldConfig.label}
                          </label>
                          <Field name={fieldConfig.name}>{renderField}</Field>
                          {touched[fieldConfig.name] &&
                            errors[fieldConfig.name] && (
                              <div className="text-red-500 text-sm mt-1">
                                {errors[fieldConfig.name]}
                              </div>
                            )}
                        </div>
                      )
                    )}
                    <div className="w-full flex items-center justify-between mt-8">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            setTouched({}); // Reset touched states when going back
                            setCurrentStep(currentStep - 1);
                          }}
                          className="text-sm border border-solid border-[#121212] text-[#121212] rounded-3xl p-2 w-24 font-bold"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type="button"
                        disabled={isSubmitting}
                        className="text-[14px] border bg-black border-solid text-[#D0F700] rounded-3xl px-4 py-2 min-w-24 w-auto font-bold"
                        onClick={async () => {
                          // Mark all fields as touched when clicking Next
                          const touchedFields = {};
                          registerContent[currentStep - 1].fields.forEach(
                            (field) => {
                              touchedFields[field.name] = true;
                            }
                          );
                          setTouched(touchedFields);

                          // Submit the form - this will trigger validation
                          document.forms[0].dispatchEvent(
                            new Event("submit", {
                              cancelable: true,
                              bubbles: true,
                            })
                          );
                        }}
                      >
                        {currentStep === totalSteps
                          ? "Proceed for Payment"
                          : "Next"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <RegisterCard price={price} category={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
