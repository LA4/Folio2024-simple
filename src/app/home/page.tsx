"use client";
import Tag from "../../../components/tags/Tag";
import { MotionConfig, motion } from "framer-motion";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <MotionConfig>
          <motion.div
            initial={{ opacity: 0, scale: 2.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.containerHome}
          >
            <h1 className={styles.homeTitle}>Andreotti Ludovic</h1>
            <p style={{ userSelect: "none" }}>Décrouvrez mon univers à travers ces sites internet </p>
          </motion.div>
        </MotionConfig>
        <span className={styles.contactTag}>
          <Tag href="https://github.com/LA4" target="_blank" >
            GitHub
          </Tag>
          <Tag
            href="https://www.linkedin.com/in/andreotti-ludovic-090011197"
            target="_blank"
          >
            Linkedin
          </Tag>
          <Tag
            href="https://www.instagram.com/ludoandr4rt"
            target="_blank"
          >
            Instagram
          </Tag>
          <Tag
            href="https://ludraw.artstation.com/"
            target="_blank"
          >
            Art Station
          </Tag>
        </span>
      </div>
      <img className={styles.background} src="/images/bg-home.jpg" alt="Image de pokeballs faites en 3d part Andreotti ludovic" />
    </>
  );
}
