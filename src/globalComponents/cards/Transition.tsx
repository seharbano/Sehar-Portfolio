import React from 'react'
import { motion } from 'framer-motion'
const transtionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', "100%"],
  }
}
const Transition = () => {
  return (
    <>
      <motion.div className='fixed bottom-0 top-0 right-full h-screen z-30 bg-[#2f30302f] '
        variants={transtionVariants}
        initial='initial'
        animate="animate"
        exit="exite"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >

      </motion.div>
      <motion.div className='fixed bottom-0 top-0 right-full h-screen z-20 bg-[#2f30302f] '
        variants={transtionVariants}
        initial='initial'
        animate="animate"
        exit="exite"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      >

      </motion.div>
      <motion.div className='fixed bottom-0 top-0 right-full h-screen z-10 bg-[#2f30302f] '
        variants={transtionVariants}
        initial='initial'
        animate="animate"
        exit="exite"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >

      </motion.div>

    </>
  )
}

export default Transition