'use client'
import React, { useState } from 'react'
import styles from './pokeball.module.css'
type PropsType = {
  src: string,
  handleHoverPokeball: (message: string) => void,
  handleLeavePokeball: (message: boolean) => void,
  handleClickPokeball: (message: string) => void
  key: number
}

export default function Pokeball(props: PropsType) {
  const [mouse, setMouse] = useState<boolean>(false)
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
    <div onMouseEnter={sendHoverPokeball} onMouseLeave={sendLeavePokeball} onClick={handleClickPokeball} className={styles.pokeball}>
      <img src={props.src} alt={props.src}></img>
    </div>
  )
}
