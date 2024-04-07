import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// styles
import styles from './NavItem.module.scss';

const NavItem = ({ title, path, id, i }) => {
  return (
    <motion.li
      className={styles.nav_item}
      key={id}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }}
    >
      <Link className={styles['nav_link']} to={path}>
        {title}
      </Link>
    </motion.li>
  );
};

export default NavItem;
