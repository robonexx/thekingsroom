import { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlinePersonPin, MdOutlineAlternateEmail } from 'react-icons/md';

import styles from './Header.module.scss';
import Logo from '../Logo';
import Nav from '../nav/Nav';
import NavItem from '../nav/NavItem';
import MenuBtn from '../menuBtn/MenuBtn';
import { navData } from '../../assets/Data';

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <Logo />
      </div>
      <MenuBtn active={active} setActive={setActive} />
      <Nav active={active}>
        {navData.map(({ title, path, id }, i) => (
          <NavItem title={title} path={path} key={id} i={i} />
        ))}
      </Nav>
    </header>
  );
};

export default Header;
