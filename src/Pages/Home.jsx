import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    
    <motion.div className="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <h1>James Ching</h1>
        <h2>Software Developer</h2>
        <p>Hello, my name is James Ching. I am a software developer skilled in many languages and technologies, 
          including web development and mobile application development.</p>
      </motion.div>
    
  )
}
