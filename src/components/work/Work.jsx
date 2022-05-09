import "./Work.css"
import { FaJava, FaPython, FaHtml5, FaJs, FaPhp, FaCss3Alt} from 'react-icons/fa';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {SiReact, SiTensorflow} from 'react-icons/si';


export default function Work() {
  const projects = [
    {
      title: "Personal Portfolio",
      subtitle: "React",
      icons:[<SiReact className="react"/>, <FaJs className="js"/> , <FaCss3Alt className="css"/>],
      description:
        "My personal website highlights my skills, projects and experience in programming and development",
      link: "https://github.com/sashankshukla/personalwebsite",
    },
    {
      title: "Sign Language Translator",
      subtitle: "HTML CSS JS and Google Teachable Machine",
      icons:[<FaHtml5 className="html"/> , <FaCss3Alt className="css"/> , <FaJs className="js"/> , <SiTensorflow className="tf"/>],
      description:
        "A sign language translator that recongizes common signs of the ASL and translates it to English",
      link: "https://github.com/sashankshukla/NWHacks",
    },
    {
      title: "Wallet App",
      subtitle: "Java JUnit",
      icons:[<FaJava className="java"/>],
      description:
        "A desktop application that allows you to add credit and debit cards to a digital wallet, perform secure transactions, and view card details. ",
      link: "https://github.com/sashankshukla/WalletApp",
    },
    {
      title: "UBC GPA Calculator",
      subtitle: "HTML CSS JS",
      icons: [<FaHtml5 className="html"/> , <FaCss3Alt className="css"/> , <FaJs className="js"/>],
      description:
        "A chrome extension that converts 100 point scale course grades into a weighted UBC 4.0 scale GPA",
      link: "https://github.com/sashankshukla/ubcgpacalc",
    },
    {
      title: "Airline Reservation System",
      subtitle: "Java SQL",
      icons:[<FaJava className="java"/> , <AiOutlineConsoleSql className="sql"/>],
      description:
        "A menu-driven program that mimics a small-scale airline booking software",
      link: "https://github.com/sashankshukla/airlinereservationsystem",
    }
  ];
  return (
    <div className="work" id="work">
      <div className="projects">
       <h1 className="big">Projects</h1>
       {projects.map((project) => (
           <div className="project">
              <h2>{project.title}</h2>
              <h1>{project.icons}</h1>
              <p>{project.description}</p>
              <a target="_blank" rel="noopener noreferrer" className ="icon-link" href={project.link}>
                    <button>View Project</button>
              </a>
           </div>
       ))}
      </div>
    </div>
  )
}
