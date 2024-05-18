"use client";
import Tag from "../../../components/tags/Tag";
import { MotionConfig, motion } from "framer-motion";
import styles from "./home.module.css";

export default function Home() {
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
            <p>Décrouvrez mon univers à travers ce site internet </p>
          </motion.div>
        </MotionConfig>
        <span className="contact-tags">
          <Tag href="https://github.com/LA4" target="_blank" width="80px">
            GitHub
          </Tag>
          <Tag
            href="https://www.linkedin.com/in/andreotti-ludovic-090011197"
            target="_blank"
            width="80px"
          >
            Linkedin
          </Tag>
          <Tag
            href="https://www.instagram.com/ludoandr4rt"
            target="_blank"
            width="100px"
          >
            Instagram
          </Tag>
          <Tag
            href="https://ludraw.artstation.com/"
            target="_blank"
            width="120px"
          >
            Art Station
          </Tag>
        </span>
      </div>
      <img className={styles.background} src="/images/bg-home.jpg" alt="" />
    </>
  );
}
