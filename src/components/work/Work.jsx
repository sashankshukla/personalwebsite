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
        "My personal website built using react, highlighting my current skills, personal projects and my portfolio.",
      link: "https://github.com/sashankshukla/personalwebsite",
    },
    {
      title: "Sign Language Translator",
      subtitle: "HTML CSS JS and Google Teachable Machine",
      icons:[<FaHtml5 className="html"/> , <FaCss3Alt className="css"/> , <FaJs className="js"/> , <SiTensorflow className="tf"/>],
      description:
        "NWHacks submission. A tool that detects common signs of the American Sign Language and translates them the corresponding English meaning. It was built using Google Teachable Machine, which makes use of Tensorflow.js to develop and train the Machine Learning model.",
      link: "https://github.com/sashankshukla/NWHacks",
    },
    {
      title: "Wallet App",
      subtitle: "Java JUnit",
      icons:[<FaJava className="java"/>],
      description:
        "A Java desktop application for my CPSC 210(Software Construction) final project, made using Java's Swing library. This app allows you to add credit and debit cards to a digital wallet, perform secure transactions, and view card details.",
      link: "https://github.com/sashankshukla/WalletApp",
    },
    {
      title: "UBC GPA Calculator",
      subtitle: "HTML CSS JS",
      icons: [<FaHtml5 className="html"/> , <FaCss3Alt className="css"/> , <FaJs className="js"/>],
      description:
        "A chrome extension that converts 100 point scale course grades into a weighted UBC 4.0 scale GPA, This extension has been published to the chrome web store and can be found here.",
      link: "https://github.com/sashankshukla/ubcgpacalc",
      extralink : " ",
    },
    {
      title: "Airline Reservation System",
      subtitle: "Java SQL",
      icons:[<FaJava className="java"/> , <AiOutlineConsoleSql className="sql"/>],
      description:
        "A menu-driven program that mimics a small-scale airline booking software. The program makes use of an SQL database to store and retrieve flight and passenger information.",
      link: "https://github.com/sashankshukla/airlinereservationsystem",
    }
  ];
  return (
    <div className="work" id="work">
      <div className="projects">
      <div className="top"><h1 className="big">Projects</h1></div>
       {projects.map((project) => (
           <div className="project">
              <h2>{project.title}</h2>
              <h1>{project.icons}</h1>
              <p>{project.description}</p>
              <a target="_blank" rel="noopener noreferrer" className ="icon-link" href={project.link}>
                    <button>Source Code</button>
              </a>
           </div>
       ))}
      </div>
    </div>
  )
}
