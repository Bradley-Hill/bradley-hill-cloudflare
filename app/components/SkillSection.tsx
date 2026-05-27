"use client";

import { useI18n } from "@/i18n/i18n";
import styles from "./SkillSection.module.css";

type Category = "frontend" | "backend" | "testing" | "tools";

interface Skill {
  name: string;
  iconUrl: string;
  category: Category;
}

interface InProgressSkill {
  name: string;
  iconUrl: string;
}

const BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const confidentSkills: Skill[] = [
  { name: "React", iconUrl: `${BASE}/react/react-original.svg`, category: "frontend" },
  { name: "Next.js", iconUrl: `${BASE}/nextjs/nextjs-original.svg`, category: "frontend" },
  { name: "TypeScript", iconUrl: `${BASE}/typescript/typescript-original.svg`, category: "frontend" },
  { name: "JavaScript", iconUrl: `${BASE}/javascript/javascript-original.svg`, category: "frontend" },
  { name: "Tailwind CSS", iconUrl: `${BASE}/tailwindcss/tailwindcss-original.svg`, category: "frontend" },
  { name: "Sass", iconUrl: `${BASE}/sass/sass-original.svg`, category: "frontend" },
  { name: "Node.js", iconUrl: `${BASE}/nodejs/nodejs-original.svg`, category: "backend" },
  { name: "Express", iconUrl: `${BASE}/express/express-original.svg`, category: "backend" },
  { name: "PostgreSQL", iconUrl: `${BASE}/postgresql/postgresql-original.svg`, category: "backend" },
  { name: "Supabase", iconUrl: `${BASE}/supabase/supabase-original.svg`, category: "backend" },
  { name: "Prisma", iconUrl: `${BASE}/prisma/prisma-original.svg`, category: "backend" },
  { name: "Jest", iconUrl: `${BASE}/jest/jest-plain.svg`, category: "testing" },
  { name: "Playwright", iconUrl: `${BASE}/playwright/playwright-plain.svg`, category: "testing" },
  { name: "Docker", iconUrl: `${BASE}/docker/docker-original.svg`, category: "tools" },
  { name: "Git", iconUrl: `${BASE}/git/git-original.svg`, category: "tools" },
  { name: "Cloudflare", iconUrl: `${BASE}/cloudflare/cloudflare-original.svg`, category: "tools" },
];

const inProgressSkills: InProgressSkill[] = [
  { name: "Vue", iconUrl: `${BASE}/vuejs/vuejs-original.svg` },
  { name: "C#", iconUrl: `${BASE}/csharp/csharp-original.svg` },
  { name: ".NET", iconUrl: `${BASE}/dotnetcore/dotnetcore-original.svg` },
  { name: "Bash", iconUrl: `${BASE}/bash/bash-original.svg` },
  { name: "Python", iconUrl: `${BASE}/python/python-original.svg` },
  { name: "Django", iconUrl: `${BASE}/django/django-plain.svg` },
];

const categories: { key: Category; labelKey: string }[] = [
  { key: "frontend", labelKey: "skills.frontend" },
  { key: "backend", labelKey: "skills.backend" },
  { key: "testing", labelKey: "skills.testing" },
  { key: "tools", labelKey: "skills.tools" },
];

export function SkillSection() {
  const { getText } = useI18n();

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>{getText("skills.title")}</h2>
      <div className={styles.categoriesGrid}>
        {categories.map(({ key, labelKey }) => {
          const skills = confidentSkills.filter((s) => s.category === key);
          return (
            <div key={key} className={styles.categoryGroup}>
              <span className={styles.categoryLabel}>{getText(labelKey)}</span>
              <div className={styles.chipsRow}>
                {skills.map((skill) => (
                  <div key={skill.name} className={styles.chip}>
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className={styles.chipIcon}
                    />
                    <span className={styles.chipName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.inProgressContainer}>
        <h3 className={styles.inProgressTitle}>{getText("skills.inProgress")}</h3>
        <div className={styles.inProgressChipsRow}>
          {inProgressSkills.map((skill) => (
            <div key={skill.name} className={`${styles.chip} ${styles.chipInProgress}`}>
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className={styles.chipIcon}
              />
              <span className={styles.chipName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
