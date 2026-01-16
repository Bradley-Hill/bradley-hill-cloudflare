"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useI18n } from "@/i18n/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getText } = useI18n();

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <RxHamburgerMenu />
      </button>

      <ul className={`${styles.navbarList} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            {getText("nav.home")}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/projects"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            {getText("nav.projects")}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            {getText("nav.about")}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/contact"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            {getText("nav.contact")}
          </Link>
        </li>
      </ul>

      <LanguageSwitcher />
    </nav>
  );
}
