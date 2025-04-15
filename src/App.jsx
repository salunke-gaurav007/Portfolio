import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from './components/Skill';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';

const App = () => {
  return (
    <div className="bg-slate-900  text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
