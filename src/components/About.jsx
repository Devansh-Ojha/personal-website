import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import ProfilePic from "../assets/img/pic.png";

const courses = [
  { code: "CS 61A", name: "Structure & Interpretation of Computer Programs" },
  { code: "CS 61B", name: "Data Structures" },
  { code: "CS 61C", name: "Great Ideas in Computer Architecture" },
  { code: "CS 70", name: "Discrete Math & Probability Theory" },
  { code: "CS 152", name: "Computer Architecture and Engineering" },
  { code: "CS 161", name: "Computer Security" },
  { code: "CS 195", name: "Social Implications of Computer Tech" },
  { code: "CS 365", name: "Instructional Methods in CS" },
  { code: "EECS 16A", name: "Designing Information Devices & Systems I" },
  { code: "EECS 16B", name: "Designing Information Devices & Systems II" },
  { code: "EECS 127", name: "Optimization Models in Engineering" },
  { code: "EECS 151", name: "Digital Design & Integrated Circuits (ASIC Lab)" },
  { code: "Data 88E", name: "Economic Models" },
  { code: "MATH 1A", name: "Calculus I" },
  { code: "MATH 1B", name: "Calculus II" },
  { code: "MATH 53", name: "Multivariable Calculus" },
  { code: "PHYS 7A", name: "Physics for Scientists & Engineers I" },
  { code: "PHYS 7B", name: "Physics for Scientists & Engineers II" }
];

const getCourseBadgeStyles = (code) => {
  const cleanCode = code.toUpperCase();
  if (cleanCode.startsWith("CS") || cleanCode.startsWith("EECS")) {
    return "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100/50";
  }
  if (cleanCode.startsWith("MATH")) {
    return "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100/50";
  }
  if (cleanCode.startsWith("DATA")) {
    return "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100/50";
  }
  if (cleanCode.startsWith("PHYS")) {
    return "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100/50";
  }
  return "bg-slate-50 text-slate-700 border-slate-150 hover:bg-slate-100/50";
};

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
          className="flex flex-col items-center gap-4"
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
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-md border-4 border-white bg-slate-50 transition-all duration-300 group-hover:shadow-lg"
              alt="Devansh Ojha"
            />
          </div>

          {/* Education Box */}
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

          {/* Coursework Box */}
          <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300">
            <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3 flex items-center gap-1.5 justify-center sm:justify-start">
              <BookOpen size={14} />
              Relevant Coursework
            </div>
            <div className="flex flex-wrap gap-1.5 justify-start">
              {courses.map((course, idx) => {
                const badgeColor = getCourseBadgeStyles(course.code);
                return (
                  <span
                    key={idx}
                    title={`${course.code}: ${course.name}`}
                    className={`inline-flex items-center text-[10.5px] font-semibold px-2 py-0.5 rounded border transition-all duration-150 cursor-help ${badgeColor}`}
                  >
                    {course.code}
                  </span>
                );
              })}
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