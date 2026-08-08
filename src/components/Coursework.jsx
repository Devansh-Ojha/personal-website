import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Calendar, Award } from "lucide-react";

const courseworkData = [
  { 
    semester: "Spring 2026", 
    isCurrent: true,
    courses: [
      { code: "EECS 151", name: "Digital Design & Integrated Circuits (ASIC Lab)" },
      { code: "CS 152", name: "Computer Architecture and Engineering" }
    ]
  },
  { 
    semester: "Fall 2025", 
    courses: [
      { code: "CS 161", name: "Computer Security" },
      { code: "EECS 127", name: "Optimization Models in Engineering" },
      { code: "Data 88E", name: "Economic Models" }
    ] 
  },
  { 
    semester: "Spring 2025", 
    courses: [
      { code: "CS 61C", name: "Great Ideas in Computer Architecture" },
      { code: "CS 365", name: "Instructional Methods in CS" },
      { code: "CS 195", name: "Social Implications of Computer Tech" },
      { code: "PHYS 7B", name: "Physics for Scientists & Engineers II" }
    ] 
  },
  { 
    semester: "Fall 2024", 
    courses: [
      { code: "CS 70", name: "Discrete Math & Probability Theory" },
      { code: "EECS 16B", name: "Designing Information Devices & Systems II" },
      { code: "PHYS 7A", name: "Physics for Scientists & Engineers I" }
    ] 
  },
  { 
    semester: "Spring 2024", 
    courses: [
      { code: "CS 61B", name: "Data Structures" },
      { code: "MATH 53", name: "Multivariable Calculus" },
      { code: "MATH 1A", name: "Calculus I" }
    ] 
  },
  { 
    semester: "Fall 2023", 
    courses: [
      { code: "CS 61A", name: "Structure & Interpretation of Computer Programs" },
      { code: "EECS 16A", name: "Designing Information Devices & Systems I" },
      { code: "MATH 1B", name: "Calculus II" }
    ] 
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const Coursework = () => {
  return (
    <section id="coursework" className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap size={14} />
            Academic Profile
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">
            RELEVANT COURSEWORK
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {courseworkData.map(({ semester, courses, isCurrent }) => (
            <motion.div
              key={semester}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-xl border p-5 transition-all duration-300 ${
                isCurrent 
                  ? "bg-white border-blue-200 shadow-md ring-1 ring-blue-100" 
                  : "bg-white/80 backdrop-blur-sm border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              {isCurrent && (
                <div className="absolute top-0 right-0">
                  <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.75 rounded-bl-lg uppercase tracking-wide">
                    <Award size={10} />
                    Current
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-4">
                <Calendar className={`h-4 w-4 ${isCurrent ? "text-blue-600" : "text-slate-400"}`} />
                <h3 className="font-bold text-base text-slate-800">{semester}</h3>
              </div>

              <ul className="space-y-3">
                {courses.map((course, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <BookOpen className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="inline-block font-mono text-[11px] font-bold text-slate-700 bg-slate-100 rounded px-1.5 py-0.25 mr-1.5">
                        {course.code}
                      </span>
                      <span className="text-[13px] text-slate-600 leading-snug">
                        {course.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Coursework;