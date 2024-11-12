import Image from 'next/image'
import React from 'react'
import Circle from "@/assets/pngs/SKY.jpg"
const MySeason = () => {
    return (
        <div className='w-[180px] xl:w-[210px] absolute -right-1 -bottom-2 mix-blend-color-dodge animate-pulse duration-600 z-10 '>
            <Image src={Circle} alt='' className='w-full h-full rounded-tl-full' />
        </div>
    )
}

export default MySeason