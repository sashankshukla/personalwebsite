import "./Skills.css"

export default function Skills() {
  return (
    <div className="skills" id="skills">
        <div className="top">
         <h1>Skills</h1>
         <h2>Currently in the process of learning Node.js, Flutter, Firebase, MongoDB, and Flask</h2>
        </div>
        <div className="wrapper">
         <div className="left">
           <div className="skill">
           <i class="devicon-react-original-wordmark colored react"></i>
           </div>
           <div className="skill">
            <i class="devicon-cplusplus-plain-wordmark colored"></i>
          </div>
           <div className="skill">
            <i class="devicon-javascript-plain colored js"></i>
          </div>
           <div className="skill text">
            <p>Data Structures</p>
           </div>
         </div>
         <div className="middle">
            <div className="skill">
            <i class="devicon-html5-plain-wordmark colored html"></i>
            </div>
            <div className="skill">
            <i class="devicon-java-plain-wordmark colored"></i>
            </div>
            <div className="skill">
            <i class="devicon-css3-plain-wordmark colored css"></i>
            </div>
            <div className="skill text">
              <p>Algorithms</p>
            </div>
         </div>
         <div className="right">
           <div className="skill">
           <i class="devicon-mysql-plain-wordmark"></i>
          </div>
           <div className="skill">
            <i class="devicon-python-plain-wordmark colored python"></i>
           </div>
           <div className="skill">
            <i class="devicon-c-plain-wordmark colored c"></i>
          </div>
           <div className="skill">
            <i class="devicon-git-plain-wordmark colored git"></i>
          </div>
         </div>
        </div>
    </div>
  )
}
