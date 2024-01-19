import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.div className="content"
    initial={{opacity:1}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <h1>Projects</h1>
    </motion.div>
  )
}
