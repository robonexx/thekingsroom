'use client';
import styles from './TextReveal.module.scss'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const defaultAnimations = {
  hidden: {
    opacity: 0,
  
  },
  visible: {
    opacity: 1,
   
    transition: {
      duration: 0.1,
    },
  },
};

export const TextReveal = ({
  text,
  el: Wrapper = 'p',
  style,
  displayStyle = 'inline-block', // Default display style
  once,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper
      style={{ ...style, display: displayStyle }} 
    >
      <span className={styles['sr-only']}>{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span style={{ display: 'block' }} key={`${line}-${lineIndex}`} className={styles.span}>
            {line.split(' ').map((word, wordIndex) => (
              <span
                style={{ display: 'inline-block' }}
                key={`${word}-${wordIndex}`}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    style={{ display: 'inline-block' }}
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span style={{ display: displayStyle }}>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
