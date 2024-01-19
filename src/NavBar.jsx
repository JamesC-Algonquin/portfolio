import React from 'react'
import './styles.css'
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav">
          <ul >
              <li><Link to="/"> Home</Link></li>
              <li><Link to="/Projects"> Projects</Link></li>
              <li><Link to="/AboutMe"> About Me</Link></li>
              <li><Link to="/Contact"> Contact</Link></li>
          </ul>
      </nav>
      <Outlet/>
    </>
  )
}
