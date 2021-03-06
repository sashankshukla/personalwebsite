import "./Intro.css"
import {init} from "ityped";
import React from 'react';
import { useEffect , useRef } from "react";

export default function Intro() {
  const textToChange = useRef(); 
  useEffect(() => {
    init(textToChange.current , {
      showCursor: true,
      strings: ["a Sophomore at UBC" , "an aspiring Software Engineer" , "a Competitive Programmer"],
    })
  } , [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/personalphoto.png" alt="me"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Sashank Shukla</h1>
          <h3>I'm <span ref={textToChange}></span></h3>
        </div>
        {/* <a href="#portfolio">
          <img className="down-arrow" src="assets/downarrow.png" alt="down arrow"></img>
        </a> */}
      </div>
    </div>
  )
}
