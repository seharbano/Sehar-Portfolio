'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-20 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
      <div className='flex w-full xl:flex-col items-center justify-between xl:px-0 md:px-40 xl:justify-center gap-y-8 px-4 h-[80px] py-8 xl:h-max bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>

        <Link className=" [&>svg]:hover:fill-[#81e6eb] relative flex items-center cursor-pointer group [&>svg]:fill-white transitions-all duration-300" href='/'>
          <div className='absolute z-50 pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-[#261a4b] items-center p-[6px] rounded-[3px] '>

              <div className='text-[12px] leading-none font-semibold capitalize '>
                Home
              </div>

              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute border-r-0 -right-2 ' />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 xl:w-[20px] xl:h-[20px]' viewBox="0 0 36 36">
            <path d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19" className="clr-i-solid clr-i-solid-path-1" />
            <path d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z" className="clr-i-solid clr-i-solid-path-2" />
            <path fill="none" d="M0 0h36v36H0z" /></svg>
        </Link>

        <Link className=" [&>svg]:hover:fill-[#81e6eb] relative flex items-center cursor-pointer group [&>svg]:fill-white transitions-all duration-300" href='/about'>
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-[#261a4b] items-center p-[6px] rounded-[3px] '>
              <div className='text-[12px] leading-none font-semibold capitalize '>
                About
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute border-r-0 -right-2 ' />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 xl:w-[20px] xl:h-[20px]' viewBox="0 0 24 24">
            <path d="M4 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6" /></svg>
        </Link>

        <Link className=" [&>svg]:hover:fill-[#81e6eb] relative flex items-center cursor-pointer group [&>svg]:fill-white transitions-all duration-300" href='/service' >
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-[#261a4b] items-center p-[6px] rounded-[3px] '>
              <div className='text-[12px] leading-none font-semibold capitalize '>
                Service
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute border-r-0 -right-2 ' />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 xl:w-[20px] xl:h-[20px]' viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 0 0 1 4.5v4A1.5 1.5 0 0 0 2.5 10h6A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3zm11 2A1.5 1.5 0 0 0 12 6.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5zm-10 7A1.5 1.5 0 0 0 2 13.5v2A1.5 1.5 0 0 0 3.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 9.5 12z" clip-rule="evenodd" /></svg>
        </Link>

        <Link className=" [&>svg]:hover:fill-[#81e6eb] relative flex items-center cursor-pointer group [&>svg]:fill-white transitions-all duration-300" href='/work' >
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-[#261a4b] items-center p-[6px] rounded-[3px] '>
              <div className='text-[12px] leading-none font-semibold capitalize '>
                Work
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute border-r-0 -right-2 ' />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 xl:w-[20px] xl:h-[20px]' viewBox="0 0 24 24">
            <path d="M14.67 6v12c0 .55-.45 1-1 1h-3.33c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h3.33c.55 0 1 .45 1 1m2 13H20c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1v12c0 .55.44 1 1 1m-8.34-1V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1" /></svg>
        </Link>

        <Link className=" [&>svg]:hover:fill-[#81e6eb] relative flex items-center cursor-pointer group [&>svg]:fill-white transitions-all duration-300" href='/testimonials' >
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-[#261a4b] items-center p-[6px] rounded-[3px] '>
              <div className='text-[12px] leading-none font-semibold capitalize '>
                Testimonials
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute border-r-0 -right-2 ' />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 xl:w-[20px] xl:h-[20px]' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943q1.357.163 2.737.243c.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556q1.38-.08 2.738-.243C14.287 10.565 15 9.723 15 8.74V4.259c0-.982-.713-1.824-1.69-1.942a44.5 44.5 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25M4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd" /></svg>
        </Link>

        <Link className=" [&>svg]:hover:fill-[#81e6eb] relative flex items-center cursor-pointer group [&>svg]:fill-white transitions-all duration-300" href='/contact' >
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-[#261a4b] items-center p-[6px] rounded-[3px] '>
              <div className='text-[12px] leading-none font-semibold capitalize '>
                Contact
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute border-r-0 -right-2 ' />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 xl:w-[20px] xl:h-[20px]' viewBox="0 0 24 24">
            <g >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0z" /></g></svg>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar