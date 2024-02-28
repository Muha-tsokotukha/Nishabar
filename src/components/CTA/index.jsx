import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const CTA = () => {
  return (
    <section className={styles.cta}>
      <h1 className={styles.cta_header}>nishabar</h1>
      <h3 className={styles.cta_description}>
        уникальный инструмент анализа ниш рынка
      </h3>

      <Link to="/demo" className={styles.cta_btn}>
        Попробовать бесплатно
      </Link>
    </section>
  );
};
