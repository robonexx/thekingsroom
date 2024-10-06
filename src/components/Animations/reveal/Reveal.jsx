/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import styles from "./reveal.module.scss";

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // use to contol animation
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  // use to trigger animation when in view
  useEffect(() => {
    console.log("is in view");
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, slideControls, mainControls]);

  return (
    <div className={`${styles.reveal} ${width}`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        className={styles.effect}
        variants={{
          hidden: { left: 0, opacity: [0, 0.8] },
          visible: { left: "100%", opacity: 1 },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
};
