'use client'
import React from 'react'
import styles from "./cv.module.css"
import { motion } from 'framer-motion'
import Cv from './cv'
export default function page() {
    return (
        <div className={styles.container}>
            {/* <h2 className={styles.title}>Andreotti Ludovic</h2>

            <div className={styles.containerHeader}>

                <p>
                    06 42 53 39 59
                </p>
                <p>andr.ludow@gmail.com</p>
                <p>MARSEILLE</p>
                <p>permis B - véhiculé</p>
                <p>Bachelor devellopement web et mobile</p>
                <h3>Developpeur web - mobile FullStack</h3>
            </div>
            <div className={styles.containerstack}>
                <img width="250px" src="/images/stackreact.png" alt="" />
                <img width="150px" src="/images/stackvue.png" alt="" />
                <img width="200px" src="/images/stackreactnative.png" alt="" />
                <img width="200px" src="/images/stacksymfony.png" alt="" />
                <img width="250px" src="/images/stackmongodb.png" alt="" />
            </div>
            <div className={styles.persoxp}>
                <ul>
                    <li>Graphisre Freelance</li>
                    <li> Assistant administratif et commercial</li>
                    <li> Assistant animateur</li>
                </ul>
            </div>
            <div className={styles.softSkill}>
                <ul>
                    <li>Concevoir et développer un site web & une application</li>
                    <li>Fléxibilité et adaptivité</li>
                    <li>intégrer une maquette</li>
                    <li>Autonomie</li>
                    <li>Curisité</li>
                </ul>
            </div>
            <section className={styles.pointOfInterest}>
                <p>Centre d'intéret</p>
                <p>illutration - digital painting - vtt - randonnées - découvrir de vieux villages - eSport - musique - dévellopement web</p>
            </section> */}
            <Cv></Cv>
        </div>
    )
}
