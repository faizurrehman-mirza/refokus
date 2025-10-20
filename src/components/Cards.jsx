import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 flex gap-2  '>
        <Card width={"basis-1/3"} start={false} para={true} backgroundcolor={"bg-zinc-800"} count={0} />
        <Card width={"basis-2/3"} start={true} para={false} backgroundcolor={"bg-zinc-700"} count={1} />
    </div>
  )
}

export default Cards