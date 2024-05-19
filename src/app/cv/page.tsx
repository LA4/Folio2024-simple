'use client'
import React from 'react'
import styles from "./cv.module.css"
import Cv from './cv'
export default function CvPage() {
    return (
        <div className={styles.container}>
            <Cv></Cv>
        </div>
    )
}
