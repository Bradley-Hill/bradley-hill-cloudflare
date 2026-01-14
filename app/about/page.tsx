"use client"

import { useI18n } from '@/i18n/i18n'
import styles from './page.module.css'


export default function AboutPage() {
    const {getText} = useI18n();
  return (
    <div>
      <h1>{getText("about.title")}</h1>
      <p>{getText("about.bio")}</p>
    </div>
  )
}


