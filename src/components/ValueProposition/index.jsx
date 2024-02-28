import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const valuePropositions = [
  {
    title: "Запуск",
    description:
      "Помогаем найти выгодные товары для выхода на маркетплейсы используя исскуственный интеллект",
  },
  {
    title: "Ваши отчеты. Ваши ответы",
    description:
      "Настройте свои отчеты, систематизируйте все ключевые показатели эффективности, и ответы, которые вам нужны, появятся",
  },
  {
    title: "Масштабируй свой бизнес",
    description:
      "Определили нишу и есть продажи? Увеличьте выручку анализируя новые товары и рынки",
  },
];

export const ValueProposition = () => {
  return (
    <section className={styles.value} id="whyus">
      <h2 className={styles.value_title}>Зачем и для чего нужен Nishabar?</h2>

      <section className={styles.value_list}>
        {valuePropositions.map(({ title, description }) => (
          <div key={title} className={styles.value_card}>
            <h2 className={styles.value_card__title}>{title}</h2>
            <p className={styles.value_card__description}>{description}</p>
          </div>
        ))}
      </section>

      <Link to="/demo" className={styles.cta_btn}>
        Попробовать бесплатно
      </Link>
    </section>
  );
};
