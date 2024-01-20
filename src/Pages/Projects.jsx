import React from 'react'
import { motion } from 'framer-motion'
import nasa1 from '../Images/nasa1.png'
import nasa2 from '../Images/nasa2.png'
import solitaire from '../Images/solitaire.png'
import py1 from '../Images/py1.png'

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
        Check out the source code on the <a href='https://github.com/JamesC-Algonquin/portfolio' target="_blank" rel="noopener noreferrer">GitHub Repository</a>.
      </p>
      <br/>
      <br/>

      <h2>NASA Image of the Day</h2>
      <div style={{overflow:'auto'}}>
        <img src={nasa1} style={{width:'15vw', float:'right'}}/>
        <img src={nasa2} style={{width:'15vw', float:'right'}}/>
        
        <p>The "NASA Image of the Day" project is an Android based application that displayed images from NASA's APOD library.
          For reference, APOD (Astronomy Picture of the Day) 
          is an <a href='https://apod.nasa.gov/apod/archivepixFull.html' target="_blank" rel="noopener noreferrer">online archive</a> to which 
          NASA posts a new image every day, with an associated description of the image. This application queries an API using specific
          dates to download images and their associated data from the archive. It is capable of displaying the current image based on the local time/date,
          displaying a slideshow of every image available since 1995 in random order, searching for specific images by date, and saving searched 
          images to the device.
          <br/>
          <br/>
          Check the source code and Android APK releases at the <a href='https://github.com/JamesC-Algonquin/NasaDailyImage' target="_blank" rel="noopener noreferrer">GitHub Repository.</a>
        </p>
      </div>

      <h2>Solitaire in Java Swing</h2>
      <div style={{overflow:'auto'}}>
        <img src={solitaire} style={{width:'32vw', float:'right'}}/>
        <p>This project is an exact re-creation of the classic Solitaire card game, using Java's Swing GUI framework. It was designed
          with Object-Oriented Programming and Design Principles and Patterns in mind, and follows roughly a MVC architecture.
          It even has some bonus features, such as multiple card background choices, regular and Klondike game modes, and score keeping.
          <br/>
          <br/>
          To see source code and Windows-ready releases, check it out <a href='https://github.com/JamesC-Algonquin/Solitaire-JavaSwing' target="_blank" rel="noopener noreferrer">here.</a>
        </p>
      </div>

      <h2>Python Directory Organizer</h2>
      <div style={{overflow:'auto'}}>
      <img src={py1} style={{width:'32vw', float:'right'}}/>
      <p>
        The Python Directory Organizer is a simple project aimed at simplifying folder management. It takes an array of 'rules'
        from a JSON files, defined by a directory name and a list of file extensions. When the script is pointed to a folder and is run,
        it searches in the folder for all files matching the file extensions listed in the ruleset. If found, it will automatically place
        the file in the associated folder, creating the folder if it does not already exist.
        <br/>
        The JSON file containing the ruleset can be opened in any text editor or IDE (or from the convenient link in the app UI),
        and be easily changed to the user's preference. The application also features a option to reset the configuration to default, 
        in the event that the ruleset is incorrectly defined.
        <br/>
        <br/>
        Find the source code <a href='https://github.com/JamesC-Algonquin/PythonDirectoryOrganizer' target="_blank" rel="noopener noreferrer">here.</a>
      </p>

      </div>
      
    </motion.div>
  )
}
