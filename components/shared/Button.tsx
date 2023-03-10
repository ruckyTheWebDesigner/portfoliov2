import React from "react";

interface Props {
  variant?: "default" | "gradient" | "outline" | "text";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({
  variant = "default",
  rightIcon,
  leftIcon,
  children,
  className,
  onClick,
}: Props) {
  const variants = {
    default: `bg-transparent flex items-center space-x-3 font-medium border border-teal-500 text-teal-400 rounded-md ${className}`,
    gradient: `bg-gradient-to-r flex items-center space-x-3  from-teal-500 to-blue-500 text-white  rounded-md ${className}`,
    outline: `bg-transparent flex items-center space-x-3 font-medium border border-teal-500 text-teal-500 rounded-md ${className}`,
    text: `bg-transparent flex items-center space-x-3 font-medium text-teal-500 rounded-md ${className}`,
  };

  return (
    <button
      onClick={onClick}
      className={`py-2 ${
        variants && variants[variant] ? variants[variant] : variants["default"]
      }`}>
      <span>{leftIcon ? leftIcon : null}</span> <span>{children}</span>{" "}
      <span>{rightIcon ? rightIcon : null}</span>
    </button>
  );
}

export default Button;
