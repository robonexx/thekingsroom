// styles
import styles from './MenuBtn.module.scss';
import { motion } from 'framer-motion';
import { menuBtnAni } from '../Animations/MenuAnimations';
// eslint-disable-next-line react/prop-types
const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
  };

  return (
    <motion.div
      variants={menuBtnAni}
      animate={active ? 'animate' : 'initial'}
      className={`${styles.hamburger_wrapper} ${active ? styles.bg_color : ''}`}
      onClick={() => onClickHandler()}
    >
      <motion.div
        className={`${styles.hamburger} ${active ? `${styles.active}` : ''}`}
        id='hamburger'
      >
        <span>{active ? 'Close' : 'Menu'}</span>
      </motion.div>
    </motion.div>
  );
};

export default MenuBtn;
