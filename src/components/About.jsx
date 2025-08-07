import React from "react";
import ProfilePic from "../assets/img/Ojha_Devansh.jpg";

const About = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div className="flex justify-center md:justify-start">
          <img
            src={ProfilePic}
            className="w-80 h-80 object-cover rounded-full shadow-md border-2 border-gray-300"
            alt="Devansh Ojha"
          />
        </div>

        <div className="text-left md:text-left space-y-6">
          <h2 className="text-4xl font-bold">ABOUT ME!</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Hi , I'm <strong>Devansh Ojha</strong>. I am a junior at <strong>UC Berkeley</strong> (go bears!) studying <strong>Electrical Engineering and Computer Science</strong>. 
            I thrive on the challenge of finding innovative solutions that contribute to long-term success and growth.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
          I’m currently interning at the cybersecurity startup <strong>SplitSecure</strong> a platform protecting enterprises from advanced attacks using quantum-resistant encryption.
  
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
          My interests span in AI/ML, Cyber security, Systems and hardware. Outside of class, I love teaching and exploring how tech can drive meaningful change.
          In my free time, I enjoy going to the gym, running, cooking, and playing soccer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
