import Image from 'next/image';
import React from 'react';
import Pathimg from '@/assets/pngs/rounded.jpg';

const Path = () => {
    return (
        <div className='w-[180px] xl:w-[300px]  absolute max-[620px]:-right-6 -right-1 -bottom-2 max-[620px]:-bottom-16 mix-blend-color-dodge animate-pulse duration-600 z-10 '>
            <Image src={Pathimg} alt='bulb' width={260} height={200} className='w-full rounded-tl-full h-full' />
        </div>
    )
}

export default Path

