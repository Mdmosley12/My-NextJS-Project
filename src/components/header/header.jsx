import Link from "next/link";
import styles from "/styles/Header.module.css";

export const Header = () => {
  return (
    <header id={styles.header}>
      <div id={styles.logoBox}>
        <h3 id={styles.logo}>Logo</h3>
      </div>
      <nav id={styles.nav}>
        <Link className={styles.nav_button} href="/">
          Home
        </Link>
        <Link className={styles.nav_button} href="/events">
          Events
        </Link>
        <Link className={styles.nav_button} href="/about-us">
          About Us
        </Link>
      </nav>
      <div id={styles.signUpAndSearchBox}>
        <h3 id={styles.signUpAndSearch}>Login/SignUp & Search Buttons</h3>
      </div>
    </header>
  );
};
