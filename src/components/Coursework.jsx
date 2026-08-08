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

const Coursework = () => {
  return (
    <section id="coursework" className="py-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
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

        {/* Single Transcript Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/85 backdrop-blur-md border border-slate-200/70 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseworkData.map(({ semester, courses, isCurrent }) => (
              <div 
                key={semester} 
                className={`flex flex-col p-4 rounded-xl transition-colors duration-200 ${
                  isCurrent ? 'bg-blue-50/40 border border-blue-100/50' : 'bg-transparent'
                }`}
              >
                {/* Semester Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100/80">
                  <div className="flex items-center gap-2">
                    <Calendar className={`h-3.5 w-3.5 ${isCurrent ? 'text-blue-600' : 'text-slate-400'}`} />
                    <h3 className="font-bold text-[13px] text-slate-800 tracking-wide uppercase">
                      {semester}
                    </h3>
                  </div>
                  {isCurrent && (
                    <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider scale-90">
                      Active
                    </span>
                  )}
                </div>

                {/* Course List */}
                <ul className="space-y-2.5">
                  {courses.map((course, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <BookOpen className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="inline-block font-mono text-[10px] font-bold text-slate-700 bg-slate-100 rounded px-1.5 py-0.25 mr-1.5">
                          {course.code}
                        </span>
                        <span className="text-xs text-slate-600 leading-snug">
                          {course.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coursework;