import React from 'react'
import { PiArrowBendDownRight } from "react-icons/pi";

const Button = ({title ='Get Started'}) => {
  return (
    <div className=' flex items-center justify-between w-36 bg-zinc-100 text-black px-4 py-1 rounded-full '><span className='font-regular'>{title}</span>
    <PiArrowBendDownRight/>
    </div>
  )
}

export default Button