import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
