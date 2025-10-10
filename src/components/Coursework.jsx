import { motion } from "framer-motion";

const courseworkData = [
  { semester: "Fall 2025", courses: ["CS 161 - Computer Security", "EECS 127 - Optimization Models in Engineering", "EPS 109 - Computer Simulations with Jupyter Notebooks"] },
  { semester: "Spring 2025", courses: ["CS 61C - Great Ideas in Computer Architecture (Machine Structures)", "CS 365 - Introduction to Instructional Methods in CS for Academic Interns", "CS 195 - Social Implications of Computer Technology", "PHYSICS 7B - Physics for Scientists and Engineers II"] },
  { semester: "Fall 2024", courses: ["CS 70 - Discrete Math & Probability Theory", "EECS 16B - Designing Information Devices and Systems II", "PHYSICS 7A - Physics for Scientists and Engineers I"] },
  { semester: "Spring 2024", courses: ["CS 61B - Data Structures", "MATH 53 - Multivariable Calculus", "MATH 1A - Calculus I"] },
  { semester: "Fall 2023", courses: ["CS 61A - Structure & Interpretation of Computer Programs", "EECS 16A - Designing Information Devices and Systems I", "MATH 1B - Calculus II"] },
];


const timelineVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const courseListVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const courseVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

const Coursework = () => {
  return (
    <section id="coursework" className="w-full px-4 py-24 flex flex-col items-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 text-center mb-12">
          RELEVANT COURSEWORK
        </h2>
        <motion.div
          className="relative max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineVariants}
        >
          <div className="absolute left-4 top-2 h-full w-0.5 bg-slate-200" aria-hidden="true" />
          {courseworkData.map(({ semester, courses }) => {
            const isCurrent = semester === "Fall 2025";
            return (
              <motion.div key={semester} className="relative pl-12 pb-8" variants={itemVariants}>
                <div className={`absolute left-4 top-2 -ml-1.5 h-3 w-3 rounded-full ${isCurrent ? "bg-blue-500 ring-8 ring-blue-100" : "bg-slate-300"}`} />
                <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl text-slate-800">{semester}</h3>
                    {isCurrent && <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Current</span>}
                  </div>
        
                  <motion.ul className="space-y-2 text-slate-600 list-inside list-disc" variants={courseListVariants}>
                    {courses.map((course) => (
                      
                      <motion.li key={course} variants={courseVariants}>
                        {course}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Coursework;