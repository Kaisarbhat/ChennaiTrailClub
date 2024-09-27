"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Button = ({ title, link = "/" }) => {
  const router = useRouter();

  const handleNavigation = (link) => {
    router.push(link);
  };
  return (
    <button
      className="bg-[#D0F700] text-black md:text-lg xs:text-sm font-bold rounded-3xl md:px-6 xs:px-3 py-3 mt-4 hover:bg-black hover:text-[#D0F700] max-h-[60px] md:max-w-[600px] xs:max-w-[320px]"
      onClick={() => handleNavigation(link)}
    >
      {title} <i class="bi bi-arrow-up-right"></i>
    </button>
  );
};

export default Button;
