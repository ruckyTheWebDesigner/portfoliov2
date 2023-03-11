import React from "react";

interface Props {
  // children: React.ReactNode
  className?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "url"
    | "search"
    | "tel"
    | "color ";
  rows?: number;
}

function Input({
  type = "text",
  rows,
  className,
  name,
  placeholder,
  id,
}: Props) {
  return (
    <input
      type={type}
      // rows={rows}
      className='focus:outline-none rounded-md p-2 focus:placeholder:text-teal-500 dark:bg-gray-900 border shadow-sm'
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
}

export function TextArea({
  type = "text",
  rows = 5,
  placeholder,
  name,
  id,
}: Props) {
  return (
    <textarea
      rows={rows}
      className='focus:outline-none rounded-md p-2 focus:placeholder:text-teal-500 dark:bg-gray-900 border  shadow-sm'
      name={name}
      placeholder={placeholder}
      id={id}
    />
  );
}

export default Input;
