import styles from "/styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer id={styles.footer}>
      <p id={styles.footerTagline}>
        {" "}
        2023 Time to Code - A project created with NextJS
      </p>
    </footer>
  );
};
