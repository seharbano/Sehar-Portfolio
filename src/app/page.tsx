'use client'
import ParticlesContainer from "@/globalComponents/cards/ParticlesContainer";
import ProjectButton from "@/globalComponents/button/ProjectButton";
import Avator from "@/globalComponents/cards/Avator";
import { motion } from 'framer-motion';
import { fadeIn } from "./Varient";

const Home = () => {
  return (
    <div className="h-[100vh] bg-primary/60">
      <div className="w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center h-[100vh] items-center xl:items-start min-[1600px]:px-[290px] xl:px-[160px] max-[1280px]:px-5  min-[1380px]:pb-20 min-[1279px]:pb-0 xl:text-left ">
          <motion.h1
            variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
            className="text-[40px] z-20 max-[600px]:text-[30px] max-[600px]:font-semibold font-bold">Transforming Ideas <br /> Into {''} <span className="text-[#d3352f]">Digital Reality</span></motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-10 z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus odit et tempora
            voluptas corrupti, distinctio adipisci tenetur aperiam numquam alias error quibusdam temporibus
            nostrum. Eaque doloribus voluptate ipsam quae!</motion.p>
          <div className="flex justify-center z-20 xl:hidden relative">
            <ProjectButton />
          </div>
          <motion.div className="hidden xl:flex z-20 " variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
            <ProjectButton />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right  xl:bg-no-repeat w-full h-full  mix-blend-color-dodge translate-z-0 " >
        </div>
        <div className=" flex w-[100%] h-[100%]  absolute top-10 z-[10]">
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] max-[1380px]:max-h-[550px] max-[1380px]:right-[10px] z-[10] absolute -bottom-38 lg:bottom-0  right-[8%] ">
          <Avator />
        </motion.div>

      </div>
    </div>
  );
}
export default Home