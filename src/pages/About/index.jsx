import { Link } from 'react-router-dom';
import {
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiSpotifyLine,
  RiSoundcloudLine,
  RiFacebookBoxLine,
  RiTiktokFill,
  RiWhatsappLine,
} from 'react-icons/ri';
import { TbBrandBandcamp } from 'react-icons/tb';

import ImageReveal from '../../components/ImageReveal/ImageReveal';
import styles from './About.module.scss';
import IMG from '../../assets/images/marcio.jpg';
import IMG2 from '../../assets/images/djcombat.jpg';
import IMG3 from '../../assets/images/bob.jpg';
import IMG4 from '../../assets/images/tkr-bg.png';

const About = () => {
  return (
    <div className={styles.about}>
     {/*  <h1>THE CREW!</h1> */}
      <div className={styles.tkr}>
        <ImageReveal
          title='THE KINGS ROOM'
          sub='A crew of extra ordinary creative minds and artists put together to represent The Kings Room'
          img={`${IMG4}`}
        />
        <ul className={styles.socials}>
          <Link href=' https://www.instagram.com/thekingsroom1/'>
            <RiInstagramLine />
          </Link>
          <Link href='https://soundcloud.com/thekingsroom1/the-kings-room-show-2021-episode-2?ref=clipboard&p=a&c=0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>
            <RiSoundcloudLine />
          </Link>
        </ul>
      </div>
      <div className={styles.crew}>
        <div className={styles['crew-member']}>
          <ImageReveal
            title='Marcio Ratinho'
            sub='Founder and chief-rocka of the kingsroom'
            img={`${IMG}`}
          />
          <ul className={styles.socials}>
            <Link href='https://www.instagram.com/marcio_ratinho/'>
              <RiInstagramLine />
            </Link>
            <Link href=''></Link>
          </ul>
        </div>
        <div className={styles['crew-member']}>
          <ImageReveal
            title='DJ Combat'
            sub='Kingsrooms finest Dj mero mero'
            img={`${IMG2}`}
          />
          <ul className={styles.socials}>
            <Link href='https://www.instagram.com/djcombat/'>
              <RiInstagramLine />
            </Link>
            <Link href='https://open.spotify.com/artist/2jqZwHsTQifJuEhBAMbwhZ?si=SLuPfogbSXidnmEcl0KNWw&nd=1&dlsi=bd2a68f703eb4dfc'>
              <RiSpotifyLine />
            </Link>
            <Link href='https://djcombat8.bandcamp.com/album/sounds-of-2023'>
              <TbBrandBandcamp />
            </Link>
            <Link href='https://soundcloud.com/djcombat'>
              <RiSoundcloudLine />
            </Link>
          </ul>
        </div>
        <div className={styles['crew-member']}>
          <ImageReveal
            title='Rob-One'
            sub='Creative design and art director'
            img={`${IMG3}`}
          />
          <ul className={styles.socials}>
            <Link href='https://www.instagram.com/r.o.b_o.n.e/'>
              <RiInstagramLine />
            </Link>
            <Link href=''>
              <TbBrandBandcamp />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
