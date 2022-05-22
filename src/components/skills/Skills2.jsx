import React from 'react'
import skill_image from "./skills.jpg";
import "./Skills2.css"

function Skills2() {
  return (
    <div className='skills2'>
    <h1>Skills</h1>
    <div className="img_div">
    <img src={skill_image} alt="my skills"></img>
    </div>
    </div>
  )
}

export default Skills2
