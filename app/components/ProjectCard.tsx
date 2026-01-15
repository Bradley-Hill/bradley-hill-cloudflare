import {Project} from '@/lib/projects'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
        <h2 className={styles.title}>{project.title}</h2>
        <img className={styles.image} src={project.image || '/images/placeholder.jpg'} alt={project.title} />
        <p className={styles.description}>{project.description}</p>
        <div className={styles.technologies}>{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
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
  )
}


