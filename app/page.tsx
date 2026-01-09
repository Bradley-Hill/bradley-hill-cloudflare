"use client";
import { useI18n } from "@/i18n/i18n";
import styles from "./page.module.css";

export default function Home() {
  const { language, translate } = useI18n();

  const welcomeText = translate("home.welcome", language);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Home</h1>
      </header>
      <main className={styles.content}>
        <p>{welcomeText}</p>
      </main>
    </div>
  );
}
