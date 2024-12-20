"use client";

import React from "react";

interface Props {
  variant?: "default" | "gradient" | "outline" | "text";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

function Button({
  variant = "default",
  type = "submit",
  rightIcon,
  leftIcon,
  children,
  className,
  onClick,
  disabled,
}: Readonly<Props>) {
  const variants = {
    default: `border-none outline-none bg-teal-500 hover:bg-opacity-80 flex items-center space-x-3 font-medium border border-teal-500 text-white rounded-md ${className}`,
    gradient: `bg-gradient-to-r flex items-center space-x-3  from-teal-500 to-blue-500 text-white  rounded-md ${className}`,
    outline: `bg-transparent hover:bg-teal-100 flex items-center space-x-3 font-medium border border-teal-500 text-teal-500 rounded-md ${className}`,
    text: `bg-transparent flex items-center space-x-3 font-medium text-teal-500 rounded-md ${className}`,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`py-2 px-2 active:bg-teal-50 transition-all outline-none ${
        variants[variant] ? variants[variant] : variants["default"]
      }`}>
      <span>{leftIcon}</span> <span>{children}</span> <span>{rightIcon}</span>
    </button>
  );
}

export default Button;
