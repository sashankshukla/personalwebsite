import React from 'react'
import skill_image from "./skills.jpg";
import "./Skills2.css"

function Skills2() {
  return (
    <div className='skills2'>
      <div className="left">
        <h1>S</h1>
        <h1>k</h1>
        <h1>i</h1>
        <h1>l</h1>
        <h1>l</h1>
        <h1>s</h1>
      </div>
    <div className="img_div">
    <img src={skill_image} alt="my skills"></img>
    </div>
    </div>
  )
}

export default Skills2
