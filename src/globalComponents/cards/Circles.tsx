import Image from 'next/image'
import React from 'react'
import Circle from "@/assets/pngs/circles.png"
const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-1 -bottom-2 mix-blend-color-dodge animate-pulse duration-600 z-10 '>
      <Image src={Circle} alt='' className='w-full h-full' />
    </div>
  )
}

export default Circles