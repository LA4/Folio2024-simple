import React, { useEffect, useRef, useState } from "react";
import styles from "../../src/app/presentation/presentation.module.css";
type moviePlaeyType = {
  url: string;
};
export default function MoviePlayer({ url }: moviePlaeyType) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleVideoChange = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };
  return (
    <div className={styles.videoPres}>
      <video
        key={url}
        width="100%"
        height="100%"
        ref={videoRef}
        onLoadedData={() => handleVideoChange}
        autoPlay
        muted
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}
