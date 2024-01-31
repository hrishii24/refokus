import React from "react";
import Button from "./Button";

function Product({ data, mover, index }) {
  return (
    <div className="w-full h-[15rem] text-white ">
      <div
        onMouseEnter={() => {
          mover(index);
        }}
        className="px-10 py-14 mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl font-medium">{data.title}</h1>
        <div className="details w-1/4">
          <p className="font-thin text-lg pb-4">{data.description}</p>
          <div className="flex gap-4">
            {data.live && <Button title="Live Websites" />}
            {data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
