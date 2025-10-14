import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66666666666667%] px-3 py-5 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-700 flex justify-between items-center ">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
