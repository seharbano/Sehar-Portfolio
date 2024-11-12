import Image from 'next/image';
import React from 'react';
import Bulbmy from '@/assets/pngs/interior.jpeg';

const Officeimg = () => {
    return (
        <div className='w-[200px] xl:w-[300px] absolute -right-1 -bottom-2 mix-blend-color-dodge animate-pulse duration-600 z-10 '>
            <Image src={Bulbmy} alt='' className='w-full rounded-tl-full h-full' />
        </div>
    )
}

export default Officeimg