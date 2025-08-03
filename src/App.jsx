import Navbar from './components/navbar.jsx';
import About from './components/About.jsx';
import Courses from "./components/coursework";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Background from './assets/css/background.jsx';


function App() {
  return (
    
    <div className="relative">
      <Background />
      <Navbar />
      <main className="pt-20">
        <About />
        <Courses />
        <Experience />
        {/*<Projects /> */}
        <Contact />
      </main>
      <footer className="text-center text-sm text-gray-500 py-8">
      © Devansh Ojha 2025. All rights reserved.
    </footer>
    </div>
  );
}

export default App;
