import { Folder, Github, Lock, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, github, tech, isNDA = false, ndaReason = "Can't share due to academic policy" }) => {
  return (
    <div className="relative flex flex-col justify-between h-full bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Card Header Icon & Link */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
            <Folder size={18} />
          </div>
          
          <div className="flex items-center gap-2">
            {isNDA ? (
              <div className="group/nda relative cursor-help">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full">
                  <Lock size={10} />
                  Private
                </span>
                <div className="absolute right-0 bottom-full mb-2 hidden group-hover/nda:block bg-slate-900 text-white text-[11px] px-2.5 py-1 rounded shadow-lg whitespace-nowrap z-20">
                  {ndaReason}
                </div>
              </div>
            ) : (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-base font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-[13px] text-slate-600 leading-relaxed mb-5">
          {description}
        </p>
      </div>

      {/* Footer (Tech Stack) */}
      <div>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
            {tech.map((t, i) => (
              <span key={i} className="font-mono text-[10.5px] font-semibold px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-slate-500">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
