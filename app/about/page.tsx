"use client";

import { useI18n } from "@/i18n/i18n";
import styles from "./page.module.css";

export default function AboutPage() {
  const { getText } = useI18n();
  return (
    <div className={styles.container}>
      <h1>{getText("about.title")}</h1>
      <p>{getText("about.bio1")}</p>
      <p>{getText("about.bio2")}</p>
    </div>
  );
}
