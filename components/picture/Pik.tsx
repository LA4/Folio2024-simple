'use client'
import React, { useState } from 'react'
import styles from './picture.module.css'
type PictureProsType = {
    source: string
}
export default function Pik({ source }: PictureProsType) {
    const [dimension, setDimension] = useState<{ width: string, height: string }>({ width: "", height: "" })
    const [open, setOpen] = useState<boolean>(false)
    const handleClick = () => {
        if (!open) {
            setDimension({ width: "500px", height: "500px" })
            setOpen(true)
        } else {
            setDimension({ width: "", height: "" })
            setOpen(false)
        }
    }


    return (
        <div onClick={() => handleClick()} className={styles.containerImage}>
            {open && <span className={styles.close}>close</span>}
            <img style={dimension} className={styles.image} src={source}></img>
        </div>
    )
}
