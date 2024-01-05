import { useState, useCallback } from 'react';
import styles from './Navbar.module.scss';

export default function NavItem({ title, url, icon, children }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    /* if (window.innerWidth < 300) {
      setDropdown(true);
    } else {
      setDropdown(true);
    } */
    setDropdown((prev) => !prev);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onTouchS = () => {
    if (window.innerWidth < 300) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
    setDropdown((prev) => !prev);
  };

  const onTouchE = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  /* const { events } = useRouter(); */
  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  /* useEffect(() => {

    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]); */

  return (
    <li
      className={styles.nav_item}
      key={title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchS}
      onTouchEnd={onTouchE}
    >
      <a href={url} onClick={closeMobileMenu} className={`${styles.nav_links}`}>
        {icon ? <span className={`${styles.link_icon}`}>{icon}</span> : ''}
        <span className={styles.link_title}>{title}</span>
      </a>
      {dropdown && children}
      {click && children}
    </li>
  );
}
