import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '../Logo';
import Nav from '../Nav/Nav'
import NavItem from '../Nav/NavItem';
import MenuBtn from '../menuBtn/MenuBtn';
import { navData } from '../../assets/Data';

const Header = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

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
