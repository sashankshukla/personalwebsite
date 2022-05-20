import "./Topbar.css"
import {GitHub, LinkedIn , Mail , LocationOn} from "@material-ui/icons"

export default function Topbar(props) {
  return (
    <div className={"topbar " + (props.menuOpen && "active")}  id="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
             <a target="_blank" rel="noopener noreferrer" className ="icon-link" href="https://github.com/sashankshukla">
              <GitHub className="icon"/>
              </a>
          </div>
          <div className="itemContainer">
             <a target="_blank" rel="noopener noreferrer" className = "icon-link" href="https://www.linkedin.com/in/sashank-shukla/">
              <LinkedIn className="icon"/>
             </a>
          </div>
          <div className="itemContainer">
             <a target="_blank" rel="noopener noreferrer" className = "icon-link" href="mailto:ayaz.shukla@gmail.com">
              <Mail className="icon"/>
              </a>
          </div>
          <div className="itemContainer location">
               <LocationOn className="icon"/>
               <span>Vancouver, BC</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
