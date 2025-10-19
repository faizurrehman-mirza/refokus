import React from 'react'

function Marquee({imagesurl}) {
  return (
    <div className='flex w-full justify-between items-center py-5 gap-10 overflow-hidden whitespace-nowrap'>
        {imagesurl.map((url,index)=> <img key={index} src={url} alt="" /> )}
        {imagesurl.map((url,index)=> <img key={index} src={url} alt="" /> )}
    </div>
  )
}

export default Marquee