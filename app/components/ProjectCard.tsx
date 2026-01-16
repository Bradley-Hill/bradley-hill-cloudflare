"use client";

import { Project } from "@/lib/projects";
import { useI18n } from "@/i18n/i18n";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { getText } = useI18n();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{getText(project.titleKey)}</h2>
      <img
        className={styles.image}
        src={project.image || "/placeholder.jpg"}
        alt={getText(project.titleKey)}
      />
      <p className={styles.description}>{getText(project.descriptionKey)}</p>
      <div className={styles.technologies}>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
