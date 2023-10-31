import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <p className={styles.logo}>R.</p>
      <ul className={styles.headerLinks}>
        <li>Home</li>
        <ul>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </ul>
      <i className="ri-menu-3-line" id={styles.menuIcon}></i>
    </header>
  );
}

export default Header;
