import Hero from '../../components/Hero';
import styles from './Home.module.scss';


const Home = () => {

  return (
    <div className={styles.home}>
      <Hero />
      <section className={styles.section}>
        <h2>Latest from Kingsroom</h2>
        <article>
          <iframe
            className={styles.iframe}
            scrolling='no'
            frameborder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1741890039&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
          <div>
            <a
              href='https://soundcloud.com/thekingsroom1/just-another-vibe-vol2'
              title='The Kings Room'
              target='_blank'
            >
              The Kings Room
            </a>{' '}
            ·{' '}
            <a
              href='just-another-vibe-vol2'
              title='Just another vibe vol.2'
              target='_blank'
            >
              Just another vibe vol.2
            </a>
          </div>
        </article>
        <article>
          <iframe
            className={styles.iframe}
            scrolling='no'
            frameborder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1738567425&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
          <div>
            <a
              href='https://soundcloud.com/thekingsroom1'
              title='The Kings Room'
              target='_blank'
            >
              The Kings Room
            </a>{' '}
            ·{' '}
            <a
              href='https://soundcloud.com/thekingsroom1/just-another-vibe-vol1'
              title='Just another vibe vol.1'
              target='_blank'
            >
              Just another vibe vol.1
            </a>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
