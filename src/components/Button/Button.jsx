'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Button = ({ title, link, classname, icon = false, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <button className={classname} onClick={handleClick}>
      {title} {icon && <i className="bi bi-arrow-up-right"></i>}
    </button>
  );
};

export default Button;
