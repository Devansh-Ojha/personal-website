import Navbar from './components/Navbar.jsx';
import About from './components/About';
import Courses from "./components/Coursework";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Background from './assets/css/background.jsx';
import { Analytics } from "@vercel/analytics/react";



function App() {
  return (
    
    <div className="relative">
      <Background />
      <Navbar />
      <main className="pt-20">
        <About />
        <Experience />
        <Courses />
        {/*<Projects /> */}
        <Contact />
        
      </main>
      
      <footer className="text-center text-sm text-gray-500 py-8">
      © Devansh Ojha 2025. All rights reserved.
    </footer>
    <Analytics/>
    </div>
  );
}

export default App;
