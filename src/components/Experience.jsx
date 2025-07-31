import React from "react";
import ExperienceCard from "./ExperienceCard"; 
import blab from "../assets/img/berkeley-lab.png";
import split from "../assets/img/Split.jpeg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-transparent px-4 py-20"
    >
    <h2 className="experience-title">Experience</h2>
      <div className="flex flex-wrap justify-center gap-8">

      <ExperienceCard
          logo={split}
          role="Software Engineering Intern"
          company="SplitSecure"
          duration="June 2025 – August 2025"
          description="software."
        />
        <ExperienceCard
          logo={split}
          role="Course Staff (Academic Intern)"
          company="UC Berkeley"
          duration="Jan 2025 – May 2025"
          description="software."
        />
        <ExperienceCard
          logo={blab}
          role="Research Assistant"
          company="Berkeley Lab"
          duration="November 2024 – May 2025"
          description="Working on laser technology and automation tools to assist scientific experiments."
        />
        
      </div>
    </section>
  );
};

export default Experience;
