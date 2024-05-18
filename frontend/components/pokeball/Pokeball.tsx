'use client'
import React, { useState } from 'react'
import styles from './pokeball.module.css'
import { motion } from 'framer-motion'
type PropsType = {
  src: string,
  handleHoverPokeball: (message: string) => void,
  handleLeavePokeball: (message: boolean) => void,
  handleClickPokeball: (message: string) => void,
  delay: number
  key: number
}

export default function Pokeball(props: PropsType) {
  const [mouse, setMouse] = useState<boolean>(false)
  const animationStyle: Object = {
    animationDelay: `${props.delay}s`,
  }
  const sendHoverPokeball = (): void => {
    props.handleHoverPokeball(props.src)
    setMouse(true)
  }
  const handleClickPokeball = () => {
    props.handleClickPokeball(props.src)
  }
  const sendLeavePokeball = (): void => {
    props.handleLeavePokeball(false)
  }
  return (
    <div
      onMouseEnter={sendHoverPokeball}
      onMouseLeave={sendLeavePokeball}
      onClick={handleClickPokeball}
      style={animationStyle}
      className={styles.pokeball}>
      <motion.img
        whileHover={{ scale: 1.1, transition: { duration: .3 } }} src={props.src} alt={props.src}></motion.img>
    </div>
  )
}
