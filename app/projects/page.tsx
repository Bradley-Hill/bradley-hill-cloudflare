"use client"

import { useI18n } from '@/i18n/i18n'
import styles from './page.module.css'


export default function ProjectsPage() {
    const {getText} = useI18n();
  return (
    <div>
      <h1>{getText("projects.title")}</h1>
      <p>{getText("projects.viewOnGithub")}</p>
    </div>
  )
}


