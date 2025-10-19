import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  const [image, setimage] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "65%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "65%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "67%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "61%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "46%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setimage((prev) =>
        prev.map((items, index) =>
          arr.indexOf(index) === -1
            ? { ...items, isActive: false }
            : { ...items, isActive: true }
        )
      );
    }
      switch (Math.floor(data * 100)) {
    case 0:
      imageShow([]);
      break;

    case 1:
      imageShow([0]);
      break;
    case 2:
      imageShow([0, 1]);
      break;
    case 3:
      imageShow([0, 1, 2]);
      break;
    case 4:
      imageShow([0, 1, 2, 3]);

      break;
    case 5:
      imageShow([0, 1, 2, 3, 4]);

      break;
    case 6:
      imageShow([0, 1, 2, 3, 4, 5]);

      break;
  }
  });


  return (
    <div className="w-full mx-auto relative mt-10 ">
      <div className="max-w-screen-xl mx-auto text-center relative ">
        <h1 className="text-[33vw] font-medium leading-none select-none traking-tight ">
          work
          <div className="absolute w-full h-full  top-0">
            {image.map(
              (img, index) =>
                img.isActive && (
                  <img
                    className="absolute w-60 -translate-x-[50%] -translate-y-[50%] "
                    src={img.url}
                    alt=""
                    style={{ top: img.top, left: img.left }}
                  />
                )
            )}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Work;
