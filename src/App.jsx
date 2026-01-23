import Background from './assets/css/background.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About';
import Courses from "./components/Coursework";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="relative">
        <Background />
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/coursework" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="text-center text-sm text-gray-500 py-8">
          © Devansh Ojha 2025. All rights reserved.
        </footer>
        <Analytics/>
      </div>
    </Router>
  );
}

export default App;
