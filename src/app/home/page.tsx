"use client";
import Tag from "../../../components/tags/Tag";
import { MotionConfig, motion } from "framer-motion";
import styles from "./home.module.css";
import { transform } from "next/dist/build/swc";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [perspectiveEffect, setPerspectiveEffect] = useState({
    transform: `perspective(400px) rotateY(0)`,
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xOffset = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const yOffset = (e.clientY - windowHeight / 2) / (windowHeight / 2);
      const rotationX = xOffset * 2;
      const rotationY = yOffset * -2;

      setPerspectiveEffect({
        transform: `perspective(400px) rotateY(${rotationX}deg) rotateX(${rotationY}deg)`,
      });
    };

    const throttledMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener("mousemove", throttledMouseMove);

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

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
            <h1 style={perspectiveEffect} className={styles.homeTitle}>
              Andreotti Ludovic
            </h1>
            <p className={styles.homeParagraph} style={{ userSelect: "none" }}>
              Décrouvrez mon univers à travers ces sites internet{" "}
            </p>
          </motion.div>
        </MotionConfig>
        <span className={styles.contactTag}>
          <Tag href="https://github.com/LA4" target="_blank">
            GitHub
          </Tag>
          <Tag
            href="https://www.linkedin.com/in/andreotti-ludovic-090011197"
            target="_blank"
          >
            Linkedin
          </Tag>
          <Tag href="https://www.instagram.com/ludoandr4rt" target="_blank">
            Instagram
          </Tag>
          <Tag href="https://ludraw.artstation.com/" target="_blank">
            Art Station
          </Tag>
        </span>
      </div>
      <div className={styles.projectsContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: "1rem",
            borderRadius: "14px",
            width: "100%",
          }}
        >
          <Tag
            bgColor="#827964"
            color="white"
            href="https://thread-book.vercel.app/"
            target="_blank"
          >
            Thread Book
          </Tag>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/5NBu1aPEHL8?si=fBXUCx8SUs-O76b-&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className={styles.projectItems}>
          <Tag
            bgColor="#827964"
            color="white"
            href="https://la-4-design-v2.vercel.app/"
            target="_blank"
          >
            La4-design
          </Tag>
          <div>Site internet static</div>
          <img
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src="/images/la4-design.com.png"
          ></img>
        </div>

        <div className={styles.projectItems}>
          <Tag
            bgColor="#827964"
            color="white"
            href="https://drive.google.com/file/d/1Mop1NrKHN2BuCJS0UrK45KrPIpO8CeR4/view"
            target="_blank"
          >
            LifeSync
          </Tag>
          <div>Apllication de journaling</div>
          <img
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src="/images/lifesync.png"
          ></img>
        </div>
        <div className={styles.projectItems}>
          <Tag
            bgColor="#827964"
            color="white"
            href="https://mymoviz-frontend-plum-six.vercel.app/"
            target="_blank"
          >
            My movie's
          </Tag>
          <div>
            Site interet permettant de voir les sorties cinémas et les notations
            associées
          </div>
          <img
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src="/images/mymovies.png"
          ></img>
        </div>
      </div>
      <img
        style={perspectiveEffect}
        className={styles.background}
        src="/images/bg-home.jpg"
        alt="Image de pokeballs faites en 3d part Andreotti ludovic"
      />
    </>
  );
}
