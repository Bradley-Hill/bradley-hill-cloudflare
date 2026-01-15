"use client"

import { useI18n } from '@/i18n/i18n'
import { projects} from '@/lib/projects'
import { ProjectCard } from '../components/ProjectCard';
import styles from './page.module.css'


export default function ProjectsPage() {
    const {getText} = useI18n();

    const featuredProject = projects.find(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className={styles.projectsContainer}>
      <h1>{getText("projects.title")}</h1>
      {featuredProject && (<section className={styles.featuredSection}>
        <ProjectCard project={featuredProject} />
      </section>)}
      <section className={styles.gridSection}>
        {otherProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  )
}


