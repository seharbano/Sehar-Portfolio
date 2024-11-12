'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from "../Varient";
import Mixbulb from '@/globalComponents/cards/Mixbulb';
import Path from '@/globalComponents/cards/Path';
import WebsiteWorkSliderCard from '@/globalComponents/cards/WebsiteWorkSliderCard';
import WorkWebsiteSlider from '@/globalComponents/slider/WorkWebsiteSlider';

const Work = () => {
  return (
    <div>
      <Path />

      <div className="h-screen flex justify-between w-full items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex justify-between min-[1600px]:px-[260px] xl:px-[160px] max-[1280px]:px-5 items-center w-full max-[1280px]:h-[100vh] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:justify-center max-[1280px]:items-center ">
          <div className="w-full max-[1280px]:pt-10  ">
            <div className="text-center flex flex-col justify-center max-[1280px]:h-auto  items-center min-[1281px]:items-start  container min-[1281px]:pb-20 max-[1280px]:pb-2 min-[1281px]:text-left ">
              <motion.h1
                variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
                className="text-[35px] min-[1330px]:text-[45px] xl:text-[35px] xl:font-semibold z-20 max-[600px]:text-[30px] max-[410px]:text-[20px] max-[620px]:px-4 max-[600px]:font-semibold font-bold">My Work <span className="text-[#d3352f]">.</span> </motion.h1>
              <motion.p
                variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden"
                className=" max-[620px]:px-6 w-[350px] text-center xl:text-left max-[1440px]:w-[350px] max-[620px]:w-auto text-[13px] max-[620px]:text-[12px]  mb-2 xl:mb-10 z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus odit et tempora
                voluptas corrupti, distinctio adipisci tenetur aperiam numquam alias error quibusdam temporibus
                nostrum quae!
              </motion.p>
            </div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.2)} initial="hidden" animate="show" exit="hidden"
            className='max-[1280px]:p-14 max-[1280px]:pt-2'>
            <WorkWebsiteSlider />
          </motion.div>
        </div>

      </div>

      <Mixbulb />
    </div>
  )
}

export default Work