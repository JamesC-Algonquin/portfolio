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
      <div style={{overflow:'auto'}}>
        <img src={picture} style={{width:'30vw', height:'auto', float:'right'}}/>
        <h2>Background</h2>
          <p>
            I am a programmer based in Moncton, New Brunswick. I've been working on my computer programming skills since 2018,
            and have always had an interest in anything computer or technology related.
            
            Aside from computer programming, I have an interest in music, as well as martial arts.  I play drums and piano, and 
            I'm currently learning to play electric guitar. I have a first-degree black belt in Shotokan Karate, and instruct
            classes on the weekends.
            
            I am also trilingual, speaking English, French, and Japanese. Contrary to common belief, my last name "Ching" is not 
            of Japanese origin (or Asian at all, for that matter), but is actually English in origin.
          </p>
        <h2>Education and Skills</h2>
        <p>Graduated with honours and 3.96/4.0 GPA from the Computer Programming course at Algonquin College.</p>
        <p style={{marginBottom:0, paddingBottom:0}}>Skilled in:</p>
        <ul style={{marginTop:0, paddingTop:0}}>
          <li>Object-Oriented Programming (Java, Python, C++)</li>
          <li>Database Systems and Design (MySQL, Oracle)</li>
          <li>Web Development and Design (HTML, CSS, JavaScript)</li>
          <li>Android Mobile App Development</li>
        </ul>
      </div>

    </motion.div>
  )
}
