import Image from 'next/image'
import React from 'react'
import avator from '@/assets/pngs/avatar.png'
const Avator = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src={avator} alt='img' className='translate-z-0 w-full h-full ' />
    </div>
  )
}

export default Avator