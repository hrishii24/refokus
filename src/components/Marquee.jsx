import React from "react";

function Marquee({ imgUrl }) {
  return (
    <div className="flex w-full py-8 gap-20 overflow-x-hidden ">
      {imgUrl.map((link) => (
        <img src={link} className="flex-shrink-0 w-[6vw]" />
      ))}
      {imgUrl.map((link) => (
        <img src={link} className="flex-shrink-0" />
      ))}
    </div>
  );
}

export default Marquee;
