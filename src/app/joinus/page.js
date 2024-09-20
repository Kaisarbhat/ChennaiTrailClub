import React from "react";
import "../globals.css";
const JoinUs = () => {
  return (
    // form height--pending
    <div className="flex items-center  justify-center h-screen text-[#070802]">
      <div className="w-3/5 h-3/4 flex border border-solid border-black rounded-2xl space-x-5 p-6 pr-1">
        <div className="md:hidden lg:flex bg-[url('/join-us-img.png')] h-5/6 bg-cover flex flex-col justify-end items-center px-10 py-10">
          <div className="bg-slate-300 rounded-xl w-full p-2 ">
            <h2 className="text-lg font-bold">Join Us</h2>
            <p className="text-sm text-[#50514C]">
              Embrace our community and become part of an exciting community of
              runners and fitness enthusiasts
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[14px] space-y-6 md:w-full">
          <div className="text-lg font-bold">Join Us</div>
          <p className="text-[#50514C]">
            For any queries mail us at <br /> info@chennaitrailclub.in
          </p>
          <form action="">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="number">Phone Number</label>
            <br />
            <input type="tel" />
            <br />
            <label htmlFor="blood">Blood Group</label>
            <br />
            <input type="text" />
            <div className="flex items-center align-middle">
              <input type="checkbox" />
              <p className="">Accept Terms and Conditions</p>
            </div>
            <div className="flex space-x-4 px-5 text-lg font-bold mt-4">
              <input
                className="text-[#50514C] h-12"
                type="reset"
                value="Cancel"
              />
              <input
                className="text-[#D0F700] bg-[#070802] h-12"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
