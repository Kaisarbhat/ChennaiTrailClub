'use client';
import { joinUsValidationSchema } from '@/schema/registrationSchema';
import { Dialog } from '@headlessui/react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { X } from 'lucide-react';
import { useState } from 'react';

const JoinUs = ({ isOpen, onClose }) => {
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function handleFormSubmission(values) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/joinus`,
        values
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        'Failed to submit form. Please try again.';
      setSubmitError(
        Array.isArray(errorMessage) ? errorMessage[0] : errorMessage
      );
    }
  }

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 z-50 xs:px-2 md:px-5 sxl:px-0">
        <div className="relative w-full lg:w-3/5 bg-white flex justify-between rounded-2xl xs:p-8 text-black lg:max-h-[80vh] xl:h-[650px] sxl:gap-4 xl:gap-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            <X size={20} />
          </button>
          <div className="xs:hidden sxl:w-1/2 xl:min-w-[400px] sxl:flex bg-[url('/join-us-img.png')] bg-cover flex-col justify-end items-center rounded-xl">
            <div className="bg-shadeLighter rounded-[7px] m-6 px-5 py-6 text-black">
              <h2 className="text-lg font-bold font-urbanist">Join Us</h2>
              <p className="text-sm font-manrope mt-[10px]">
                Embrace our community and become part of an exciting community
                of runners and fitness enthusiasts
              </p>
            </div>
          </div>
          <div className="flex flex-col text-[14px] xs:w-full sxl:w-1/2 xl:w-full">
            <h3 className="md:text-2xl xs:text-[22px] lg:text-[32px] font-semibold">
              Join Us
            </h3>
            <p className="text-blackLight md:text-[16px] xs:text-[13px] xs:leading-[22px] xs:mb-2 lg:mt-2 text-manrope">
              For any queries mail us at info@chennaitrailclub.in
            </p>
            {submitSuccess && (
              <div className="bg-green-100 text-green-700 p-3 rounded">
                Form submitted successfully! Check Your Email for Further
                details
              </div>
            )}
            {submitError && (
              <div className="bg-red-100 text-red-700 p-3 rounded">
                {submitError}
              </div>
            )}
            <Formik
              initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
                bloodGroup: '',
                terms: true,
              }}
              validationSchema={joinUsValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitError('');
                try {
                  await handleFormSubmission(values);
                } catch (error) {
                  setSubmitError(error);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form className="space-y-4 xs:mt-6 sxl:mt-0 font-urbanist font-medium xs:text-sm lg:text-[16px]">
                  <div>
                    <label htmlFor="name" className="block xs:mb-2 xl:mb-0">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full xs:px-3 xs:py-2 lg:p-4 sxl:px-4 sxl:py-6 border-whiteDark rounded-md mt-1 xl:border"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block xs:mb-2 xl:mb-0">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full xs:px-3 xs:py-2 lg:p-4 sxl:px-4 sxl:py-6 border-whiteDark rounded-md mt-1 xl:border"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block xs:mb-2 xl:mb-0"
                    >
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="w-full xs:px-3 xs:py-2 lg:p-4 sxl:px-4 sxl:py-6 border-whiteDark h-10 rounded-md mt-1 xl:border"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bloodGroup"
                      className="block xs:mb-2 xl:mb-0"
                    >
                      Blood Group
                    </label>
                    <Field
                      type="text"
                      id="bloodGroup"
                      name="bloodGroup"
                      className="w-full xs:px-3 xs:py-2 lg:p-4 sxl:px-4 sxl:py-6 border-whiteDark rounded-md mt-1 xl:border"
                    />
                    <ErrorMessage
                      name="bloodGroup"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="flex items-center text-whiteExtraDark lg:text-lg">
                    <Field
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="w-5 h-5 mr-2 mb-0"
                    />
                    <label htmlFor="terms">Accept Terms and Conditions</label>
                  </div>
                  <div className="flex xs:justify-between sm:justify-end gap-3 xs:text-[20px] font-bold">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-whiteExtraDark xs:w-1/2 sm:w-1/4 sxl:w-1/2 sm:max-w-32 rounded-3xl border border-whiteDark xs:px-8 xs:py-[14px]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-primary bg-black xs:w-1/2 sm:w-1/4 sxl:w-1/2 sm:max-w-32 rounded-3xl disabled:opacity-50 xs:px-8 xs:py-[14px]"
                      disabled={isSubmitting || !isValid || !dirty}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default JoinUs;
