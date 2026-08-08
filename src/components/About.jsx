import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import ProfilePic from "../assets/img/pic.png";

const About = () => {
  return (
    <motion.section
      id="home"
      className="min-h-[85vh] flex items-center px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Soft decorative glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 -z-10 blur-xl group-hover:scale-105 transition-transform duration-500" />
            <img
              src={ProfilePic}
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-md border-4 border-white bg-slate-50 transition-all duration-300 group-hover:shadow-lg"
              alt="Devansh Ojha"
            />
          </div>

          <div className="mt-8 flex justify-center w-full">
            <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300">
              <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3 flex items-center gap-1.5 justify-center sm:justify-start">
                <GraduationCap size={15} />
                Education
              </div>
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                  B.S. in Electrical Engineering &amp; Computer Science (EECS)
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-1">
                  University of California, Berkeley
                </p>
                <p className="text-xs text-slate-400 mt-3 font-mono">
                  Expected graduation: May 2027
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="prose prose-slate md:pl-8 text-left" 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 uppercase">
            ABOUT ME
          </h2>
          <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
            <p>
              Hi, I'm <strong className="text-slate-900">Devansh Ojha</strong>. I am a junior at <strong className="text-slate-900 font-semibold">UC Berkeley</strong> studying <strong className="text-slate-900 font-semibold">Electrical Engineering and Computer Science</strong>. I thrive on the challenge of finding innovative solutions that contribute to long-term success and growth.
            </p>
            <p>
              My interests span Software Engineering, Hardware/Systems, AI/ML, and Cybersecurity. Outside of class, I love teaching and exploring how technology can drive meaningful change.
            </p>
            <p>
              In my free time, I enjoy going to the gym, running, cooking, and playing soccer.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;