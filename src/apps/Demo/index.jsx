import { useState } from "react";
import { DemoForm } from "../../components";
import styles from "./styles.module.css";

export const FeaturesDemoPage = () => {
  const [step, setStep] = useState(1);

  return (
    <main className={styles.demo}>
      <h1 className={styles.demo_title}>
        {step === -1
          ? "Исходя из ваших ответов, мы предлагаем следующую информацию."
          : "Пройдите анкету и получите анализ товаров и ниш рынка"}
      </h1>

      <DemoForm step={step} setStep={setStep} />
    </main>
  );
};
