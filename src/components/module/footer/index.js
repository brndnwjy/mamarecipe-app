import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`mt-5 d-flex flex-column align-items-center justify-content-center ${styles.footer}`}>
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
