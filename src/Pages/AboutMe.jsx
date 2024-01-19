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
        <img src={picture} style={{width:'auto', height:'auto', float:'right'}}/>
        <h2>Background</h2>
          <p>
            I am a programmer based in Moncton, New Brunswick. I've been working on my computer programming skills since high school,
            and have always had an interest in anything computer or technology related.
            <br/>
            Aside from computer programming, I have an interest in music, as well as martial arts. I've been playing drums locally
            for 7 years, and can also play piano and electric guitar. I have a first-degree black belt in Shotokan Karate, and instruct
            classes on the weekends.
            <br/>
            I am also trilingual, speaking English, French, and Japanese. I am half Canadian and half Japanese, and despite common 
            belief, my last name "Ching" is not of Japanese origin (or Asian at all, for that matter), but rather comes from 
            Southwestern England.
          </p>
        <h2>Education and Skills</h2>
        <p>Graduated with honours and 3.96/4.0 GPA from Computer Programming Course at Algonquin College.</p>
        <p style={{marginBottom:0, paddingBottom:0}}>Skilled in:</p>
        <ul style={{marginTop:0, paddingTop:0}}>
          <li>Object-Oriented Programming (Java, Python, C++)</li>
          <li>Database Systems and Design (MySQL, Oracle)</li>
          <li>Android Mobile App Development</li>
          <li>Web Development and Design (HTML, CSS, JavaScript)</li>
        </ul>
      </div>

    </motion.div>
  )
}
