"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Formik, Form, Field } from "formik";
import { validationSchemas, initialValues } from "@/schema/registrationSchema";
import { Timeline, RegisterCard } from "@/components";
import { API_URL, dateOptions, registerContent } from "@/utils/constants";
import axios from "axios";
import TermsAndConditions from "@/components/T&C";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "next/navigation";
import Loading from "@/components/loading";
import ErrorPage from "@/app/error/page";

const EventRegistration = () => {
  const [formState, setFormState] = useState({
    currentStep: 1,
    price: 0,
    selectedCategory: "",
    key: "",
    data: null,
    error: "",
    isLoading: false,
  });

  const [eventData, setEventData] = useState(null);
  const { eventId } = useParams();
  const totalSteps = 4;

  // Memoized toast configuration
  const toastStyle = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: "Bounce",
  };

  // Load Razorpay script
  const loadScript = useCallback(async (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  // Fetch payment key
  useEffect(() => {
    const fetchKey = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/payment`);
        setFormState((prev) => ({ ...prev, key: data }));
      } catch (error) {
        console.error("Error fetching payment key:", error);
      }
    };
    fetchKey();
  }, []);

  // Fetch event data
  useEffect(() => {
    const fetchEventData = async () => {
      setFormState((prev) => ({ ...prev, isLoading: true }));
      try {
        const { data } = await axios.get(`${API_URL}/events/event/${eventId}`);
        setEventData(data);
      } catch (error) {
        setFormState((prev) => ({
          ...prev,
          error: error.message,
          isLoading: false,
        }));
      } finally {
        setFormState((prev) => ({ ...prev, isLoading: false }));
      }
    };
    fetchEventData();
  }, [eventId]);

  const handleRazorpayDisplay = useCallback(async () => {
    try {
      const scriptLoaded = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!scriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      const { data: result } = await axios.post(`${API_URL}/payment/checkout`, {
        amount: Number(formState.price),
        currency: "INR",
      });

      const options = {
        key: formState.key,
        amount: result.amount,
        currency: result.currency,
        name: "Chennai Trail Club",
        description: "Test Transaction",
        order_id: result.id,
        handler: async (response) => {
          try {
            const verifyData = {
              orderCreationId: result.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const { data: verifyResult } = await axios.post(
              `${API_URL}/payment/success`,
              verifyData
            );
            toast[
              verifyResult.msg === "Payment verified successfully"
                ? "success"
                : "error"
            ](
              `Payment ${
                verifyResult.msg === "Payment verified successfully"
                  ? "Successful"
                  : "Unsuccessful"
              }`,
              toastStyle
            );
          } catch (error) {
            setFormState((prev) => ({ ...prev, error: error.message }));
          }
        },
        prefill: {
          name: formState.data?.name,
          email: formState.data?.email,
          contact: formState.data?.mobile,
        },
        theme: { color: "#61dafb" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", (response) => {
        console.error("Payment failed:", response.error);
        setFormState((prev) => ({
          ...prev,
          error: `Payment failed: ${response.error.description}`,
        }));
      });

      paymentObject.open();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setFormState((prev) => ({
        ...prev,
        error: error.response
          ? `Server error: ${errorMessage}`
          : error.request
          ? "Network error. Please check your connection."
          : `Error: ${errorMessage}`,
      }));
    }
  }, [formState.key, formState.price, formState.data, loadScript, toastStyle]);

  const handleFormSubmission = useCallback(
    async (values) => {
      try {
        const { data } = await axios.post(
          `${API_URL}/users/register/${eventId}`,
          values
        );

        if (data.status !== 200) {
          toast.error(data.message, toastStyle);
          return;
        }

        toast.success("Registration successful!", toastStyle);
        if (values.joinClub) {
          toast.success(
            "Thank You for becoming a member of our club",
            toastStyle
          );
        }

        await handleRazorpayDisplay();
      } catch (error) {
        setFormState((prev) => ({ ...prev, error: error.message }));
        toast.error(error.response?.data?.message, toastStyle);
      }
    },
    [eventId, handleRazorpayDisplay, toastStyle]
  );

  const renderField = useCallback(
    ({ field, form: { setFieldValue, values } }) => {
      const fieldConfig = registerContent[
        formState.currentStep - 1
      ].fields.find((f) => f.name === field.name);

      if (!fieldConfig) return null;

      const commonInputProps = {
        ...field,
        className: "mt-2 w-full border border-solid p-2 rounded-md",
      };

      switch (fieldConfig.type) {
        case "select":
          return (
            <select
              {...commonInputProps}
              onChange={(e) => {
                setFieldValue(field.name, e.target.value);
                if (field.name === "runningCategory") {
                  const price =
                    e.target.value
                      .split("(")[1]
                      ?.split(")")[0]
                      ?.split(" ")[1] || "0";
                  setFormState((prev) => ({
                    ...prev,
                    selectedCategory: e.target.value,
                    price,
                  }));
                }
              }}
            >
              <option value="">---please choose an option---</option>
              {fieldConfig.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );

        case "radio":
          return (
            <div className="flex items-center space-x-4 text-[#070802]">
              {fieldConfig.options.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center space-x-2"
                >
                  <input
                    type="radio"
                    {...field}
                    id={`${field.name}-${idx}`}
                    value={option}
                    checked={values[field.name] === option}
                    onChange={() => setFieldValue(field.name, option)}
                    className="mb-0"
                  />
                  <label htmlFor={`${field.name}-${idx}`}>{option}</label>
                </div>
              ))}
            </div>
          );

        case "termsandconditions":
          return <TermsAndConditions values={values} />;

        case "para":
          return null;

        default:
          return <input type={fieldConfig.type} {...commonInputProps} />;
      }
    },
    [formState.currentStep]
  );

  if (formState.isLoading) return <Loading />;
  if (formState.error) return <ErrorPage error={formState.error} />;

  const formattedDate = eventData
    ? new Date(eventData.date).toLocaleDateString("en-US", dateOptions)
    : "";

  return (
    <div className="w-full flex flex-col items-center overflow-clip">
      <div className="2xl:w-[1340px] lg:w-full md:px-4 xs:px-4 md:pt-32 xs:pt-24">
        <ToastContainer />
        {eventData?.eventBannerTwo && (
          <img
            src={eventData.eventBannerTwo}
            alt={`${eventData.name} - banner`}
            width={1300}
            height={500}
          />
        )}
        <div className="flex flex-col md:mt-10 xs:mt-2 pt-6">
          <Timeline
            currentStep={formState.currentStep}
            totalSteps={totalSteps}
          />
          <div className="text-[#50514C] text-[16px] flex lg:flex-row md:flex-col xs:flex-col items-center justify-between">
            <div className="xl:1/2 lg:w-3/5 md:w-full xs:w-full">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[formState.currentStep - 1]}
                validateOnMount={false}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={async (values, { setSubmitting, setTouched }) => {
                  try {
                    if (formState.currentStep < totalSteps) {
                      setFormState((prev) => ({
                        ...prev,
                        currentStep: prev.currentStep + 1,
                      }));
                      setTimeout(() => setTouched({}, false), 0);
                    } else {
                      await handleFormSubmission(values);
                    }
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({
                  isSubmitting,
                  touched,
                  errors,
                  setTouched,
                  validateForm,
                }) => (
                  <Form className="space-y-4 text-sm">
                    <h1 className="text-2xl text-[#070802] font-bold mb-6">
                      {registerContent[formState.currentStep - 1].title}
                    </h1>
                    {registerContent[formState.currentStep - 1].fields.map(
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
                      {formState.currentStep > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            setTouched({}, false);
                            setFormState((prev) => ({
                              ...prev,
                              currentStep: prev.currentStep - 1,
                            }));
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
                          const currentFields =
                            registerContent[formState.currentStep - 1].fields;
                          const touchedFields = Object.fromEntries(
                            currentFields.map((field) => [field.name, true])
                          );
                          setTouched(touchedFields);

                          if (formState.currentStep < totalSteps) {
                            const errors = await validateForm();
                            const currentFieldNames = currentFields.map(
                              (field) => field.name
                            );
                            const currentStepErrors = Object.keys(
                              errors
                            ).filter((key) => currentFieldNames.includes(key));

                            if (currentStepErrors.length === 0) {
                              setFormState((prev) => ({
                                ...prev,
                                currentStep: prev.currentStep + 1,
                              }));
                              setTimeout(() => setTouched({}, false), 0);
                            }
                          } else {
                            document.forms[0].dispatchEvent(
                              new Event("submit", {
                                cancelable: true,
                                bubbles: true,
                              })
                            );
                          }
                        }}
                      >
                        {formState.currentStep < totalSteps
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
              imageUrl={eventData?.eventBannerTwo}
              date={formattedDate}
              location={eventData?.location}
              locationUrl={eventData?.locationUrl}
              price={formState.price}
              category={formState.selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
