'use client'
import styles from "./modelisation.module.css"
import { IMAGES } from "./images";
import Picture from "../../../components/picture/Picture";

export default function Illustration() {
    const images = IMAGES

    return (

        <div className={styles.container}>
            <div className={styles.presentation}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Wh1aKwBUFlo?si=xIL4Ybn7jmH4Et1T" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {images.map((e, i) => <Picture key={i} source={e.source} />)}
            </div>

        </div>

    );
}
