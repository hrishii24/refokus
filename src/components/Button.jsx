import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Button = ({ title = "Start a Project" }) => {
  return (
    <div className="w-36  bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-between px-4 py-2">
      <span className="text-sm">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
