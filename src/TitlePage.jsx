import React from 'react'
import NavBar from './NavBar'
import './styles.css'

export default function TitlePage() {
  return (
    <>
    <NavBar/>
    <div className="front">
        <h1>James Ching</h1>
        <h2>Software Developer</h2>
        <p>Hello, my name is James Ching. I am a software developer skilled in many languages and technologies, 
          including web development and mobile application development.</p>
      </div>
    </>
  )
}
