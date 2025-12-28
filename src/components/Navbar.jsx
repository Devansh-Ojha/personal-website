import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth
    duration={500}
    spy={true}
    activeClass="active"
    className="cursor-pointer text-lg transition-colors hover:text-blue-500"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrolled
    ? 'py-3 bg-white shadow-lg'
    : 'py-4 bg-white shadow-md';

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-8 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-gray-800">Devansh Ojha</div>
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="home">About</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="coursework">Coursework</NavLink>
          <NavLink to="contact">Contact</NavLink> 
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-lg transition-colors hover:text-blue-500"
          >
            Resume
          </a> */}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white rounded-lg p-4 shadow-lg">
          <NavLink to="home">About</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="coursework">Coursework</NavLink>
          <NavLink to="contact">Contact</NavLink> 
          {/* <a 
            href="""
            className="cursor-pointer text-lg"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;