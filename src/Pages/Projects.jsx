import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.div className="content"
    initial={{opacity:1}}
    animate={{opacity:1}}
    exit={{opacity:0}}>

      <h1>Projects</h1>

      <h2>This Website</h2>
      <p>This website itself is actually a project demonstration in itself.
        <br/>
        It is coded entirely using the React JavaScript framework, implementing an intuitive navigation menu 
        and animated transitions between pages. 
        Check out the source code on the <a href='https://github.com/JamesC-Algonquin/portfolio'>GitHub Repository</a>.
      </p>

      <h2>NASA Image of the Day</h2>
    </motion.div>
  )
}
