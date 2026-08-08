import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";
import blab from "../assets/img/berkeley-lab.png";
import split from "../assets/img/splitsecure_logo.jpeg";
import berkeley from "../assets/img/berkeley.svg";
import cfg from "../assets/img/images.png";
import bair from "../assets/img/BAIR.png";
import bmob from "../assets/img/b-mobile.jpeg";

const experiences = [
  {
    logo: bmob,
    role: "iOS Developer",
    company: "Berkeley Mobile",
    duration: "Sep 2025 - Present",
    type: "work",
    description: [
      "Helping build Berkeley Mobile, an iOS app developed by student government to provide transit routes, library & gym info, and campus resources.",
      "Serving 30K+ students with over 3K+ monthly active users to navigate campus efficiently."
    ],
    skills: ["iOS Development", "Swift", "SwiftUI", "Git", "API Integration"]
  },
  {
    logo: bair,
    role: "Undergraduate Researcher",
    company: "Berkeley Artificial Intelligence Research (BAIR)",
    duration: "Aug 2025 - Present",
    type: "research",
    description: [
      "Conducting machine translation research for Asian low-resource languages under Prof. Kurt Keutzer.",
      "Working on optimization and model tuning to improve translation quality and accuracy."
    ],
    skills: ["Machine Learning", "NLP", "PyTorch", "Model Evaluation"]
  },
  {
    logo: split,
    role: "Software Engineering Intern",
    company: "SplitSecure",
    duration: "June 2025 – Aug 2025",
    type: "work",
    description: [
      "Implemented fine-grained access control by mapping resource ownership and permissions across services.",
      "Enabled efficient cross-service communication through global-to-local resource mapping.",
      "Built a secure stack-based system for reliable service-to-service calls."
    ],
    skills: ["Backend Engineering", "Access Control", "Security", "Distributed Systems"]
  },
  {
    logo: berkeley,
    role: "Course Staff (Academic Intern)",
    company: "UC Berkeley",
    duration: "Jan 2025 – May 2025",
    type: "teaching",
    description: [
      "Assisted student learning in CS61B (Data Structures & Algorithms), a core course with 1,000+ students.",
      "Held office hours to explain complex algorithms, and guided students on large programming projects."
    ],
    skills: ["Data Structures", "Algorithms", "Java", "Teaching & Mentoring"]
  },
  {
    logo: blab,
    role: "Undergraduate Researcher",
    company: "Berkeley Lab (LBNL)",
    duration: "Nov 2024 – May 2025",
    type: "research",
    description: [
      "Collaborated in the Laser Technology Group under Professor Vassilia Zorba on experimental research systems."
    ],
    skills: ["Research", "Laser Systems", "Data Analysis"]
  },
  {
    logo: cfg,
    role: "Software & Data Engineering Intern",
    company: "Coforge",
    duration: "May 2024 – July 2024",
    type: "work",
    description: [
      "Utilized Pandas for data manipulation and analysis, deriving insights to guide business decisions.",
      "Collaborated with the IT team to design and deploy software solutions, increasing system reliability."
    ],
    skills: ["Python", "Pandas", "Data Engineering", "Software Development"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={13} />
            Professional Journey
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">
            EXPERIENCE
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200/80 ml-4 md:ml-32 pl-6 md:pl-8 space-y-12">
          {experiences.map((exp, index) => {
            const isResearchOrTeaching = exp.type === "research" || exp.type === "teaching";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-50/50 transition-all duration-300 shadow-sm">
                  {isResearchOrTeaching ? (
                    <GraduationCap className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>

                {/* Left Side: Date (Desktop Only) */}
                <div className="hidden md:block absolute -left-[160px] top-2 w-[120px] text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-600/80 transition-colors font-mono">
                    {exp.duration.split(" - ")[0]}
                  </span>
                  <span className="block text-[11px] text-slate-400 font-mono">
                    to {exp.duration.split(" - ")[1] || "Present"}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-5 hover:shadow-md hover:border-slate-300 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      {exp.logo && (
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-100 flex-shrink-0 bg-white flex items-center justify-center p-1 shadow-sm">
                          <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    {/* Date (Mobile Only) */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full w-max">
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Bullet Descriptions */}
                  <ul className="space-y-1.5 text-[13.5px] text-slate-600 list-disc pl-4 mb-4">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skills/Tags */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 border border-slate-200/50 text-slate-600 hover:border-slate-300 hover:bg-slate-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
