import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import styles from "./slide.module.scss";

const slideVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
  },
};

export const SlideInLeft = ({ children }) => {
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
