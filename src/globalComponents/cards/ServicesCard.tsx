import Image from 'next/image'
import React from 'react'
type props = {
  serviceName: string;
  serviceImg: any;
  description: string;
};
const ServicesCard = ({ serviceImg, serviceName, description }: props) => {

  return (
    <div className='h-[250px] cursor-pointer group flex flex-col justify-center bg-[#241c44] p-4 rounded-[10px] items-start gap-y-2'>
      <Image src={serviceImg} alt='img' className='w-[35px] mb-2 h-[35px]' />
      <h1>{serviceName}</h1>
      <p>{description}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="z-20 cursor-pointer w-[30px] h-[30px] transition-transform group-hover:rotate-45" viewBox="0 0 24 24">
        <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" className="fill-white group-hover:fill-[#d3352f]" />
      </svg>
    </div>

  )
}

export default ServicesCard