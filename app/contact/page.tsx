"use client"

import { useI18n } from '@/i18n/i18n'
import styles from './page.module.css'


export default function ContactPage() {
    const {getText} = useI18n();
  return (
    <div>
      <h1>{getText("contact.title")}</h1>
      <p>{getText("contact.email")}</p>
    </div>
  )
}


