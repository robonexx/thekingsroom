import styles from './NavBtn.module.scss'

const NavButton = ({ handleClick, navActive }) => {
    return (
        
        <div className={` ${styles.navBtn} ${navActive ? styles.open : styles.navBtn} `} onClick={handleClick} >
                    <div className={styles.line}></div>
                </div>
           
     );
}
 
export default NavButton;