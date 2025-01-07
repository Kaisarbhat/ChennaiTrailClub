'use client';
import {
  registerInitialValues,
  registerValidationSchemas,
} from '@/schema/registrationSchema';
import { dateOptions } from '@/utils/constants';
import { registerContent } from '@/utils/registerutils';
import { showError, showSuccess } from '@/utils/toastUtils';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EventBanner, RegisterCard, RegistrationForm, Timeline } from '..';

const RegisterClient = ({ key, eventData, eventId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const loadScript = async (src) => {
    try {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    } catch (error) {
      showError('Failed to load payment gateway');
      return false;
    }
  };

  const checkExistingRegistration = async (email) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/registration/${eventId}/${email}`
      );
      return response.data.exists;
    } catch (error) {
      showError(
        error.response?.data?.message || 'Failed to check registration status'
      );
    }
  };

  const initializePayment = async () => {
    try {
      return await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/checkout`,
        {
          amount: Number(price),
          currency: 'INR',
        }
      );
    } catch (error) {
      showError(
        error.response?.data?.message || 'Failed to initialize payment'
      );
    }
  };

  const handlePayment = async (values) => {
    try {
      setIsProcessing(true);

      // Check for existing registration first
      const hasExistingRegistration = await checkExistingRegistration(
        values.email
      );
      if (hasExistingRegistration) {
        showError('You have already registered for this event');
        return false;
      }

      const result = await initializePayment(values);
      return { result, values };
    } catch (error) {
      showError(error.message);
      return false;
    } finally {
      setIsProcessing(false);
    }
  };

  const verifyPayment = async (verificationData) => {
    try {
      const verificationResult = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/success`,
        verificationData
      );

      if (
        verificationResult.data.msg ===
        'Payment verified and registration completed successfully'
      ) {
        showSuccess('Registration completed successfully!');
        if (verificationData.registrationData.joinClub) {
          showSuccess('Thank you for becoming a member of our club');
        }
        setTimeout(() => router.push('/'), 6000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Payment verification failed';
      showError(errorMessage);
    }
  };

  const displayRazorpay = async (values) => {
    try {
      const scriptLoaded = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
      );

      if (!scriptLoaded) {
        showError(
          'Payment gateway failed to load. Please check your internet connection.'
        );
        return;
      }

      const paymentData = await handlePayment(values);
      if (!paymentData) return;

      const { result, values: formValues } = paymentData;

      const options = {
        key,
        amount: result.data.amount,
        currency: result.data.currency,
        name: 'Chennai Trail Club',
        description: 'Chennai Trail Club Event Registration Transactions',
        order_id: result.data.id,
        prefill: {
          name: `${formValues.firstName} ${formValues.lastName}`,
          email: formValues.email,
          contact: formValues.mobile,
        },
        theme: { color: '#61dafb' },
        handler: async (response) => {
          const verificationData = {
            orderCreationId: result.data.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            eventId,
            registrationData: formValues,
          };

          try {
            await verifyPayment(verificationData);
          } catch (error) {
            showError(`Payment verification failed : ${error}`);
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        showError(`Payment failed: ${response.error.description}`);
      });

      paymentObject.open();
    } catch (error) {
      showError(error.message || 'Failed to process payment');
    }
  };

  const handleFormSubmission = async (values) => {
    if (isProcessing) return;
    await displayRazorpay(values);
  };

  const date = new Date(eventData?.date);
  const formattedDate = date.toLocaleDateString('en-US', dateOptions);

  return (
    <div
      className="w-full flex flex-col items-center font-manrope"
      role="region"
      aria-label="registration page"
    >
      <div className="2xl:w-[1340px] lg:w-full md:px-4 xs:px-4 md:pt-32 xs:pt-24">
        <ToastContainer />
        <EventBanner eventBanner={eventData?.eventBannerTwo} />
        <div className="flex flex-col md:mt-10 xs:mt-2 pt-6">
          <Timeline currentStep={currentStep} totalSteps={4} />
          <div className="text-[#50514C] text-[16px] flex lg:flex-row md:flex-col xs:flex-col items-center justify-between">
            <div className="xl:1/2 lg:w-3/5 md:w-full xs:w-full">
              <RegistrationForm
                currentStep={currentStep}
                totalSteps={4}
                handleFormSubmission={handleFormSubmission}
                setCurrentStep={setCurrentStep}
                setSelectedCategory={setSelectedCategory}
                setPrice={setPrice}
                registerContent={registerContent}
                registerInitialValues={registerInitialValues}
                registerValidationSchemas={registerValidationSchemas}
                disabled={isProcessing}
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
    </div>
  );
};

export default memo(RegisterClient);
