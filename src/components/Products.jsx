import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
    },
  ];
  const [position, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 23);
  };
  return (
    <div className="mt-14 relative">
      {products.map((val, index) => (
        <Product products={val} count={index} key={index} mover={mover} />
      ))}
      <div className="absolute top-0 pointer-events-none  h-full w-full ">
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute h-[23rem] w-1/3 left-[45%]  overflow-hidden   "
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full flex items-center justify-center rounded-xl "
          >
            <video className="h-[16rem] w-[20rem] rounded-xl object-cover  "
              autoPlay
              muted
              loop
              src="videos\Arqitel project video 4_3.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full flex items-center justify-center rounded-xl "
          >
            <video className="h-[16rem] w-[20rem] rounded-xl object-cover  "
              autoPlay
              muted
              loop
              src="videos\Cula_promo_new_4_3.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full flex items-center justify-center "
          >
            <video className="h-[16rem] w-[20rem] rounded-xl object-cover  "
              autoPlay
              muted
              loop
              src="videos\webflow-education-promo.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full flex items-center justify-center rounded-xl "
          >
            <video className="h-[16rem] w-[20rem] rounded-xl object-cover  "
              autoPlay
              muted
              loop
              src="videos\TTR project video 4_3_H.264.webm"
            ></video>
          </motion.div>
         <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" h-full w-full flex items-center justify-center rounded-xl "
          >
            <video className="h-[16rem] w-[20rem] rounded-xl object-cover  "
              autoPlay
              muted
              loop
              src="videos\Maniv-Compressed.mp4"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
