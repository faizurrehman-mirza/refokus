import { motion } from "motion/react";
import { div } from "motion/react-client";
import React from "react";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-x-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0%": "-100%" }}
        animate={{ x: direction === "left" ? "-100%": "0%"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex w-full justify-between items-center flex-shrink-0  py-5 gap-20 overflow-x-hidden whitespace-nowrap"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} alt="" />
        ))}
      </motion.div>
       <motion.div
        initial={{ x: direction === "left" ? "0%": "-100%" }}
        animate={{ x: direction === "left" ? "-100%": "0%"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex w-full justify-between items-center flex-shrink-0  py-5 gap-20 overflow-x-hidden whitespace-nowrap"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
