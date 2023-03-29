import { projectData } from "../../components/Data/Data.js";

export default function Projects() {
  return (
    <div aria-label="projects" className="projects-container">
      <h2>Projects</h2>

      <div className="projects-flex">
        {projectData &&
          projectData.map((project) => (
            <div
              className="project-card"
              style={{
                backgroundImage: `url(${project.backgroundImage.src})`,
                backgroundRepeat: "no-repeat",
              }}
              key={project.id}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <h4 className="project-time">{project.time}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
