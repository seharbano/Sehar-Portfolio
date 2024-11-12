'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from "../Varient";
import Mixbulb from '@/globalComponents/cards/Mixbulb';
import Path from '@/globalComponents/cards/Path';
import Bulb from '@/globalComponents/cards/Bulb';
import Officeimg from '@/globalComponents/cards/Officeimg';
import GlobalInput from '@/globalComponents/inputs/GlobalInput';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className='relative'>


      <div className="h-screen min-[1600px]:px-[260px] xl:px-[160px] max-[1280px]:px-5 flex justify-center w-full items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className='w-full flex flex-col justify-center items-center '>
          <motion.h1
            variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit="hidden"
            className="text-[35px] min-[1330px]:text-[45px] xl:text-[35px] xl:font-semibold z-20 max-[600px]:text-[30px] max-[410px]:text-[20px] max-[620px]:px-4 max-[600px]:font-semibold font-bold">Let 's {""}<span className="text-[#d3352f]"> Contact.</span>
          </motion.h1>
          <div className='w-full px-[250px] max-[900px]:px-[50px] max-[450px]:px-6'>
            <motion.div
              variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden"
              className='grid max-[620px]:grid-cols-1 grid-cols-2 mt-6 gap-6'>
              <GlobalInput inputType='text' Placeholder='Name' width='100%' className="w-[100%]" />
              <GlobalInput inputType='text' Placeholder='Email' className="w-[100%]" />
            </motion.div>
            <motion.div
              variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
              className='mt-6'>
              <GlobalInput inputType='text' Placeholder='Subject' className="w-[100%]" />
            </motion.div>
            <motion.div
              variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
              className=''
            >
              <textarea className='h-[200px] max-[620px]:h-[100px] w-[100%] mt-6 border bg-transparent rounded-[5px] border-gray-400 text-white placeholder:text-gray-400 p-4 outline-none focus:outline-none focus:border focus:border-white ' />
              <div className=''>
                <Button className='border border-gray-500 w-[120px] hover:bg-transparent hover:text-red-500 h-[40px] bg-transparent mt-4 rounded-[20px]'>let's talk </Button>
              </div>
            </motion.div>
            <div>

            </div>
          </div>
        </div>

      </div>

      <Officeimg />

      <Bulb />
    </div>
  )
}

export default Contact