import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import Hero from "../../components/Hero";
import styles from "./Home.module.scss";
import Gridlines from "../../components/Animations/Gridlines";

const Home = () => {
  const [soundCloudPosts, setSoundCloudPosts] = useState([]);

  useEffect(() => {
    const fetchSoundCloudPosts = async () => {
      const q = query(
        collection(db, "soundcloudPosts"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      setSoundCloudPosts(posts);
    };

    fetchSoundCloudPosts();
  }, []);

  return (
    <div className={styles.home}>
      <Gridlines />
      <Hero />
      <section className={styles.section}>
        <h2>Latest from Kingsroom</h2>
        {soundCloudPosts.map((post) => (
          <article key={post.id}>
            <iframe
              className={styles.iframe}
              scrolling='no'
              frameBorder='no'
              allow='autoplay'
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${post.trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            ></iframe>
            <div>
              <a
                href='https://soundcloud.com/thekingsroom1'
                title='The Kings Room'
                target='_blank'
              >
                {post.title}
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Home;
