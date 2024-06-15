// src/components/Navbar.js
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Bags</li>
        <li className={styles.navItem}>Travel</li>
        <li className={styles.navItem}>Accessories</li>
        <li className={styles.navItem}>Gifting</li>
        <li className={styles.navItem}>Jewelry</li>
      </ul>
    </nav>
  );
};

export default Navbar;
