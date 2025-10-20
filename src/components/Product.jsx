import React from "react";
import Button from "./Button";

function Product({ products, count, mover }) {
  return (
    <div className="w-full h-[23rem] py-20">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-medium">{products.title}</h1>
        <div className="w-1/3 ">
          <p className="mb-5 font-thin text-lg">{products.description}</p>
          <div className="flex items-center gap-5">
            {products.live && <Button title="Live Website" />}
            {products.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
