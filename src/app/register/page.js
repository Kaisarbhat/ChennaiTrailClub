"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Timeline, RegisterCard } from "../../components/index";
import { registerContent } from "@/utils/constants";

const EventRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [price, setPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState([]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const totalSteps = 4;

  const validationSchemas = [
    Yup.object({
      runningCategory: Yup.string().required("This field is required"),
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      mobile: Yup.string().required("This field is required"),
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
      emergencyContactNumber: Yup.string().required("This field is required"),
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

  console.log("value", value);

  const renderField = (field) => {
    // console.log("field", field);

    switch (field.type) {
      case "select":
        return (
          <Field
            as="select"
            name={field.name}
            value={value.name}
            className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
            onChange={(e) => {
              if (field.name === "runningCategory") {
                setSelectedCategory(e.target.value);
                const selectedPrice = e.target.value
                  .split("(")[1]
                  .split(")")[0]
                  .split(" ")[1];
                setPrice(selectedPrice);
              }
              setValue((pre) => ({ ...pre, [field.name]: e.target.value }));
            }}
          >
            <option value="">---please choose an option---</option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Field>
        );
      case "radio":
        return (
          <div className="flex items-center space-x-4 text-[#070802]">
            {field.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2"
              >
                <Field
                  type="radio"
                  name={field.name}
                  value={option}
                  className="mb-0"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div className="flex items-center">
            <Field
              type="checkbox"
              name={field.name}
              className="w-[12px] h-[12px] p-0 mb-0 mr-2"
            />
            <label htmlFor={field.name}>{field.label}</label>
          </div>
        );
      case "termsandconditions":
        return <div>{field.content}</div>;
      case "p":
        return <div></div>;
      case "date":
        return (
          <Field
            type={field.type}
            name={field.name}
            min={field.min}
            max={field.max}
          />
        );
      default:
        return (
          <Field
            type={field.type}
            name={field.name}
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
            alt="JHU-2024-Banner(1)"
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
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) => {
                  if (currentStep < totalSteps) {
                    setCurrentStep(currentStep + 1);
                  } else {
                    console.log("Form submitted:", values);
                  }
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, validateForm, setTouched, errors }) => (
                  <Form className="space-y-4 text-sm">
                    <h1 className="text-2xl text-[#070802] font-bold mb-6">
                      {registerContent[currentStep - 1].title}
                    </h1>
                    {registerContent[currentStep - 1].fields.map(
                      (field, index) => (
                        <div key={index}>
                          <label className="block mb-1">{field.label}</label>
                          {renderField(field)}
                          <ErrorMessage
                            name={field.name}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                      )
                    )}
                    <div className="w-full flex items-center justify-between mt-8">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep(currentStep - 1)}
                          className="text-sm border border-solid border-[#121212] text-[#121212] rounded-3xl p-2 w-24 font-bold"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type="button"
                        disabled={isSubmitting}
                        className="text-[14px] border bg-black border-solid text-[#D0F700] rounded-3xl p-2 w-24 font-bold"
                        onClick={async () => {
                          const touchedFields = {};
                          registerContent[currentStep - 1].fields.forEach(
                            (field) => {
                              touchedFields[field.name] = true;
                            }
                          );
                          setTouched(touchedFields);
                          const errors = await validateForm();
                          if (Object.keys(errors).length === 0) {
                            if (currentStep < totalSteps) {
                              setCurrentStep(currentStep + 1);
                            } else {
                              // Submit the form
                              await new Promise((resolve) =>
                                setTimeout(resolve, 0)
                              );
                              document.forms[0].dispatchEvent(
                                new Event("submit", {
                                  cancelable: true,
                                  bubbles: true,
                                })
                              );
                            }
                          }
                        }}
                      >
                        {currentStep === totalSteps ? "Submit" : "Next"}
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
