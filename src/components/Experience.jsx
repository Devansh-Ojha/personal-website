import { useState } from "react";
import ExperienceCard from "./ExperienceCard"; 
import blab from "../assets/img/berkeley-lab.png";
import split from "../assets/img/splitsecure_logo.jpeg";
import berkeley from "../assets/img/berkeley.svg";
import cfg from "../assets/img/images.png";
import bair from "../assets/img/BAIR.png";
import bmob from "../assets/img/b-mobile.jpeg";

const Experience = () => {
  const [showMore, setShowMore] = useState(false);

  const experiences = [
    {
      logo: bmob,
      role: "iOS Developer",
      company: "Berkeley Mobile",
      duration: "Sep 2025 - Present",
      description: "• Helping build Berkeley Mobile, an iOS app by student government that provides Transit routes, library and gym information, and other campus resources to help 30K+ students navigate campus efficiently. Over 3K+ monthly active users"
    },
    {
      logo: bair,
      role: "Undergraduate Researcher",
      company: "Berkeley Artificial Intelligence Research",
      duration: "August 2025 - Present",
      description: "• Research on machine translation for Asian low resource languages conducted under Prof. Kurt Keutzer at Berkeley Artificial Intelligence Research (BAIR)."
    },
    {
      logo: split,
      role: "Software Engineering Intern",
      company: "SplitSecure",
      duration: "June 2025 – August 2025",
      description: "• Implemented fine-grained access control by mapping resource ownership and permissions across services • Enabled efficient cross-service communication through global-to-local resource mapping • Built a stack-based system for secure, reliable service-to-service calls"
    },
    {
      logo: berkeley,
      role: "Course Staff (Academic Intern)",
      company: "UC Berkeley",
      duration: "Jan 2025 – May 2025",
      description: "• Assisted students in CS61B (Data Structures & Algorithms), a course with 1,000+ students, by answering questions during office hours and providing guidance on homework and projects."
    },
    {
      logo: blab,
      role: "Undergraduate Researcher",
      company: "Berkeley Lab",
      duration: "November 2024 – May 2025",
      description: "• Worked in Laser Technology Group under Professor Vassilia Zorba."
    },
    {
      logo: cfg,
      role: "Software and Data Engineering Intern",
      company: "Coforge",
      duration: "May 2024 – July 2024",
      description: "• Utilized Pandas for data manipulation and analysis, leading to actionable insights and strategic business decisions • Collaborated with IT team to implement software solutions, enhancing system performance and reliability greatly"
    }
  ];

  const displayedExperiences = showMore ? experiences : experiences.slice(0, 6);

  return (
    <section
      id="experience"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-transparent px-4 py-20"
    >
      <h2 className="experience-title">EXPERIENCE</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {displayedExperiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>

      {/* <button
        onClick={() => setShowMore(!showMore)}
        className="mt-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {showMore ? "Show Less" : "Show More"}
      </button> */}
    </section>
  );
};

export default Experience;
