"use client";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import styles from "./presentation.module.css";
import { useState } from "react";
import { BlockList } from "net";
import { LogoClose, LogoOpen } from "../../../components/svgs/svg";
const info = {
  threadBook: {
    title: "ThreadBook",
    descritpion: `Thread Book est votre compagnon pour organiser, 
  sauvegarder et suivre vos lectures. Que vous soyez un lecteur
   occasionnel ou un passionné de littérature, notre site vous offre les outils nécessaires
          pour enrichir votre expérience de lecture.`,
  },
  lifeSync: {
    title: "LifeSync",
    descritpion: `🚀LifeSync s'adresse aux individus en quête d'efficacité 
    dans leur routine de journaling et d'organisation,
     aux groupes d'amis qui veulent rester connectés à travers leurs activités
      quotidiennes. `,
  },
};
export default function HomePage() {
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const variants = {
    open: { height: "auto" },
    closed: { height: "auto" },
  };
  return (
    <>
      <div className={styles.container}>
        <AnimatePresence>
          <motion.div
            key={info.threadBook.descritpion}
            variants={variants}
            initial="closed"
            animate={openInfo ? "open" : "closed"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.cardInfo}
          >
            {openInfo ? (
              <span>{info.threadBook.descritpion}</span>
            ) : (
              <span>{info.threadBook.title}</span>
            )}
            <span
              className={styles.closeInfo}
              onClick={() => setOpenInfo(!openInfo)}
            >
              {openInfo ? <LogoClose /> : <LogoOpen />}
            </span>
          </motion.div>
        </AnimatePresence>
        <span className={`${styles.button} ${styles.buttonBefore}`}>
          <span style={{ transform: "rotate(-90deg)" }}>
            <LogoOpen />
          </span>
        </span>
        <video autoPlay loop muted className={styles.videoPres}>
          <source src="/videos/demo ThreadBook.mp4" type="video/mp4" />
        </video>
        <span className={`${styles.button} ${styles.buttonAfter}`}>
          <span style={{ transform: "rotate(90deg)" }}>
            <LogoOpen />
          </span>
        </span>
      </div>
    </>
  );
}
