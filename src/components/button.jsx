import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-[#D0F700] text-black text-lg font-bold rounded-2xl px-2 py-3 mt-4 hover:bg-black hover:text-[#D0F700] min-w-36 max-w-40">
      {title} <i class="bi bi-arrow-up-right"></i>
    </button>
  );
};

export default Button;
