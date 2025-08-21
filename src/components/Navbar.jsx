import React from "react";
import { Link } from "react-scroll";
import "../assets/css/Navbar.css"; 

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-name">Devansh Ojha</div>
    <div className="navbar-links">
      <Link to="home" smooth duration={500} className="navbar-link">About</Link>
      <Link to="experience" smooth duration={500} className="navbar-link">Experience</Link>
      <Link to="coursework" smooth duration={500} className="navbar-link">Coursework</Link>
      <a href="https://drive.google.com/file/d/1NwefwwLXMeGObB1Qk61EdjJUJch5hEw_/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="navbar-link"> Resume</a>
     {/* <Link to="projects" smooth duration={500} className="navbar-link">Projects</Link> */}
      <Link to="contact" smooth duration={500} className="navbar-link">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
