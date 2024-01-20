import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import Contact from './Pages/Contact.jsx'
import NavBar from './NavBar.jsx'
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import './styles.css'

export default function Main(){
  
  return (
    <HashRouter>
      <NavBar />
      <AnimatedRoutes/>
    </HashRouter>
  )
}

export function AnimatedRoutes(){

  const location = useLocation()
  return(
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
