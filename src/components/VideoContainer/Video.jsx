import React from 'react';
import styles from './Video.module.scss';

const Video = ({ vid, vtime, id, name }) => {
  return (
    <div key={id} className={styles['video_container']}>
      {/*  <h2>{name}</h2> */}
      <iframe
        onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
        style={{
          height: '368px',
          width: '100%',
          border: 'none',
          overflow: 'hidden',
          borderRadius: '15px',
        }}
        title={`video of ${name}`}
        type='text/html'
        src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}&modestbranding=1&controls=1&autoplay=1&loop=1&mute=1`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;'
        loop='loop'
        muted='muted'
        allowFullScreen='allowfullscreen'
        autoPlay='autoplay'
      ></iframe>
    </div>
  );
};

export default Video;
