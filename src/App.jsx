import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import useStatCounter from './hooks/useStatCounter';

function App() {
  useScrollReveal();
  useStatCounter();

  return (
    <>
      <Nav />
      <Hero />

      <div className="divider"></div>
      <About />

      <div className="divider"></div>
      <Skills />

      <div className="divider"></div>
      <Experience />

      <div className="divider"></div>
      <Projects />

      <div className="divider"></div>
      <Achievements />

      <div className="divider"></div>
      <Education />

      <div className="divider"></div>
      <Contact />

      <Footer />
    </>
  );
}

export default App;
