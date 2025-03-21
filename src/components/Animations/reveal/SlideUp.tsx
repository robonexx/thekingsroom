import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import styles from "./slide.module.scss";

interface Props {
  children: JSX.Element;
}

const slideVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.1, ease: "easeOut" },
  },
};

export const SlideUp = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    console.log("slide up is in view");
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className={`${styles.reveal}`}
      ref={ref}
      variants={slideVariants}
      initial='hidden'
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
