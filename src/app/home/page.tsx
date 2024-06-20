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
            <p className={styles.homeParagraph} style={{ userSelect: "none" }}>Décrouvrez mon univers à travers ces sites internet </p>
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
      <div className={styles.projectsContainer}>
        <div className={styles.projectItems}>
          <Tag
            bgColor='#827964'
            color="white"
            href="https://la-4-design-v2.vercel.app/"
            target="_blank"
          >La4-design</Tag>
          <div>
            Site internet static
          </div>
        </div>

        <div className={styles.projectItems}>
          <Tag
            bgColor='#827964'
            color="white"
            href="https://drive.google.com/file/d/1Mop1NrKHN2BuCJS0UrK45KrPIpO8CeR4/view"
            target="_blank"
          >LifeSync</Tag>
          <div>
            Apllication de journaling
          </div>
        </div>
        <div className={styles.projectItems}>
          <Tag
            bgColor='#827964'
            color="white"
            href="https://mymoviz-frontend-plum-six.vercel.app/"
            target="_blank"
          >My movie's</Tag>
          <div>
            Site interet permettant de voir les sorties cinémas et les notations associées
          </div>
        </div>
      </div>
      <img className={styles.background} src="/images/bg-home.jpg" alt="Image de pokeballs faites en 3d part Andreotti ludovic" />
    </>
  );
}
