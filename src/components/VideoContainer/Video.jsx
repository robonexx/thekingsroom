import React from 'react'
import styles from './Video.module.scss'

const Video = ({ vid, vtime, id, name }) => {
  return (
    <div key={id} className={styles['video_container']}>
    <h2>{name}</h2>
    <iframe
      title={`video of ${name}`}
      className={styles.video}
      type='text/html'
      src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
    ></iframe>
  </div>
  )
}

export default Video