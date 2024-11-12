import Image from 'next/image'
import React from 'react'
// import { ProjectCardData } from '@/utilis/MockData'
type props = {
  ProjectName: string;
  ProjectImg: any;
  ProjectPart: string;
};
const WebsiteWorkSliderCard = ({ ProjectName, ProjectImg, ProjectPart }: props) => {
  return (
    <div className='relative rounded-md overflow-hidden flex justify-center items-center group'>
      <div className='relative rounded-md overflow-hidden flex justify-center items-center '>
        <Image src={ProjectImg} alt='' className='rounded-[10px] max-[500px]:rounded-[5px] max-[500px]:w-[100%] max-[500px]:h-[100%] cursor-pointer' />
      </div>
      <div className="absolute cursor-pointer inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]  opacity-0 group-hover:opacity-80 transition-all duration-600" />
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:bottom-6 group-hover:xl:-translate-y-20 transition-all duration-300 '>
        <div className='flex items-center gap-2'>
          <p className='text-white text-[15px] sm:text-[12px]'>{ProjectName}</p>
          <span className='text-white text-[15px] sm:text-[12px]'>{ProjectPart}</span>
        </div>
      </div>
    </div>

  )
}

export default WebsiteWorkSliderCard