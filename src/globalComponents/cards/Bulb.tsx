import Image from 'next/image';
import React from 'react';
import Bulbmy from '@/assets/pngs/bulb.png';

const Bulb = () => {
  return (
    <div className='absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-600 z-10 w-[200px] xl:w-[260px] '>
      <Image src={Bulbmy} alt='bulb' width={260} height={200} className='w-full h-full' />
    </div>
  )
}

export default Bulb