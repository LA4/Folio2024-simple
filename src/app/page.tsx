'use client'
import { useState } from "react"
import styles from "./page.module.css"
import Pokeball from "../../components/pokeball/Pokeball"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Home() {

  const [message, setMessage] = useState<string>('')
  const [messagePlace, setMessagePlace] = useState<string>('')
  const router = useRouter()

  const pokeballs: string[] = ["/images/pokeball-green.png", "/images/pokeball-blue.png", "/images/pokeball-red.png"]
  const handleHoverPokeball = (property: string) => {
    if (property === "/images/pokeball-green.png") {
      setMessage("Vous désirez visiter mon portefolio ? choisisez moi !")
      setMessagePlace("flex-end")
      return
    }
    if (property === "/images/pokeball-blue.png") {
      setMessage("Vous cherchez les liens de mes réseaux sociaux ? Choisisez moi !")

      setMessagePlace("center")
      return
    }
    if (property === "/images/pokeball-red.png") {
      setMessage("Mon CV vous intéresse ? Choisissez moi !")
      setMessagePlace("flex-start")
      return
    }
  }
  const handleClickPokeball = (property: string) => {
    property === "/images/pokeball-green.png" && router.push("/modelisation")
    property === "/images/pokeball-blue.png" && router.push("/home")
    property === "/images/pokeball-red.png" && router.push("/cv")
  }
  const handleLeavePokeball = (state: boolean) => {
    !state && setMessage('')
  }
  return <div className={styles.main}>

    {message && <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ justifyContent: messagePlace }} className={styles.modal}> {message}</motion.div>}
    <div className={styles.containerPokeball}>
      {pokeballs.map((e, i) => {
        return <Pokeball
          handleHoverPokeball={handleHoverPokeball}
          handleLeavePokeball={handleLeavePokeball}
          handleClickPokeball={handleClickPokeball}
          src={e}
          key={i}
          delay={i}
        ></Pokeball>
      })}
    </div>
  </div>;
}
