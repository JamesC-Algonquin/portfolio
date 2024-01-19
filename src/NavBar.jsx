import React from 'react'
import './styles.css'

export default function NavBar() {
  return (
    <div className="nav">
        <ul >
            <li><a href="/"> Home</a></li>
            <li><a href="/"> Projects</a></li>
            <li><a href="/"> About Me</a></li>
            <li><a href="/"> Contact</a></li>
        </ul>
    </div>
  )
}
