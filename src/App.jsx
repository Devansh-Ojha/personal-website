import Navbar from './components/navbar.jsx';
import About from './components/About.jsx';
import Courses from "./components/coursework";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Background from './assets/css/Background.jsx';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <main className="pt-20">
        <About />
        <Courses />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
