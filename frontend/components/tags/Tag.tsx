"use client";
import { MotionConfig, motion } from "framer-motion";

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
  };
  return (
    <>
      <a
        style={{ display: "flex", justifyContent: "center" }}
        href={props.href}
        target={props.target}
      >
        <MotionConfig>
          <motion.button
            initial={{ opacity: 0, x: -props.width }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            style={tagStyle}
            className="tag-container"
            id={props.id}
          >
            {children}
          </motion.button>
        </MotionConfig>
      </a>
    </>
  );
}
