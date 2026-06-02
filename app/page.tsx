"use client";
import { useI18n } from "@/i18n/i18n";
import Link from "next/link";
import styles from "./page.module.css";
import { SkillSection } from "./components/SkillSection";

export default function Home() {
  const { getText, language } = useI18n();

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>{getText("home.welcome")}</h1>
          <p className={styles.heroSubtitle}>{getText("home.subtitle")}</p>
          <p className={styles.heroDescription}>
            {getText("home.description")}
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/projects" className={styles.ctaButton}>
              {getText("home.cta")}
            </Link>
            <a
              href={language === "fr" ? "/cv-fr.pdf" : "/cv-en.pdf"}
              download={language === "fr" ? "Bradley-Hill-CV-FR.pdf" : "Bradley-Hill-CV-EN.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonOutlined}
            >
              {getText("home.cv")}
            </a>
          </div>
        </section>
        <section className={styles.skillSection}>
          <SkillSection />
        </section>
      </main>
    </div>
  );
}
