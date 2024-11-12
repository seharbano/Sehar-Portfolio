import Image from 'next/image'
import React from 'react'
import TopleftImg from '@/assets/pngs/top-left-img.png'

const TopLeftImgCard = () => {
  return (
    <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]'>
      <Image src={TopleftImg} alt='img' className='h-[400px] w-[400px]' />
    </div>
  )
}

export default TopLeftImgCard