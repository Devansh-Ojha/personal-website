import ProjectCard from "./ProjectCard";
import { FolderGit } from "lucide-react";

const Project = () => {
  const projects = [
    {
      title: "LLM-Based Movie Recommendation System",
      description: "Built a semantic movie recommendation platform that converts natural-language queries into vector embeddings for accurate, context-aware suggestions. Used HugChat, FlagEmbedding, and pgvector with a FastAPI backend to support fast, scalable recommendations over large movie datasets.",
      github: "https://github.com/Devansh-Ojha/FlixGPT",
      tech: ["FastAPI", "SQLAlchemy", "PyTorch", "HugChat", "Python"]
    },
    {
      title: "Chronos: Real-time Video Analytics Pipeline",
      description: "Built an event-driven system for real-time video analytics that slices live streams, performs YOLO-based object detection, and enables natural-language search over video clips. Designed a scalable pipeline using Kafka-style streaming, distributed ML workers, and vector search for semantic retrieval.",
      github: "https://github.com/Devansh-Ojha/chronos",
      tech: ["Go", "Python", "Kafka", "Computer Vision", "Vector DB", "Docker", "YOLOv8"]
    },
    {
      title: "Secure File Sharing System",
      description: "Built an end-to-end encrypted file storage system with secure sharing and revocation using append-only file blocks. Designed a cryptographic key hierarchy with per-user and per-file isolation, signed invitations, and efficient key rotation. Achieved constant-size bandwidth for file appends and metadata updates.",
      github: "https://github.com/your-username/mt-low-resource",
      tech: ["Go", "Symmetric Encryption", "Digital Signatures", "MACs", "Computer Security"],
      isNDA: true,
      ndaReason: "Can't share due to school's honesty policy"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit size={13} />
            Engineering & Design
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">
            PROJECTS
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
