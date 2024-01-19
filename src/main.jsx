import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import Contact from './Pages/Contact.jsx'
import NavBar from './NavBar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
