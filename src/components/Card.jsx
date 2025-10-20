import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div className={`bg-zinc-800 ${width} hover:p-7 hover:${hover} rounded-xl p-5 font-medium min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2>up next news</h2>
          <IoIosArrowRoundForward />
        </div>

        <h1 className="text-2xl mt-3">
          Insights and behind the scenes Explore what
        </h1>
      </div>
     
      <div className="bottom mt-32  ">
         {start ===true &&(
        <>
         <h1 className="text-9xl tracking-tighter font-semibold leading-none">
          Start a project
        </h1>
        <button className="py-2 font-thin px-3 border border-zinc-200 mt-4 rounded-full ">
          Contact Us
        </button>
        </>
      )}
      {para === true && (
<p className="text-sm text-zinc-500 font-medium  ">
          Explore what drives our team.
        </p>
      )}
       
        
      </div>
    </div>
  );
}

export default Card;
