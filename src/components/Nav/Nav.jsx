import Logo from '../Logo';
import styles from './Nav.module.scss';

const Nav = ({ children, active }) => {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
        {children}
        <div className={styles['nav-logo']}>
          <Logo />
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
