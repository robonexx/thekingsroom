import React, { useState, useEffect, useCallback } from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const NavItem = ({ title, url, icon, children, navActive, closeMobileMenu }) => {
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

  const closeMobileMenuAndReset = () => {
    closeMobileMenu();
    setDropdown(false);
  };

  return (
    <li
      className={`${styles.nav_item} ${navActive ? styles.navActive : ''}`}
      key={title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchS}
      onTouchEnd={onTouchE}
    >
      <NavLink to={url} onClick={closeMobileMenuAndReset} className={`${styles.nav_links}`}>
        {icon ? <span className={`${styles.link_icon}`}>{icon}</span> : ''}
        <span className={styles.link_title}>{title}</span>
      </NavLink>
      {dropdown && children}
    </li>
  );
}

export default NavItem