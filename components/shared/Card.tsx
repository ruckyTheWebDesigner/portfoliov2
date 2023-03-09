import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: Props & { children?: React.ReactNode }) {
  return (
    <div
      className={`flex h-full dark:bg-slate-800  rounded-md flex-col justify-between items-start leading-relaxed group  space-y-2 lg:space-y-4 cursor-pointer shadow-lg p-4 lg:p-6 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
