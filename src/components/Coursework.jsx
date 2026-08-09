import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const courseworkData = [
  { 
    semester: "Spring 2026", 
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

const Coursework = () => {
  return (
    <section id="coursework" className="py-12 bg-transparent">
      <div className="max-w-2xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">
            RELEVANT COURSEWORK
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Unified Card Card Box - Matching About Me style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white/95 border border-slate-200/70 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300"
        >
          {/* Header Inside Card */}
          <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-5 flex items-center gap-1.5 justify-center sm:justify-start">
            <GraduationCap size={15} />
            Academic Courses
          </div>

          {/* Grouped Courses List */}
          <div className="space-y-4 text-left">
            {courseworkData.map(({ semester, courses }) => (
              <div 
                key={semester} 
                className="border-b border-slate-150/40 last:border-b-0 pb-3.5 last:pb-0"
              >
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">
                  {semester}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start rounded-2xl border border-slate-200/60 bg-slate-50/90 p-3"
                    >
                      <span className="mt-1 text-blue-500">
                        <GraduationCap size={18} />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {course.code}
                        </div>
                        <div className="text-sm text-slate-700 leading-relaxed">
                          {course.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coursework;