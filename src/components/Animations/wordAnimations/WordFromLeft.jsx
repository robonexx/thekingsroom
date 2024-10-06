import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './wordAnimation.scss';

const WordFromLeft = ({
  text,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.h2
      ref={ref}
      className={`reveal textSplit`}
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial='hidden'
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {text.split(' ').map((word, idx, arr) => (
        <motion.span
          key={idx}
          /* className={``}
          style={{ display: 'inline-block' }} */
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.2, delay: idx * 0.2 } },
          }}
        >
          {word}
          {idx < arr.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default WordFromLeft;
