"use client";
import { MotionConfig, motion } from "framer-motion";
import styles from "./tag.module.css"

type PropsTypetag = {
  children: React.ReactNode;
  [key: string]: any;
};
export default function Tag({ children, ...props }: PropsTypetag) {
  const tagStyle = {
    lineHeight: props.lineHeight,
    fontSize: props.fontSize,
    padding: props.padding,
    width: props.width,
    height: props.height,
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <>
      <a
        className={styles.container}
        href={props.href}
        target={props.target}
      >
        <MotionConfig>
          <motion.button
            initial={{ opacity: 0, x: -props.width }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            style={tagStyle}
            className={styles.tagContainer}
            id={props.id}
          >
            {children}
          </motion.button>
        </MotionConfig>
      </a>
    </>
  );
}
