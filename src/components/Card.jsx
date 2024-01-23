import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Card({ width, start, para, hover = "none" }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-2xl ${width} min-h-[28rem] flex flex-col justify-between hover:${hover}`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between">
          one heading <HiOutlineArrowNarrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">heading</h1>
      </div>
      <div>
        <div className="down w-full">
          {start && (
            <>
              <div className="text-8xl font-medium tracking-tight leading-none ">
                Start a project
              </div>
              <button className="rounded-full py-3 px-6 border-[1px] border-zinc-50 mt-5">
                Contact us
              </button>
            </>
          )}
          {para && (
            <p className="text-sm text-zinc-400">
              Explore what drive our team.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
