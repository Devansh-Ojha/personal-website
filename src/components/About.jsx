import React from "react";
import ProfilePic from "../assets/img/devanshojha0505@berkeley.edu.png";

const About = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={ProfilePic}
            className="w-80 h-50 object-contain rounded-xl shadow-md border-2 border-gray-300"

          />
        </div>

        {/* Right: Text */}
        <div className="text-left md:text-left space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Hi, I'm <strong>Devansh Ojha</strong> — a junior at UC Berkeley studying Electrical Engineering and Computer Science. 
            I'm passionate about building accessible and inclusive technologies that create real impact.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            I've worked on AI-driven movie recommenders, interned at a cybersecurity startup, and currently conduct research at Berkeley Lab.
            Outside of academics, I enjoy teaching, working on open-source projects, and exploring how tech can reshape education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
