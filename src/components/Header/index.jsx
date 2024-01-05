import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlinePersonPin, MdOutlineAlternateEmail } from 'react-icons/md';

import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import styles from './Header.module.scss';
import Logo from '../Logo';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Nav>
        <NavItem title='Home' url='/' icon={<AiOutlineHome />} />
        <NavItem title='About' url='/about' icon={<MdOutlinePersonPin />} />
        <NavItem
          title='Contact'
          url='/contact'
          icon={<MdOutlineAlternateEmail />}
        />
      </Nav>
      <div className={styles['logo-container']}>
        <Logo />
      </div>
      <div className={styles['search-container']}>search</div>
    </header>
  );
};

export default Header;
