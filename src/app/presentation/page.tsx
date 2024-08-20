"use client";
import { AnimatePresence, motion } from "framer-motion";
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
};
export default function HomePage() {
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardInfo}>
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
        </div>
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
