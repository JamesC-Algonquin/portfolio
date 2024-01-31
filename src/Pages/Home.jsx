import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    
    <motion.div className="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <br/>
        <h1>James Ching</h1>
        <h2>Software Developer</h2>
        <div className='front'>
        <p>
          I am a software developer with experience making applications for desktop, web, and mobile environments. 
          Throughout my programming career, my focus has been on effective, 
          concise programming, logical structure and design, and good communication.
        </p>
        </div>
      </motion.div>
    
  )
}
