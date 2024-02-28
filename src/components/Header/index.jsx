import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="assets/Logo.png"
        alt="nishabar logo"
        width="64px"
        height="64px"
        draggable="false"
      />

      <nav className={styles.header_links}>
        <a href="#">Почему Nishabar</a>
        <a href="#">Цены</a>
        <a href="#">Контакты</a>
      </nav>

      <a href="#" className={styles.header_btn__demo}>
        Демо
      </a>
    </header>
  );
};
