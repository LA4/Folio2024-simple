import Image from "next/image";
import Tag from "../../../components/tags/Tag";
import { motion } from "framer-motion";

export function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 2.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container-home"
        >
          <h1 className="home-title">Andreotti Ludovic</h1>
          <p>Décrouvrez mon univers à travers ce site internet </p>
        </motion.div>
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
      {/* <img className="background" src={bgHome} alt="" />
       */}
        <Image
        className="background"
        src='../assets/image/bg-home.jpg'
        alt="Création 3d de 3 pokeballs sur fond sombre"
      ></Image>
    </>
  );
}
// 