"use client";
import React from "react";

const Button1 = ({title}) => {
  return (
    <button className="text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black">
      {title}
    </button>
  );
};

export default Button1;
