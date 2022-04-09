import "./Portfolio.css"
import { useState } from "react"; 

export default function Portfolio() {
  const items = [{
    title: "May 1940",
    contentTitle: "Dunkirk",
    contentText:"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    contentDetailedText: "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
  }];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Me</h1>
       <div className="timeline">
       </div>
    </div>
  )
}