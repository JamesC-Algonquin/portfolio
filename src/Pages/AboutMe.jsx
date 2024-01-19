import React from 'react'
import { motion } from 'framer-motion'
import picture from '../Images/jc.jpg'

export default function AboutMe() {
  return (
    <motion.div className="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>

      <h1>About Me</h1>
        <h2>Background</h2>
          <p>I am a programmer based in Moncton, New Brunswick. I've been working on my computer programming skills since high school,
            and have always had an interest in anything computer or technology related.
            <br/>
            Aside from computer programming, I have an interest in music, as well as martial arts. I've been playing drums locally for
            7 years, and can also play piano and electric guitar. I have a first-degree black belt in Shotokan Karate, and instruct
            classes on the weekends.
          </p>
        <h2>Education and Skills</h2>
        <p>Graduated with honours and 3.96/4.0 GPA from Computer Programming Course at Algonquin College.</p>
        <p>Skilled in:</p>
        <ul>
          <li>Object-Oriented Programming (Java, Python, C++)</li>
          <li>Database Systems and Design (MySQL, Oracle)</li>
          <li>Android Mobile App Development</li>
          <li>Web Development and Design (HTML, CSS, JavaScript)</li>
        </ul>
        <h2>Interesting Facts</h2>
    </motion.div>
  )
}
