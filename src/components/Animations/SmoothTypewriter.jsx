import React from 'react';
import splitString from '@/utils/SplitString';
import { motion } from 'framer-motion';
import styles from './smoothTypewriter.module.scss'

const TextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SmoothTypewriter = ({ text = 'Hello world', tag = 'p' }) => {
  const TextElement = motion[tag];
  const textChars = splitString(text);
  return (
    <>
      <TextElement
        className={styles.typewriter}
        initial='hidden'
        whileInView='visible'
        transition={{ staggerChildren: 0.02 }}
      >
        {textChars.map((char, i) => (
          <motion.span
            key={i}
            variants={TextVariants}
            transition={{ duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </TextElement>
    </>
  );
};

export default SmoothTypewriter;
