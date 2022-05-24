import React from 'react'
import "./menu.css"

export default function menu({menuOpen , setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
       <ul>
           <li onClick={() => setMenuOpen(false)}>
              <a href="#intro">Home</a>
           </li>
           <li onClick={() => setMenuOpen(false)}>
              <a href="#portfolio">About me</a>
           </li>
           <li onClick={() => setMenuOpen(false)}>
              <a href="#skillsnew">Skills</a>
           </li>
           <li onClick={() => setMenuOpen(false)}>
              <a href="#work">Projects</a>
           </li>
       </ul>
    </div>
  )
}
