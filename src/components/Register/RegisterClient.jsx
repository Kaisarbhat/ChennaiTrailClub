"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import ErrorPage from "@/app/error/page";
import "react-toastify/dist/ReactToastify.css";
import { RegisterCard, RegistrationForm, EventBanner, Timeline } from "..";
import { dateOptions } from "@/utils/constants";
import { registerContent } from "@/utils/registerutils";
import {
  registerInitialValues,
  registerValidationSchemas,
} from "@/schema/registrationSchema";
import { useRouter } from "next/navigation";
const RegisterClient = ({ key, eventData, eventId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const totalSteps = 4;
  const router = useRouter();
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
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (values) => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        setError("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/checkout`,
        {
          amount: Number(price),
          currency: "INR",
        }
      );

      const options = {
        key: key,
        amount: result.data.amount,
        currency: result.data.currency,
        name: "Chennai Trail Club",
        description: "Test Transaction",
        order_id: result.data.id,
        handler: async function (response) {
          try {
            const data = {
              orderCreationId: result.data.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
            const verify = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/payment/success`,
              data
            );

            if (verify.data.msg === "Payment verified successfully") {
              toast.success("Payment Successful", toastStyle);
              setTimeout(() => {
                router.push("/");
              }, 3000);
            } else {
              toast.error("Payment Unsuccessful", toastStyle);
            }
          } catch (error) {
            setError(error);
          }
        },
        prefill: {
          name: values?.name,
          email: values?.email,
          contact: values?.mobile,
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        setError(`Payment failed: ${response.error.description}`);
      });

      paymentObject.open();
    } catch (error) {
      if (error.response) {
        setError(
          `Server error: ${error.response.data.message || "Unknown error"}`
        );
      } else if (error.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };

  const handleFormSubmission = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register/${eventId}`,
        values
      );
      if (response.status !== 201) {
        toast.error(`Registration Failed`, toastStyle);
      } else {
        toast.success("Registration successful!", toastStyle);
        await displayRazorpay(values);

        if (values?.joinClub) {
          toast.success(
            "Thank You for becoming a member of our club",
            toastStyle
          );
        }
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
      toast.error(error, toastStyle);
    }
  };

  if (error) return <ErrorPage error={error} />;

  const date = new Date(eventData?.date);
  const formattedDate = date.toLocaleDateString("en-Us", dateOptions);
  return (
    <div
      className="w-full flex flex-col items-center overflow-clip"
      role="region"
      aria-label="registration page"
    >
      <div className="2xl:w-[1340px] lg:w-full md:px-4 xs:px-4 md:pt-32 xs:pt-24">
        <ToastContainer />
        <ToastContainer />
        <EventBanner eventData={eventData} />
        <div className="flex flex-col md:mt-10 xs:mt-2 pt-6">
          <Timeline currentStep={currentStep} totalSteps={totalSteps} />
          <div className="text-[#50514C] text-[16px] flex lg:flex-row md:flex-col xs:flex-col items-center justify-between">
            <div className="xl:1/2 lg:w-3/5 md:w-full xs:w-full">
              <RegistrationForm
                currentStep={currentStep}
                totalSteps={totalSteps}
                handleFormSubmission={handleFormSubmission}
                setCurrentStep={setCurrentStep}
                setSelectedCategory={setSelectedCategory}
                setPrice={setPrice}
                registerContent={registerContent}
                registerInitialValues={registerInitialValues}
                registerValidationSchemas={registerValidationSchemas}
              />
            </div>
            <RegisterCard
              name={eventData?.name}
              imageUrl={eventData?.eventBannerTwo}
              date={formattedDate}
              location={eventData?.location}
              locationUrl={eventData?.locationUrl}
              price={price}
              category={selectedCategory}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterClient;
