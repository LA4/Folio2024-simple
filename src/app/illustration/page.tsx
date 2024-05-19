'use client'
// import "./illustration.css";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES } from "./images";
import { useState } from "react";
export default function Illustration() {
  const [actualPicture, setActualPicture] = useState<number>(0);
  const [nextPicture, setNextPicture] = useState<number>(1);
  const nextImg = ():void => {
    if (actualPicture >= IMAGES.length - 1) {
      setActualPicture(0);
    } else {
      setActualPicture(actualPicture + 1);
    }
    if (nextPicture >= IMAGES.length - 1) {
      setNextPicture(0);
    } else {
      setNextPicture(nextPicture + 1);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="container-illustration"
        >
          <div className="container-img-description">
            <div className="title-illustration">
              {IMAGES[actualPicture].title}
            </div>
            <motion.aside
              key={IMAGES[nextPicture].description}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="aside-description"
            >
              {IMAGES[actualPicture].description}
            </motion.aside>
            <div onClick={nextImg} className="container-img">
              <motion.img
                key={IMAGES[nextPicture].source}
                src={IMAGES[nextPicture].source}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.4 }}
                exit={{ x: -100, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="img-back"
                alt=""
              />
              <AnimatePresence>
                <motion.img
                  key={IMAGES[actualPicture].source}
                  src={IMAGES[actualPicture].source}
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -150, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="img-front"
                  alt=""
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
