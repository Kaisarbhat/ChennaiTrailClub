"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Timeline, RegisterCard, Button } from "@/components";
import { API_URL, registerContent } from "@/utils/constants";
import axios from "axios";
import TermsAndConditions from "@/components/T&C";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "next/navigation";
const EventRegistration = () => {
  //form states
  const [currentStep, setCurrentStep] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [key, setKey] = useState("");
  const [data, setData] = useState();
  const totalSteps = 4;
  //event states
  const param = useParams();
  const eventId = param.eventId;
  const [eventData, setEventData] = useState();
  useEffect(() => {
    //fetching the payment key from backend
    async function fetchKey() {
      try {
        const { data } = await axios.get(`${API_URL}/payment`);
        setKey(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchKey();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${API_URL}/events/event/${eventId}`);
        if (res.status === 200) {
          setEventData(res.data);
        } else {
          console.log("Failed to fetch data");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [eventId]);
  const toastStyle = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  };
  //function to load razorpay sdk
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  //displaying razorpay gateway
  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const result = await axios.post(`${API_URL}/payment/checkout`, {
        amount: Number(price),
        currency: "INR",
      });
      console.log("Result : ", result);
      //options for payment
      const options = {
        key: key,
        amount: result.data.amount,
        currency: result.data.currency,
        name: "Chennai Trail Club",
        description: "Test Transaction",
        order_id: result.data.id,
        // callbackUrl: `${API_URL}/payment/success`,
        handler: async function (response) {
          try {
            // console.log("Payment success:", response);
            const data = {
              orderCreationId: result.data.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const verify = await axios.post(`${API_URL}/payment/success`, data);

            if (verify.data.msg === "Payment verified successfully") {
              toast.success("Payment Successful", toastStyle);
            } else {
              toast.error("Payment Unsuccessful", toastStyle);
            }
          } catch (error) {
            throw error;
          }
        },
        prefill: {
          name: data.name,
          email: data.email,
          contact: data.mobile,
        },
        theme: {
          color: "#61dafb",
        },
      };

      // console.log("Razorpay options:", options);

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert(`Payment failed: ${response.error.description}`);
      });

      paymentObject.open();
    } catch (error) {
      console.error("Error details:", error);
      if (error.response) {
        alert(
          `Server error: ${error.response.data.message || "Unknown error"}`
        );
      } else if (error.request) {
        alert("Network error. Please check your connection.");
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  }

  async function handleFormSubmission(values) {
    try {
      const response = await axios.post(
        `${API_URL}/users/register/${eventId}`,
        values
      );
      if (response.status !== 200) {
        toast.error(data.message, toastStyle);
      } else {
        toast.success("Registration successful!", toastStyle);
        await displayRazorpay();
      }
      if (data.joinClub) {
        toast.success(
          "Thank You for becoming a memeber of our club",
          toastStyle
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }

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

  const renderField = ({ field, form: { setFieldValue, values } }) => {
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
      case "termsandconditions":
        return <TermsAndConditions values={values} />;
      case "para":
        return <div></div>;
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
  const date = new Date(eventData?.date);
  const formattedDate = date.toLocaleDateString("en-Us", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  console.log(eventData, formattedDate);
  return (
    <div className="w-full flex flex-col items-center overflow-clip">
      <div className="2xl:w-[1340px] lg:w-full md:px-4 xs:px-4 md:pt-32 xs:pt-24">
        <div>
          <ToastContainer />
          <ToastContainer />
          <img
            src={eventData?.eventBannerOne}
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
                  setData(values);
                  try {
                    if (currentStep < totalSteps) {
                      // Reset touched states when moving to next step
                      setTouched({});
                      setCurrentStep((preState) => preState + 1);
                    } else {
                      setTouched({});

                      await handleFormSubmission(values);
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
                            setCurrentStep((prevState) => prevState - 1);
                          }}
                          className="text-sm border border-solid border-[#121212] text-[#121212] rounded-3xl p-2 w-24 font-bold"
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type={currentStep < totalSteps ? "button" : "submit"}
                        disabled={isSubmitting}
                        className="text-[14px] border bg-black border-solid text-[#D0F700] rounded-3xl px-4 py-2 min-w-24 w-auto font-bold"
                        onClick={() => {
                          // Mark all fields as touched when clicking Next
                          const touchedFields = {};
                          registerContent[currentStep - 1].fields.forEach(
                            (field) => {
                              touchedFields[field.name] = true;
                            }
                          );
                          setTouched(touchedFields);

                          // this will trigger validation
                          document.forms[0].dispatchEvent(
                            new Event("submit", {
                              cancelable: true,
                              bubbles: true,
                            })
                          );
                        }}
                      >
                        {currentStep < totalSteps
                          ? "Next"
                          : "Proceed for Payment"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <RegisterCard
              name={eventData?.name}
              imageUrl={eventData?.eventBannerOne}
              date={formattedDate}
              location={eventData?.location}
              locationUrl={eventData?.locationUrl}
              price={price}
              category={selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
