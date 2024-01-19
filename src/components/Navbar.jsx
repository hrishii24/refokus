import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg py-6 mx-auto bg-zinc-900 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="navLeft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-6 bg-zinc-500"></span>
            ) : (
              <a className="font-thin flex items-center gap-1" href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 1.em #00FF19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
