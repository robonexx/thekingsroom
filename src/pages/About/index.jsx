import {Link} from 'react-router-dom'
import ImageReveal from '../../components/ImageReveal/ImageReveal';
import styles from './About.module.scss';
import IMG from '../../assets/images/marcio.jpg';
import IMG2 from '../../assets/images/djcombat.jpg';
import IMG3 from '../../assets/images/bob.jpg';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>THE CREW!</h1>
      <div className={styles.crew}>
        <div className={styles['crew-member']}>
      <ImageReveal
        title='Marcio Ratinho'
        sub='Founder and chief-rocka of the kingsroom'
        img={`${IMG}`}
      />
          <div className={styles.socials}>
            <Link href=''></Link>
          </div>
        </div>
        <div className={styles['crew-member']}>
      <ImageReveal
        title='DJ Combat'
        sub='Kingsrooms finest Dj mero mero'
        img={`${IMG2}`}
      />

        </div>
        <div className={styles['crew-member']}>
      <ImageReveal
        title='Rob-One'
        sub='Creative design and art director'
        img={`${IMG3}`}
      />

        </div>

      </div>
    </div>
  );
};

export default About;
