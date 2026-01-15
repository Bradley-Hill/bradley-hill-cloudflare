"use client";
import { useI18n } from "@/i18n/i18n";
import { LanguageSwitcher } from "./components/nav/LanguageSwitcher";
import styles from "./page.module.css";

export default function Home() {
  const { getText } = useI18n();

  const welcomeText = getText("home.welcome");
  const title = getText("nav.home");

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <p>{welcomeText}</p>
      </main>
    </div>
  );
}
