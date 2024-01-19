import React from 'react'
import './styles.css'
import { Outlet, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav">
          <ul >
              <li><NavLink to="/"> Home</NavLink></li>
              <li><NavLink to="/Projects"> Projects</NavLink></li>
              <li><NavLink to="/AboutMe"> About Me</NavLink></li>
              <li><NavLink to="/Contact"> Contact</NavLink></li>
          </ul>
      </nav>
      <Outlet/>
    </>
  )
}
