"use client";
import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { getText } = useI18n();

  return (
    <nav className={styles.navbar}>
      <h1>{getText("nav.home")}</h1>
      <ul className={styles.navbarList}>
        <li className={styles.navItem}>
          {" "}
          <a href="/" className={styles.navLink}>
            {getText("nav.home")}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>
            {getText("nav.about")}
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>
            {getText("nav.contact")}
          </a>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
