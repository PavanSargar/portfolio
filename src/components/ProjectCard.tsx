import Link from "next/link";
import { cassandra, type SelectedProject } from "@/content/portfolio";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project }: { project: SelectedProject }) {
  return (
    <article className={`project-card project-${project.id}`} aria-labelledby={`project-title-${project.id}`}>
      <p className="project-context">{project.context}</p>
      <h3 id={`project-title-${project.id}`}>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <details className="project-details" name="selected-projects">
        <summary>
          <span className="when-closed">View more</span>
          <span className="when-open">View less</span>
          <span className="sr-only"> about {project.name}</span>
          <span className="disclosure-symbol" aria-hidden="true">+</span>
        </summary>
        <div className="project-expanded">
          <ProjectPreview project={project.id} />
          <div className="project-story">
            <div>
              <h4>My part in it</h4>
              <p>{project.contribution}</p>
            </div>
            <div>
              <ul className="tag-list" aria-label={`${project.name} areas of work`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {project.id === "cassandra" && (
                <p className="milestone-note">{cassandra.milestone.value} {cassandra.milestone.label}, as of {cassandra.milestone.date}.</p>
              )}
            </div>
          </div>
          <div className="project-links">
            <a className="text-link" href={project.url}>Visit {project.name} <span aria-hidden="true">↗</span></a>
            {project.caseStudy && <Link className="text-link" href={project.caseStudy}>Inside the project</Link>}
          </div>
        </div>
      </details>
    </article>
  );
}
