import "./Work.css"
import { FaJava, FaPython, Fa, FaHtml5, FaJs, FaPhp, FaCss3Alt} from 'react-icons/fa';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {SiRacket, SiReact} from 'react-icons/si';
import {CgCPlusPlus} from 'react-icons/cg';

export default function Work() {
  const projects = [
    {
      title: "Personal Portfolio",
      subtitle: "React",
      description:
        "My personal website highlights my skills, projects and experience in programming and development",
      link: "https://github.com/sashankshukla/personalwebsite",
    },
    {
      title: "Sign Language Translator",
      subtitle: "HTML CSS JS and Google Teachable Machine",
      description:
        "A sign language translator that recongizes common signs of the ASL and translates it to English",
      link: "https://github.com/sashankshukla/NWHacks",
    },
    {
      title: "Wallet App",
      subtitle: "Java JUnit",
      description:
        "A desktop application that allows you to add credit and debit cards to a digital wallet, perform secure transactions, and view card details. ",
      link: "https://github.com/sashankshukla/WalletApp",
    },
    {
      title: "UBC GPA Calculator",
      subtitle: "HTML CSS JS",
      description:
        "A chrome extension that converts 100 point scale course grades into a weighted UBC 4.0 scale GPA",
      link: "https://github.com/sashankshukla/ubcgpacalc",
    },
    {
      title: "Airline Reservation System",
      subtitle: "Java SQL",
      description:
        "A menu-driven program that mimics a small-scale airline booking software",
      link: "https://github.com/sashankshukla/airlinereservationsystem",
    },
  ];
  return (
    <div className="work" id="work">
       <h1>Projects </h1>
       <div className = "container">
           <img src=" " alt=" "></img>
           <h3>Project </h3>
       </div>
    </div>
  )
}
