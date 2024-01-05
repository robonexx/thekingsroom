import Video from '../VideoContainer/Video';
import styles from './Hero.module.scss';
import { videoData } from '../../assets/images/Data';

const Hero = () => {
  const { vid, vtime, id, name } = videoData[0];
  return (
    <div className={styles.hero}>
      <div className={styles.headline}>
        <h3>Welcome</h3>
        <h2>To THE KINGS ROOM</h2>
      </div>
      <div className={styles['video-wrapper']}>
        <Video vid={vid} vtime={vtime} id={id} name={name} />
      </div>
    </div>
  );
};

export default Hero;
