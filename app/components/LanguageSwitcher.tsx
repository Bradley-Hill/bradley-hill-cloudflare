"use client";
import { useI18n } from "@/i18n/i18n";
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <div className={styles.toggleContainer}>
      <span
        onClick={() => setLanguage("en")}
        className={`${styles.toggleOption} ${
          language === "en" ? styles.active : styles.inactive
        }`}
      >
        EN
      </span>
      <span
        onClick={() => setLanguage("fr")}
        className={`${styles.toggleOption} ${
          language === "fr" ? styles.active : styles.inactive
        }`}
      >
        FR
      </span>
    </div>
  );
}
