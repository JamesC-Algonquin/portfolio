import React from 'react'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.div className="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <h1>About Me</h1>
    </motion.div>
  )
}
