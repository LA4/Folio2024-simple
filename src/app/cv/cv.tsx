'use client'
import { Paragraph } from "./Paragraph";
import { Skills } from "./Skills";
import styles from './cv.module.css'
export default function Cv() {

    const TAGSSOFTSKILLS = [
        { title: "Concevoir et développer un site web & une application" },
        { title: "Intégerer une maquette" },
        { title: "Aptitude à se former de manière autonome" },
        { title: "Flexibilité et adaptabilité" },
        { title: "Autonomie" },
        { title: "Curiosité" },
    ];
    const GRAPHISTE = [
        { title: " Maintenance et mise à jour de site internet pour une école de musique" },
        { title: "Creation de theme Wordpress" },
        { title: "Création de sites web Statique" },
        { title: "Créations graphique" },
        { title: "Créations de logo" },
        { title: "Créations de d'affiche pour des associations" },
    ]
    const ASSISTANT = [
        { title: "Premier contact avec le prospect" },
        { title: "Prise de rendez-vous avec le contact" },
        { title: "Gestion de planning- Confection des devis" },
        { title: "Gestion des bons de commandes" },
        { title: "Déclaration de travaux- Services après vente" },
        { title: "Vente et conseils" },
        { title: "Gestion des stocks et commandes" },
    ]
    const ANIMATEUR = [
        { title: "Elaborer les supports d'apprentissage" },
        { title: "Acceuillir les élèves" },
        { title: "Dispenser un cours de musique" },
        { title: "Accompagnerdansl'apprentissage" },

    ]
    return (
        <>
            <div className={styles.containerCv}>
                <main className={styles.mainCV}>
                    <div className={styles.headerCv}>
                        <h1>Andreotti</h1>
                        <h3>Ludovic</h3>
                        <h2>Développeur web / mobile</h2>
                        <p>Bachelor développement web et mobile</p>
                        <p>Marseille</p>
                        <p>06 42 53 39 59</p>
                        <p><a href="mailto:andr.ludow@gmail.com">andr.ludow@gmail.com</a></p>
                        <div className={styles.containerImgCv}>
                            <img src="/images/profil_picture.jpg" alt="" />
                        </div>
                    </div>
                    <Paragraph>
                        Professionnel polyvalent, mon parcours diversifié m'a permis de
                        développer des compétences précieuses qui vont au-delà des aspects
                        techniques du développement web . . .
                    </Paragraph>
                    <div className={styles.skillContainer}>
                        <div className={styles.containerstack}>
                            <img width="250px" src="/images/stackreact.png" alt="" />
                            <img width="150px" src="/images/stackvue.png" alt="" />
                            <img width="200px" src="/images/stackreactnative.png" alt="" />
                            <img width="200px" src="/images/stacksymfony.png" alt="" />
                            <img width="250px" src="/images/stackmongodb.png" alt="" />
                        </div>
                        <Skills tags={TAGSSOFTSKILLS}>Soft skills</Skills>
                    </div>
                    <div className={styles.containerExperience}>
                        <Skills tags={GRAPHISTE}> Graphiste Freelance <span style={{ color: "var(--second)", fontWeight: "bold" }}> / 2019 à 2024</span></Skills>
                        <Skills tags={ASSISTANT}>Assistant administratif et commerciale <span style={{ color: "var(--second)", fontWeight: "bold" }}> / 2021 à 2023</span></Skills>
                        <Skills tags={ANIMATEUR}>Assistant animateur <span style={{ color: "var(--second)", fontWeight: "bold" }}> / 2016 à 2019</span></Skills>
                        <Skills tags={[{ title: "" }]}>Employer de libre service <span style={{ color: "var(--second)", fontWeight: "bold" }}> / 2019 à 2021</span></Skills>
                    </div>
                </main>
            </div>
        </>
    );
}