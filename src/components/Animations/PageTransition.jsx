/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap';
import styles from './pageTransition.module.scss';

const PageTransition = () => {
  const transitionRef = useRef(null);
  const timeline = gsap.timeline();
  useEffect(() => {
    timeline.to(transitionRef.current, {
      duration: 2,
      x: 3500,
      ease: Power4.easeInOut,
    });
  }),
    [];
    return <div className={styles.page_transition}
    ref={transitionRef}></div>;
};

export default PageTransition;
