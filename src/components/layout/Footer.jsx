import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href='#'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href=''>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href=''>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;