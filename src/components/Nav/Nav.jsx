import Logo from '../Logo';
import styles from './Nav.module.scss';

export default function Nav({ children, active }) {
  return (
    <nav className={styles['nav']}>
      <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
        <div className={styles['nav-logo']}>
          <Logo />
        </div>

        {children}
      </ul>
    </nav>
  );
}
