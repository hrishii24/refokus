import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className="min-w-40  bg-zinc-100 text-black rounded-full flex items-center justify-between px-4 py-1">
      <span className="text-sm">Get started</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
