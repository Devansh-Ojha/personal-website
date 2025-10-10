import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/img/Ojha_Devansh.jpg";

const About = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center px-4 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <img
              src={ProfilePic}
              className="w-80 h-80 object-cover rounded-full shadow-xl border-4 border-white"
              alt="Devansh Ojha"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/50 -z-10 blur-2xl animate-pulse"/>
          </div>
        </motion.div>
        <motion.div 
          className="prose prose-xl prose-slate md:pl-8" 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="!text-4xl !font-black !tracking-tight !text-slate-900">
            ABOUT ME
          </h2>
          <p>
            Hi, I'm <strong>Devansh Ojha</strong>. I am a junior at <strong>UC Berkeley</strong> (go bears!) studying <strong>Electrical Engineering and Computer Science</strong>. I thrive on the challenge of finding innovative solutions that contribute to long-term success and growth.
          </p>
          <p>
            My interests span in Software engineering, AI/ML, Cyber security, Systems and Hardware. Outside of class, I love teaching and exploring how tech can drive meaningful change. In my free time I enjoy going to the gym, running, cooking, and playing soccer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;