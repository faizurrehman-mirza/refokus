import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-xl  flex py-8 items-center justify-between border-b-2 border-zinc-700">
      <div className="navleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex gap-10 ml-8 font-regular">
          {["Home", "Work", "Careers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-0.5 h-8 bg-zinc-700"></span>
            ) : (
              <a className="text-sm flex items-center gap-1  ">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 .25em #00FF19 " }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF19] "
                  ></span>
                )}{" "}
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
