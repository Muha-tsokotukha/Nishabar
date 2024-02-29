import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="nishabar logo"
        width="64px"
        height="64px"
        draggable="false"
      />

      <nav className={styles.header_links}>
        <a href="#whyus">Почему Nishabar</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <Link to="/demo" className={styles.header_btn__demo}>
        Демо
      </Link>
    </header>
  );
};
