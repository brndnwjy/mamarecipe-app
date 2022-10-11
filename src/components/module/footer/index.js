import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`mt-5 d-flex flex-column align-items-center justify-content-center ${styles.footer}`}>
      <h1 className={`my-5 ${styles.jargon}`}>Eat, Cook, Repeat</h1>
      <h4 className={`my-3 ${styles.tagline}`}>Share your best recipe by uploading here!</h4>
      <div className={`my-3 d-flex justify-content-between col-8 col-md-4 ${styles['footer-link']}`}>
        <span>Product</span>
        <span>Company</span>
        <span>Learn More</span>
        <span>Get in Touch</span>
      </div>
      <span className={`container mb-5 d-flex justify-content-center justify-content-md-end col-12 ${styles.cr}`}>&#169;brndnwjy</span>
    </footer>
  );
};

export default Footer;
