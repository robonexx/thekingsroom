import { Link } from 'react-router-dom';
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link className={styles.logo} to='/'>
      <img src='/tkr-no-bg.png' alt='the kings room logo' />
    </Link>
  );
};

export default Logo;
