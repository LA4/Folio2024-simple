"use client";
import styles from "./presentation.module.css";
export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <span className={`${styles.button} ${styles.buttonBefore}`}>
          before
        </span>
        <video autoPlay loop muted className={styles.videoPres}>
          <source src="/videos/demo ThreadBook.mp4" type="video/mp4" />
        </video>
        <span className={`${styles.button} ${styles.buttonAfter}`}>after</span>
      </div>
    </>
  );
}
