'use client';
import React, { useState, useEffect, useRef } from 'react';

import NavButton from '../NavButton/';

// styles
import styles from './Navbar.module.scss';

 const Nav  = (props) => {
  const [click, setClick] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
    setNavActive(!click);
  };

  const navRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.scrollY;

      const handleScroll = () => {
        let currentScrollPos = window.scrollY;

        if (prevScrollpos > currentScrollPos) {
          navRef.current.classList.add(`${styles.navbar && styles.bgorange}`);
          navRef.current.classList.remove(`${styles.hide}`);
        } else {
          navRef.current.classList.add(`${styles.hide}`);
          navRef.current.classList.remove(
            `${styles.navbar && styles.bgorange}`
          );
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <button className={styles.menu_icon} onClick={handleClick}>
        <NavButton navActive={navActive} />
      </button>
      <ul
        className={
          click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`
        }
      >
        {props.children}
      </ul>
    </nav>
  );
}

export default Nav
