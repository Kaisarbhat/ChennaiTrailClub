"use client";
import { useRouter } from "next/navigation";
import React from "react";


const Button1 = ({title,link='/'}) => {
  const router = useRouter();
  const handleClick = (link) => {
    router.push(link);
  }
  return (
    <button className="text-[14px] border  bg-black border-solid  text-[#D0F700] rounded-3xl p-2 w-32 hover:bg-[#D0F700] font-bold hover:text-black"
    onClick={()=>handleClick(link)}
    >
      {title}
    </button>
  );
};

export default Button1;
