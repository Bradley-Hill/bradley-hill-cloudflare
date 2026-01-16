"use client";
import { useI18n } from "@/i18n/i18n";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const { getText } = useI18n();

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>{getText("home.welcome")}</h1>
          <p className={styles.heroSubtitle}>{getText("home.subtitle")}</p>
          <p className={styles.heroDescription}>
            {getText("home.description")}
          </p>
          <Link href="/projects" className={styles.ctaButton}>
            {getText("home.cta")}
          </Link>
        </section>
      </main>
    </div>
  );
}
