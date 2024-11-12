import Image from 'next/image'
import React from 'react'

type props = {
  ClientImg: any;
  ClientName: string;
  Service: string;
  Description: string;
};
const ClientsReviewsCard = ({ ClientImg, ClientName, Service, Description }: props) => {
  return (
    <div className='flex justify-start max-[620px]:flex-col items-center gap-x-6'>
      <div className='flex flex-col justify-center items-center gap-[2px] pr-10 max-[620px]:border-r-0 border-r border-slate-500'>

        <div className="w-auto h-auto flex flex-shrink-0">
          <Image
            src={ClientImg}
            alt=""
            className="w-[120px] h-[120px] max-w-none max-h-none object-cover min-w-[80px] min-h-[80px] max-[620px]:w-[80px] max-[620px]:h-[80px]"
          />
        </div>

        <p className='text-white text-[15px] max-[620px]:text-[12px] mt-2'> {ClientName}</p>
        <span className='text-white uppercase text-[11px] max-[620px]:text-[9px]'> {Service}</span>
      </div>
      <div className=''>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px] [&>path]:fill-[#48415e] [&>path]:hover:fill-red-500 mb-4' viewBox="0 0 1664 1408">
          <path d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136" />
        </svg>
        <p className='text-white text-[15px] text-wrap max-[620px]:text-[12px] text-left'>
          {Description}
        </p>
      </div>
    </div>
  )
}

export default ClientsReviewsCard