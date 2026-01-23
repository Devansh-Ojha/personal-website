import { useState } from "react";
import ProjectCard from "./ProjectCard";
import split from "../assets/img/splitsecure_logo.jpeg";
import LLM from "../assets/img/LLM.png";
import Proj2 from "../assets/img/161.png";
import bmob from "../assets/img/c.png";

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      image: LLM,
      title: "LLM-Based Movie Recommendation System",
      description: "Built a semantic movie recommendation platform that converts natural-language queries into vector embeddings for accurate, context-aware suggestions. Used HugChat, FlagEmbedding, and pgvector with a FastAPI backend to support fast, scalable recommendations over large movie datasets.",
      github: "https://github.com/Devansh-Ojha/FlixGPT",
      tech: ["FastAPI", "SQLAlchemy", "PyTorch", "HugChat", "Python"]
    },
    {
      image: bmob,
      title: "Chronos: Real-time Video Analytics Pipeline",
      description: "Built an event-driven system for real-time video analytics that slices live streams, performs YOLO-based object detection, and enables natural-language search over video clips. Designed a scalable pipeline using Kafka-style streaming, distributed ML workers, and vector search for semantic retrieval.",
      github: "https://github.com/Devansh-Ojha/chronos",
      tech: ["Go", "Python", "Kafka", "Computer Vision", "Vector DB", "Docker", "YOLOv8"]
    },
    {
      image: Proj2,
      title: "Secure File Sharing System",
      description: "Built an end-to-end encrypted file storage system with secure sharing and revocation using append-only file blocks. Designed a cryptographic key hierarchy with per-user and per-file isolation, signed invitations, and efficient key rotation. Achieved constant-size bandwidth for file appends and metadata updates.",
      github: "https://github.com/your-username/mt-low-resource",
      tech: ["Go", "Symmetric Encryption", "Digital Signatures", "MACs", "Computer Security"],
      isNDA: true,
      ndaReason: "Can't share due to school's honesty policy"
    }
  ];

  const displayedProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen flex flex-col items-center bg-transparent px-4 py-20"
    >
      <h2 className="experience-title">PROJECTS</h2>

      <div className="experience-section">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
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

export default Project;
