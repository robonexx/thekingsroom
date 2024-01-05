import React, { useState, useEffect, useCallback } from 'react';
import styles from './Navbar.module.scss';

export default function NavItem({ title, url, icon, children }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
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

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

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
