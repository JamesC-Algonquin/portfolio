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
        <p>Hello, my name is James Ching. I make various applications for desktop, web, and mobile development.
          I strongly believe effective coding, logical structure, and good communication is what makes the best software.
        </p></div>
      </motion.div>
    
  )
}
