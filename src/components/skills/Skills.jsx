import "./Skills.css"

export default function Skills() {
  return (
    <div className="skills" id="skills">
        <div className="top">
         <h1>Skills</h1>
        </div>
        <div className="wrapper">
         <div className="left">
           <div className="skill">
             <img src="assets/reacticon.png" alt=""></img>
             React
           </div>
           <div className="skill">C++</div>
           <div className="skill">JavaScript</div>
           <div className="skill">Data Structures</div>
         </div>
         <div className="middle">
            <div className="skill">HTML</div>
            <div className="skill">Java</div>
            <div className="skill">CSS</div>
            <div className="skill">Algorithms</div>
         </div>
         <div className="right">
           <div className="skill">CSS</div>
           <div className="skill">Python</div>
           <div className="skill">C</div>
           <div className="skill">Git</div>
         </div>
        </div>
    </div>
  )
}
