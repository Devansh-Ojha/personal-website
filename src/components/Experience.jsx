import React from "react";
import ExperienceCard from "./ExperienceCard"; 
import blab from "../assets/img/berkeley-lab.png";
import split from "../assets/img/Split.jpeg";
import berkeley from "../assets/img/berkeley.svg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-transparent px-4 py-20"
    >
    <h2 className="experience-title">EXPERIENCE</h2>
      <div className="flex flex-wrap justify-center gap-8">

      <ExperienceCard
          logo={split}
          role="Software Engineering Intern"
          company="SplitSecure"
          duration="June 2025 – August 2025"
          description="• Implemented fine-grained access control by mapping resource ownership and permissions across services.
          • Enabled efficient cross-service communication through global-to-local resource mapping.
          • Built a stack-based system for secure, reliable service-to-service calls."
        />
        <ExperienceCard
          logo={berkeley}
          role="Course Staff (Academic Intern)"
          company="UC Berkeley"
          duration="Jan 2025 – May 2025"
          description="• Assisted students in CS61B (Data Structures & Algorithms), a course with 1,000+ students, by answering
          questions during office hours and providing guidance on homework and projects."
        />
        <ExperienceCard
          logo={blab}
          role="Research Assistant"
          company="Berkeley Lab"
          duration="November 2024 – May 2025"
          description="• Worked in Laser Technology Group under Professor Vassilia Zorba."
        />
        
      </div>
    </section>
  );
};

export default Experience;
