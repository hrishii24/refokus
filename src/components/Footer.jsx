import React from "react";

function Footer() {
  return (
    <div className=" max-w-screen-xl mx-auto pb-5  flex justify-between">
      <div className="flex flex-col basis-1/2 ">
        <h1 className="text-[12rem] font-medium">refokus.</h1>
        <div className="flex gap-9 width-full font-sm">
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Privacy Policy
          </a>
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Cookie Policy
          </a>
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Impressum
          </a>
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Terms
          </a>
        </div>
      </div>
      {/* /// */}
      <div className=" basis-1/2 flex justify-end items-center gap-10">
        <div className="socials flex flex-col gap-1 w-20 h-40 text-sm font-thin text-zinc-400">
          <h5 className="mb-10">Socials</h5>
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Instagram
          </a>
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Twitter (X?)
          </a>
          <a href="#" className="text-sm font-thin text-zinc-400 ">
            Linkedin
          </a>
        </div>
        <div className="flex flex-col gap-1  h-40">
          <h5 className="mb-10 text-sm font-thin text-zinc-400">Sitemap</h5>
          <a href="" className="text-sm font-thin  ">
            Home
          </a>
          <a href="" className="text-sm font-thin  ">
            Work
          </a>
          <a href="" className="text-sm font-thin  ">
            Careers
          </a>
          <a href="" className="text-sm font-thin  ">
            Contact
          </a>
        </div>
        <div className=" w-56 flex flex-col gap-6 h-40 pt-8">
          <p className="text-end text-sm font-semibold">
            Refokus is a pioneering digital agency driven by design and
            empowered bt technology.
          </p>
          <div className="flex justify-end">
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
