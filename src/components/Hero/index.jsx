import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { videoData } from '../../assets/Data';
import Video from '../VideoContainer/Video';
import IMG4 from '../../assets/images/tkr-bg.png';
import styles from './Hero.module.scss';
import ImageReveal from '../CrewItem/CrewItem';

const Hero = () => {
  /*  const [windowWidth, setWindowWidth] = useState(window.innerWidth); */
  const { vid, vtime, id, name } = videoData[0];

  /* useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); */

  /* const title = windowWidth < 768 ? 'THE KINGS ROOM' : ''; */

  return (
    <div className={styles.hero}>
      <div className={styles['mobile-welcome']}>
      <motion.h3
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          easings: 'ease-in-out',
          delay: 0,
        }}
      >
        Welcome to -
      </motion.h3>
      <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            easings: 'ease-in-out',
            delay: 0.5,
          }}
        >
          THE KINGS ROOM
        </motion.h2>
      </div>
      <div className={styles['hero-tkr']}>
        <ImageReveal
          title=''
          sub=''
          img={`${IMG4}`}
        />
      </div>
      <div className={styles.headline}>
        <motion.h3
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            easings: 'ease-in-out',
            delay: 0,
          }}
        >
          Welcome to -
        </motion.h3>
        <motion.h1
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            easings: 'ease-in-out',
            delay: 0.5,
          }}
        >
          THE KINGS ROOM
        </motion.h1>
      </div>
     
      <div className={styles['video-wrapper']}>
      <h3>Marcio Ratinho - Chief-Rocka</h3>
        <Video vid={vid} vtime={vtime} id={id} name={name} />
      </div>
    </div>
  );
};

export default Hero;
