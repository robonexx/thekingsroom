import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import styles from "./Header.module.scss";
import Logo from "../Logo";
import Nav from "../Nav/Nav";
import NavItem from "../Nav/NavItem";
import MenuBtn from "../menuBtn/MenuBtn";
import { navData } from "../../assets/Data";
import { motion } from "framer-motion";
import Avatar from "../avatar/Avatar";

const Header = () => {
  const [active, setActive] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user details
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Handle authentication status changes
  useEffect(() => {
    const checkAuthStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
          setUser(user); // Store user details when authenticated
        } else {
          setAuthenticated(false);
          setUser(null); // Clear user details when not authenticated
        }
      });
    };
    checkAuthStatus();
  }, [auth]);

  // Close the menu when the route changes
  useEffect(() => {
    setActive(false);
  }, [location]);

  // Logout functionality
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        navigate("/");
        toast.success("Logged out successfully!");
      } catch (error) {
        toast.error("An error occurred while logging out. Please try again.");
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      <MenuBtn active={active} setActive={setActive} />
      <Nav active={active}>
        {navData.map(({ title, path, id }, i) => (
          <NavItem title={title} path={path} key={id} i={i} />
        ))}
        {/*      <motion.li className={styles.nav_item}>
          <Link className={styles["nav_link"]} to='/articles'>
            Articles
          </Link>
        </motion.li>
        {authenticated && user && (
          <>
            <motion.li className={styles.nav_item}>
              <Link className={styles["nav_link"]} to={`/myblogs/${user.uid}`}>
                My Blogs
              </Link>
            </motion.li>
            <motion.li className={styles.nav_item}>
              <Link className={styles["nav_link"]} to='/write'>
                Write
              </Link>
            </motion.li>
            <button
              onClick={handleLogout}
              className={`${styles.nav_item} ${styles.logout_btn}`}
            >
              <span className={styles["nav_link"]}>Logout</span>
            </button>
            <div className={styles.user}>
              <p>
                Logged in as: <span>{user.displayName || "Anonymous"}</span>
              </p>
              <Avatar
                src={user.photoURL || "../../assets/images/default-avatar.png"}
              />{" "}
            </div>
          </>
        )}
        {!authenticated && (
          <motion.li className={styles.nav_item}>
            <Link className={styles["nav_link"]} to='/sign-in'>
              Sign In
            </Link>
          </motion.li>
        )} */}
      </Nav>
    </header>
  );
};

export default Header;
