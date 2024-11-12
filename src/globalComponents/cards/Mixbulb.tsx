import Image from 'next/image';
import React from 'react';
import mixbulb from '@/assets/pngs/bulb-colorfull.webp';

const Mixbulb = () => {
    return (
        <div className='absolute left-[-115px] -bottom-20  mix-blend-exclusion animate-pulse duration-600 z-10 w-[210px] xl:w-[260px] '>
            <Image src={mixbulb} alt='bulb' width={260} height={200} className='w-full h-full' />
        </div>
    )
}

export default Mixbulb 