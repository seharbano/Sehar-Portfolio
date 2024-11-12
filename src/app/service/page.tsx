'use client'
import Bulb from '@/globalComponents/cards/Bulb'
import Circles from '@/globalComponents/cards/Circles'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from "../Varient";
import MyServicesSlider from '@/globalComponents/slider/MyServicesSlider';

const Service = () => {
  return (
    <div className='h-screen overflow-hidden bg-primary/30 py-36 flex items-center '>
      <Circles />
      <div className='  gap-x-6 grid xl:grid-cols-5  grid-cols-1 max-[1280px]:flex max-[1280px]:flex-col w-full min-[1600px]:px-[290px] xl:px-[160px] max-[1280px]:px-14 max-[620px]:px-6'>

        <div className=' col-span-2 flex flex-col justify-start items-center w-[350px] min-w-[300px] max-[1440px]:w-[280px] max-[1280px]:w-full max-[1280px]:min-w-full'>
          <motion.h1
            variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
            className="text-[35px] max-[1280px]:text-center min-[1280px]:w-full text-left min-[1330px]:text-[45px] xl:text-[35px] xl:font-semibold z-20 max-[600px]:text-[30px] max-[410px]:text-[20px]  max-[600px]:font-semibold font-bold">My Services<span className="text-[#d3352f]">. </span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden"
            className=" max-[620px]:px-6 text-center xl:text-left max-[1440px]:w-[350px] max-[620px]:w-auto text-[13px] max-[620px]:text-[12px]  mb-8 xl:mb-10 z-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptas corrupti, distinctio adipiscinostrum.
          </motion.p>
        </div>
        <motion.div className='w-auto col-span-3 max-[1280px]:px-6 ' variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
          <MyServicesSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  )
}

export default Service