"use client";

import { useI18n } from "@/i18n/i18n";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./page.module.css";

export default function ContactPage() {
  const { getText } = useI18n();
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>{getText("contact.title")}</h1>
      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          <a href="mailto:contact@bradley-hill.com" className={styles.contactLink}>
            <MdEmail /> Email
          </a>
        </li>
        <li className={styles.contactItem}>
          <a
            href="https://github.com/..."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaGithub /> GitHub
          </a>
        </li>
        <li className={styles.contactItem}>
          <a
            href={getText("contact.linkedin")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaLinkedin /> My LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
