import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div className="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <h1>Contact</h1>
      <h3>E-Mail Address</h3>
      <p>jarech948@gmail.com</p>
      <h3>LinkedIn Profile</h3>
      <p><a href='https://www.linkedin.com/in/james-ching-362659280/' target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/james-ching-362659280/</a></p>
      <h3>GitHub Profile</h3>
      <p><a href='https://github.com/JamesC-Algonquin' target="_blank" rel="noopener noreferrer">https://github.com/JamesC-Algonquin</a></p>
    </motion.div>
  )
}
