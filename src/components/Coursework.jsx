import { useEffect, useState } from "react";
import "../assets/css/Coursework.css";

const courseworkData = [
  {
    semester: "Fall 2025",
    courses: ["CS 161 - Computer Security" ,
              "EECS 127 - Optimization Models in Engineering",
              "EPS 109 - Computer Simulations with Jupyter Notebooks"],
  },
  {
    semester: "Spring 2025",
    courses: [
      "CS 61C - Great Ideas in Computer Architecture (Machine Structures)",
      "CS 365 - Introduction to Instructional Methods in Computer Science for Academic Interns",
      "CS 195 - Social Implications of Computer Technology",
      "PHYSICS 7B - Physics for Scientists and Engineers II",
    ],
  },
  {
    semester: "Fall 2024",
    courses: [
      "CS 70 - Discrete Math & Probability Theory",
      "EECS16B - Designing Information Devices and Systems II",
      "PHYSICS 7A - Physics for Scientists and Engineers I",
    ],
  },
  {
    semester: "Spring 2024",
    courses: [
      "CS 61B - Data Structures & Algorithms",
      "MATH 53 - Multivariable Calculus",
      "MATH 1A - Calculus I",
    ],
  },
  {
    semester: "Fall 2023",
    courses: [
      "CS 61A - Structure & Interpretation of Computer Programs",
      "EECS16A - Designing Information Devices and Systems I",
      "MATH 1B - Calculus II",
    ],
  },
];

const Coursework = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleIndex(i);
      i++;
      if (i >= courseworkData.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="coursework" className="coursework-section">
      <h2 className="coursework-title">RELEVANT COURSEWORK</h2>

      <div className="coursework-container">
        {courseworkData.map(({ semester, courses }, idx) => (
          <div
            key={semester}
            className={`semester-block ${idx <= visibleIndex ? "visible" : ""}`}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <h3 className="semester-title">{semester}</h3>
            {courses.length > 0 ? (
              <ul className="course-list">
                {courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul> ) : (
              <p className="italic">No courses listed</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coursework;
