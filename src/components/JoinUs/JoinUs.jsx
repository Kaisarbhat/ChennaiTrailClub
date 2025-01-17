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
      <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
        <div className="relative w-11/12 lg:w-3/5 bg-white max-h-[90vh] flex border border-solid border-black rounded-2xl xs:p-4 md:p-6 md:space-x-6 xs:space-x-0 text-black md:min-h-[550px] xs:min-h-[450px]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            <X size={20} />
          </button>
          <div className="xs:hidden md:hidden xs:w-0 lg:w-1/2 lg:flex bg-[url('/join-us-img.png')] min-h-[600px] bg-cover flex-col justify-end items-center lg:px-10 xs:px-3 py-10">
            <div className="bg-shadeLighter rounded-xl w-full p-6 space-y-2 h-36 text-black">
              <h2 className="text-lg font-bold font-urbanist">Join Us</h2>
              <p className="text-sm font-manrope">
                Embrace our community and become part of an exciting community
                of runners and fitness enthusiasts
              </p>
            </div>
          </div>
          <div className="flex flex-col text-[14px] lg:space-y-6 md:space-y-2 xs:space-y-0 xs:w-full lg:w-1/2">
            <h3 className="md:text-2xl xs:text-[22px] font-bold">Join Us</h3>
            <p className="text-blackLight md:text-[16px] xs:text-[13px]">
              For any queries mail us at <br /> info@chennaitrailclub.in
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
                terms: false,
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
                <Form className="lg:space-y-4 xs:space-y-2">
                  <div>
                    <label htmlFor="name" className="block mb-1">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block mb-1">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="bloodGroup" className="block mb-1">
                      Blood Group
                    </label>
                    <Field
                      type="text"
                      id="bloodGroup"
                      name="bloodGroup"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="bloodGroup"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="w-5 h-5 mr-2 mb-0"
                    />
                    <label htmlFor="terms">Accept Terms and Conditions</label>
                  </div>
                  <div className="flex space-x-6 justify-end text-lg font-bold">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-blackLight h-12 w-[150px] rounded-3xl border border-blackLight"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-primary bg-black h-12 w-[150px] rounded-3xl disabled:opacity-50"
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
