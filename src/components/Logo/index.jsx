import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src='/tkr-no-bg.png' alt='the kings room logo' />
    </div>
  );
};

export default Logo;
