import React from 'react'
import Image from 'next/image'
import TextImg from '@/assets/pngs/rounded-text.png'
import Link from 'next/link'
const ProjectButton = () => {
  return (
    <div>
      <div className='mx-auto xl:mx-0 text-white'>
        <Link href="/work" className='relative w-[185px] h-[185px] max-[600px]:w-[150px] max-[600px]:h-[150px] flex justify-center items-center bg-circlestar bg-cover bg-no-repeat group '>
          <Image src={TextImg} alt='text' className=' animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] max-[600px]:max-w-[120px] max-[600px]:max-h-[120px] ' />
          <svg className='absolute h-[40px] w-[40px] group-hover:translate-x-2 transition-all duration' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 12l-5-5m5 5l-5 5m5-5H3" /></svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectButton