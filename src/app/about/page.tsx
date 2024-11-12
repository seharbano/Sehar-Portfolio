'use client'
import Avator from "@/globalComponents/cards/Avator";
import { motion } from 'framer-motion';
import { fadeIn } from "../Varient";
import Circles from "@/globalComponents/cards/Circles";
import CountUp from "react-countup"
import AboutTabsmain from "@/globalComponents/aboutTabs/AboutTabsmain";
const About = () => {
  return (
    <div className="h-screen flex justify-between w-full items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="flex justify-between min-[1600px]:pl-[260px] min-[1600px]:pr-[290px] xl:px-[160px] max-[1280px]:px-5 items-center w-full max-[1280px]:h-[100vh] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:justify-center max-[1280px]:items-center ">
        <div className="w-full  ">
          <div className="text-center flex flex-col justify-center max-[1280px]:h-auto  items-center min-[1281px]:items-start  container min-[1281px]:pb-20 max-[1281px]:pb-2 max-[1281px]:pt-10 min-[1281px]:text-left ">
            <motion.h1
              variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
              className="text-[35px] min-[1330px]:text-[45px] xl:text-[35px]   xl:font-semibold z-20 max-[600px]:text-[30px] max-[410px]:text-[20px] max-[620px]:px-4 max-[600px]:font-semibold font-bold">Captivating <span className="text-[#d3352f]">Design</span> <br /></motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden"
              className="max-[1280px]:max-w-xl max-[620px]:px-6  text-[13px] max-[620px]:text-[10px] xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-10 z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus odit et tempora
              voluptas corrupti, distinct sci talias error quibusdam temporibus
              nostrum. Eaque doloribus voluptate ipsam quae!</motion.p>
            <div className="grid grid-cols-4 max-[400px]:grid-cols-3 gap-x-8 max-[550px]:gap-x-2 max-[620px]:px-1 max-[1280px]:max-w-xl max-[620px]:max-w-full xl:max-w-xl w-full justify-between items-center gap-2">
              <motion.div className="relative  after:bg-white/10  after:absolute after:top-0 after-:right-0 ">
                <div className="border-r border-gray-500 pr-6 max-[550px]:pr-2">
                  <div className="text-[30px] max-[1600px]:text-[25px] max-[620px]:text-[16px] max-[370px]:text-[15px]  text-[#d3352f] font-bold">
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <h2 className="text-white uppercase  text-[13px] max-[620px]:text-[10px] max-[410px]:text-[10px] max-[350px]:text-[8px] max-[370px]:text-[9px] font-[400]">Years Of <br /> Experience</h2>
                </div>
              </motion.div>

              <motion.div className="relative max-[400px]:hidden  after:bg-white/10  after:absolute after:top-0 after-:right-0 ">
                <div className="border-r border-gray-500 pr-6 max-[550px]:pr-2">
                  <div className="text-[30px] max-[1600px]:text-[25px] max-[620px]:text-[16px] max-[370px]:text-[15px]  text-[#d3352f] font-bold">
                    <CountUp start={0} end={237} duration={5} /> +
                  </div>
                  <h2 className="text-white  text-[13px] max-[620px]:text-[10px] max-[410px]:text-[10px] max-[350px]:text-[8px] max-[370px]:text-[9px] uppercase font-[400]">Satisfied <br /> Clients</h2>
                </div>
              </motion.div>

              <motion.div className="relative after:bg-white/10  after:absolute after:top-0 after-:right-0 ">
                <div className="border-r border-gray-500 pr-6 max-[550px]:pr-2">
                  <div className="text-[30px] max-[1600px]:text-[25px] max-[620px]:text-[16px] max-[370px]:text-[15px]  text-[#d3352f] font-bold">
                    <CountUp start={0} end={420} duration={5} /> +
                  </div>
                  <h2 className="text-white  text-[13px] max-[620px]:text-[10px] max-[410px]:text-[10px] max-[350px]:text-[8px] max-[370px]:text-[9px] uppercase font-[400]">Finished <br /> Projects</h2>
                </div>
              </motion.div>
              <motion.div className="relative  after:bg-white/10  after:absolute after:top-0 after-:right-0 ">
                <div className="pr-6 max-[550px]:pr-2">
                  <div className="text-[30px] max-[1600px]:text-[25px] max-[620px]:text-[16px] max-[370px]:text-[15px]  text-[#d3352f] font-bold">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <h2 className="text-white  text-[13px] max-[620px]:text-[10px] max-[410px]:text-[10px] max-[350px]:text-[8px] max-[370px]:text-[9px] uppercase font-[400]">Winning <br /> Awards</h2>
                </div>

              </motion.div>
            </div>
          </div>
        </div>

        <div className="second-main-div items-center min-[1460px]:pl-12 flex flex-col justify-center h-auto pt-6 xl:pb-30 max-[620px]:pb-0 max-[620px]:px-6 ">
          <AboutTabsmain />
        </div>
      </div>
      <motion.div
        variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden"
        className="hidden xl:flex absolute -bottom-2 -left-[360px]">
        <Avator />
      </motion.div>

      <Circles />
    </div>
  )
}

export default About