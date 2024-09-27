"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
const JoinUs = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen  flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="relative w-11/12 lg:w-3/5 bg-[#FCFDF8] max-h-[90vh] flex border border-solid border-black rounded-2xl xs:p-4 md:p-6 md:space-x-6 xs:space-x-0 text-black md:min-h-[550px] xs:min-h-[450px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          <X size={20} />
        </button>
        <div className="xs:hidden md:hidden xs:w-0 lg:w-1/2 lg:flex bg-[url('/join-us-img.png')] min-h-[600px] bg-cover flex-col justify-end items-center lg:px-10 xs:px-3 py-10">
          <div className="bg-slate-300 rounded-xl w-full p-2 ">
            <h2 className="text-lg font-bold">Join Us</h2>
            <p className="text-sm text-[#50514C]">
              Embrace our community and become part of an exciting community of
              runners and fitness enthusiasts
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[14px] lg:space-y-6 md:space-y-2 xs:space-y-0 xs:w-full lg:w-1/2">
          <h3 className="md:text-2xl xs:text-[22px] font-bold">Join Us</h3>
          <p className="text-[#50514C] md:text-[16px] xs:text-[13px]">
            For any queries mail us at <br /> info@chennaitrailclub.in
          </p>
          <form action="" className="lg:space-y-4 xs:space-y-2">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="number" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="blood" className="block mb-1">
                Blood Group
              </label>
              <input
                type="text"
                id="blood"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="w-5 h-5 mr-2 mb-0" />
              <label htmlFor="terms">Accept Terms and Conditions</label>
            </div>
            <div className="flex space-x-6 justify-end text-lg font-bold ">
              <button
                type="button"
                onClick={onClose}
                className="text-[#50514C] h-12 w-[150px] rounded-3xl border border-[#50514C]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-[#D0F700] bg-[#070802] h-12 w-[150px] rounded-3xl"
                onClick={onClose}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
