import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="max-w-72 px-9 py-5 mt-7 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex gap-5 border-zinc-600">
      <img className="h-full w-full object-fit" src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
