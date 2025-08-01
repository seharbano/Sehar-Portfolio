import Image from 'next/image'
import React from 'react'
import avator from '@/assets/pngs/woman2.png'
const Avator = () => {
  return (
    <div className='hidden xl:flex '>
      <Image src={avator} alt='img' className='translate-z-0  ' />
    </div>
  )
}

export default Avator