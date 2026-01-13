"use client";
import { useI18n } from "@/i18n/i18n";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import styles from "./page.module.css";

export default function Home() {
  const { getText } = useI18n();

  const welcomeText = getText("home.welcome");
  const title = getText("nav.home");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <LanguageSwitcher />
      </header>
      <main className={styles.content}>
        <p>{welcomeText}</p>
      </main>
    </div>
  );
}
