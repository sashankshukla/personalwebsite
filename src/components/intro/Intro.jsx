import "./Intro.css"
import my_picture from "assets/personalphoto.png";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={my_picture} alt="my photo"></img>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}
