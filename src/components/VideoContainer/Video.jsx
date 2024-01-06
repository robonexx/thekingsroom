import React from 'react';
import styles from './Video.module.scss';
import {motion} from 'framer-motion'

const Video = ({ vid, vtime, id, name }) => {
  return (
    <div key={id} className={styles['video-responsive']}>
      <motion.div className={styles.overlay}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{
          duration: 1, easings: 'ease-in-out',
          delay: 1
        }}
      ></motion.div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}&modestbranding=1&controls=1&autoplay=1&loop=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loop='loop'
        muted='muted'
        allowFullScreen='allowfullscreen'
        autoPlay='autoplay'
        title="Embedded youtube"
      ></iframe>
    </div>
  );
};

export default Video;
