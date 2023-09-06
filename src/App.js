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


function App() {
  return (
    <div className="App">
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
