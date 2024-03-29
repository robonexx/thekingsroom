import { Link } from 'react-router-dom';
import {
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiSpotifyLine,
  RiSoundcloudLine,
  RiGithubLine,
  RiFacebookBoxLine,
  RiTiktokFill,
  RiWhatsappLine,
} from 'react-icons/ri';
import { TbBrandBandcamp } from 'react-icons/tb';
import { motion } from 'framer-motion';
import CrewItem from '../../components/CrewItem/CrewItem';
import styles from './About.module.scss';
import IMG from '../../assets/images/marcio.jpg';
import IMG2 from '../../assets/images/combat_2.png';
import IMG3 from '../../assets/images/bob.jpg';
import IMG4 from '../../assets/images/tkr-bg.png';
import IMG5 from '../../assets/images/stew.webp';

const About = () => {
  return (
    <div className={styles.about}>
      <section>
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            easings: 'ease-in-out',
            delay: 0,
          }}
        >
          ABOUT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            easings: 'ease-in-out',
            delay: 0.3,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          veritatis quia porro doloremque. Et obcaecati, perspiciatis doloremque
          perferendis beatae sequi sunt minima! Laborum recusandae tempora eaque
          aliquid voluptatibus harum, nulla quibusdam eius voluptatem iste
          officiis obcaecati dolore esse odit accusamus, id deleniti natus
          deserunt voluptas eum nemo quaerat laboriosam rerum!
        </motion.p>
      </section>
      <div className={styles.crew}>
        <div className={styles['crew-member-container']}>
          <CrewItem
            title='Marcio Ratinho'
            sub='Founder and chief-rocka of the kingsroom'
            img={`${IMG}`}
          />
          <ul className={styles.socials}>
            <Link to='https://www.instagram.com/marcio_ratinho/' target="_blank" rel="noopener noreferrer">
              <RiInstagramLine />
            </Link>
            <Link to='' rel="noopener noreferrer"></Link>
          </ul>
        </div>
        <div className={styles['crew-member-container']}>
          <CrewItem
            title='DJ Combat'
            sub='Swedens finest straight from Gothenburg'
            img={`${IMG2}`}
          />
          <ul className={styles.socials}>
            <Link to='https://www.instagram.com/djcombat/' target="_blank" rel="noopener noreferrer">
              <RiInstagramLine />
            </Link>
            <Link to='#' target="_blank" rel="noopener noreferrer">
              <RiSpotifyLine />
            </Link>
            <Link to='#' target="_blank" rel="noopener noreferrer">
              <TbBrandBandcamp />
            </Link>
            <Link to='#' target="_blank" rel="noopener noreferrer">
              <RiSoundcloudLine />
            </Link>
          </ul>
        </div>
        <div className={styles['crew-member-container']}>
          <CrewItem
            title='DJ Flexy Stew'
            sub='The club, the after party, the hotel'
            img={`${IMG5}`}
          />
          <ul className={styles.socials}>
            <Link to='https://www.instagram.com/djstew_lsc/' target="_blank" rel="noopener noreferrer">
              <RiInstagramLine />
            </Link>
            <Link to='https://open.spotify.com/artist/2jqZwHsTQifJuEhBAMbwhZ?si=SLuPfogbSXidnmEcl0KNWw&nd=1&dlsi=bd2a68f703eb4dfc' target="_blank" rel="noopener noreferrer">
              <RiSpotifyLine />
            </Link>
            <Link to='https://djcombat8.bandcamp.com/album/sounds-of-2023' target="_blank" rel="noopener noreferrer">
              <TbBrandBandcamp />
            </Link>
            <Link to='https://soundcloud.com/djcombat' target="_blank" rel="noopener noreferrer">
              <RiSoundcloudLine />
            </Link>
          </ul>
        </div>
        <div className={styles['crew-member-container']}>
          <CrewItem
            title='Rob-One'
            sub='Creative design and art director'
            img={`${IMG3}`}
          />
          <ul className={styles.socials}>
            <Link to='https://www.instagram.com/r.o.b_o.n.e/' target="_blank" rel="noopener noreferrer">
              <RiInstagramLine />
            </Link>
            <Link to='https://github.com/robonexx' target="_blank" rel="noopener noreferrer">
              <RiGithubLine />
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.tkr}>
        <CrewItem
          title='The Kings Room TEAM'
          sub='A crew of extra ordinary creative minds and artists put together to represent The Kings Room'
          img={`${IMG4}`}
        />
        <ul className={styles.socials}>
          <Link to=' https://www.instagram.com/thekingsroom1/' target="_blank" rel="noopener noreferrer">
            <RiInstagramLine />
          </Link>
          <Link to='https://soundcloud.com/thekingsroom1/the-kings-room-show-2021-episode-2?ref=clipboard&p=a&c=0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target="_blank" rel="noopener noreferrer">
            <RiSoundcloudLine />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default About;
