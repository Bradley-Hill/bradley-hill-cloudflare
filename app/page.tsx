import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Home</h1>
      </header>
      <main className={styles.content}>
      <p>Welcome to the home page!</p>
      </main>
    </div>
  );
}
