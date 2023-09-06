import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode ? "black" : "", color: darkMode ? "white" : ""}}>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
