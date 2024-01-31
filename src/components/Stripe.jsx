import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="max-w-72 pl-5 py-4 mt-20 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex gap-8 border-zinc-600">
      <img className="h-full w-full object-fit" src={val.url} alt="" />
      <span className="font-semibold pr-4">{val.number}</span>
    </div>
  );
};

export default Stripe;
