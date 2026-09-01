import Background from './assets/css/background.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About';
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main className="pt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="text-center text-sm text-slate-500 py-12 mt-16 border-t border-slate-200/40 bg-white/20 backdrop-blur-md">
        © Devansh Ojha 2026. All rights reserved.
      </footer>
      <Analytics/>
    </div>
  );
}

export default App;
