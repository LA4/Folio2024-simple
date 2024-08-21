"use client";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import styles from "./presentation.module.css";
import { useRef, useState } from "react";
import { LogoClose, LogoOpen } from "../svgs/svg";
import MoviePlayer from "./MoviePlayer";
const info = [
  {
    title: "ThreadBook",
    descritpion: `Thread Book est votre compagnon pour organiser, 
  sauvegarder et suivre vos lectures. Que vous soyez un lecteur
   occasionnel ou un passionné de littérature, notre site vous offre les outils nécessaires
          pour enrichir votre expérience de lecture.`,
    videoUri: "/videos/demo ThreadBook.mp4",
  },
  {
    title: "LifeSync",
    descritpion: `🚀LifeSync s'adresse aux individus en quête d'efficacité 
    dans leur routine de journaling et d'organisation,
     aux groupes d'amis qui veulent rester connectés à travers leurs activités
      quotidiennes. `,
    videoUri: "/videos/lifesync.mp4",
  },
  {
    title: "LA4-design",
    descritpion: `Site web portfolio présentant les compétences et les services liées au graphisme. `,
    videoUri: "/videos/demo-la4design.mp4",
  },
];
export default function MovieComponent() {
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [indexInfo, setIndexInfo] = useState<number>(0);

  const handleIndefInfo = (direction: string) => {
    if (direction === "before" && indexInfo > 0) {
      setIndexInfo((indexInfo) => indexInfo - 1);
    }
    if (direction === "before" && indexInfo === 0) {
      setIndexInfo(info.length - 1);
    }
    if (direction === "after" && indexInfo >= 0) {
      setIndexInfo((indexInfo) => indexInfo + 1);
    }
    if (direction === "after" && indexInfo === info.length - 1) {
      setIndexInfo(0);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.videoButtonContainer}>
          <span
            onClick={() => handleIndefInfo("before")}
            className={`${styles.button} ${styles.buttonBefore}`}
          >
            <span style={{ transform: "rotate(-90deg)" }}>
              <LogoOpen />
            </span>
          </span>

          <span
            onClick={() => handleIndefInfo("after")}
            className={`${styles.button} ${styles.buttonAfter}`}
          >
            <span style={{ transform: "rotate(90deg)" }}>
              <LogoOpen />
            </span>
          </span>
          <div className={styles.cardInfo}>
            {openInfo ? (
              <span>{info[indexInfo].descritpion}</span>
            ) : (
              <span>{info[indexInfo].title}</span>
            )}
            <span
              className={styles.closeInfo}
              onClick={() => setOpenInfo(!openInfo)}
            >
              {openInfo ? <LogoClose /> : <LogoOpen />}
            </span>
          </div>
          <MoviePlayer url={info[indexInfo].videoUri}></MoviePlayer>
        </div>
      </div>
    </>
  );
}
