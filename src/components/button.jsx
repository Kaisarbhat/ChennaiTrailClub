"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Button = ({ title, link = "/",classname,icon=false}) => {
  const router = useRouter();

  const handleNavigation = (link) => {
    router.push(link);
  };
  return (
    <button
      className={`${classname}`}
      onClick={() => handleNavigation(link)}
    >
      {title} {icon && <i class="bi bi-arrow-up-right"></i>}
    </button>
  );
};

export default Button;
