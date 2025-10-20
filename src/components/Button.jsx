import { motion } from "motion/react";
import React from "react";
import { PiArrowBendDownRight } from "react-icons/pi";

const Button = ({ title = "Get Started" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      transition={{duration:0.5}}
      className=" flex items-center justify-between w-36 bg-zinc-100 text-black px-4 py-1 rounded-full "
    >
      <span className="font-regular">{title}</span>
      <PiArrowBendDownRight />
    </motion.div>
  );
};

export default Button;
