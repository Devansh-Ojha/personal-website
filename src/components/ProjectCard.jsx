import "../assets/css/Project.css";

const ProjectCard = ({ image, title, description, github, tech, isNDA = false }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>
      {tech && tech.length > 0 && (
        <div className="tech-chips">
          {tech.map((t, i) => (
            <span key={i} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      )}
      {isNDA ? (
        <div className="nda-button-wrapper">
          <button
            className="project-github-btn cursor-not-allowed opacity-60"
            disabled
          >
            GitHub
          </button>
          <div className="nda-tooltip">
            Can't share due to NDA
          </div>
        </div>
      ) : (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-btn"
        >
          GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
