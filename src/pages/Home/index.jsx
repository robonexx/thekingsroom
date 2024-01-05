import Hero from '../../components/Hero';
import styles from './Home.module.scss';


const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
