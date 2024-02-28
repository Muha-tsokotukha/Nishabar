import { DemoForm } from "../../components";
import styles from "./styles.module.css";

export const FeaturesDemoPage = () => {
  return (
    <main className={styles.demo}>
      <h1 className={styles.demo_title}>
        Пройдите анкету и получите анализ товаров и ниш рынка
      </h1>

      <DemoForm />
    </main>
  );
};
