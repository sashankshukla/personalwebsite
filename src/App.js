import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import "./App.css"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Skills/>
          <Work/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
