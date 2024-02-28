import styles from "./styles.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footer_content}>
        <div className={styles.footer_links}>
          <a href="#whyus">Почему Nishabar</a>
          <a href="#">Демо</a>
        </div>

        <div className={styles.footer_social}>
          <a href="tel:+77479056500">+7 747 905 65 00</a>
          <a
            href="https://t.me/turkibalasy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../assets/telegram.png" alt="telegram link" />
            Telegram
          </a>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; {year} Nishabar. Все права защищены.</p>
      </div>
    </footer>
  );
};
