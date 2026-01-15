import "../assets/css/Experience.css";

const ExperienceCard = ({ logo, role, company, duration, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="experience-content">
      <h3 className="experience-company">{company}</h3>
        <p className="experience-role">{role}</p>
        <p className="experience-duration">{duration}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
