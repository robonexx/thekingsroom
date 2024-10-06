import Hero from "../../components/Hero";
/* import SoundCloud from '../../components/SoundCloud'; */
import styles from "./Home.module.scss";
import Gridlines from "../../components/Animations/Gridlines";

const Home = () => {
  return (
    <div className={styles.home}>
      <Gridlines />
      <Hero />
      <section className={styles.section}>
        <h2>Latest from Kingsroom</h2>
        {/*  <article>
          <SoundCloud url='https%3A//api.soundcloud.com/tracks/1741890039&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' height={420} />
        </article> */}
        <article>
          <iframe
            className={styles.iframe}
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1741890039&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
          <div>
            <a
              href='https://soundcloud.com/thekingsroom1/just-another-vibe-vol2'
              title='The Kings Room'
              target='_blank'
            >
              The Kings Room · Just another vibe vol.2
            </a>{" "}
          </div>
        </article>
        <article>
          <iframe
            className={styles.iframe}
            scrolling='no'
            frameBorder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1738567425&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
          <div>
            <a
              href='https://soundcloud.com/thekingsroom1'
              title='The Kings Room'
              target='_blank'
            >
              The Kings Room - Just another vibe vol.1
            </a>{" "}
            ·{" "}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
