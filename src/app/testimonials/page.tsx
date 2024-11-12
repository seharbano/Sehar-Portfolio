'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from "../Varient";
import Mixbulb from '@/globalComponents/cards/Mixbulb';
import MySeason from '@/globalComponents/cards/MySeason';
import ClientReviewsSlider from '@/globalComponents/slider/ClientReviewsSlider';

const Testimonials = () => {
  return (
    <div className='overflow-hidden'>

      <div className="h-screen min-[1600px]:px-[260px] xl:px-[160px] max-[1280px]:px-5 flex justify-center w-full items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className='w-full flex flex-col justify-center items-center '>
          <motion.h1
            variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
            className="text-[35px] min-[1330px]:text-[45px] xl:text-[35px] xl:font-semibold z-20 max-[600px]:text-[30px] max-[410px]:text-[20px] max-[620px]:px-4 max-[600px]:font-semibold font-bold">What Clients <span className="text-[#d3352f]">Say.</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden"
            className='w-[90%]'>
            <ClientReviewsSlider />
          </motion.div>
        </div>

      </div>
      <div className='relative right-0'>
        <MySeason />
      </div>
      <Mixbulb />
    </div >
  )
}

export default Testimonials