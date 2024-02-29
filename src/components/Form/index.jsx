import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "antd";
import { getNicheAndProductsFromAi } from "../../store";
import {
  DemoFormFooterButtons,
  DemoFormResults,
  DemoFormStep1,
  DemoFormStep2,
  DemoFormStep3,
} from "./libs";
import styles from "./styles.module.css";

export const DemoForm = ({ step, setStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const methods = useForm();
  const { watch } = methods;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const data = watch();
      setStep(-1);

      const formattedString = Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");

      const message = await getNicheAndProductsFromAi(`
        Пользователь предоставил такие данные
        ${formattedString}.
        Исходя из этих ответов очень кратко предложи ниши рынка и конкретные товары к ним на русском языке.
        не трать много токенов
      `);

      setResult(message);
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.demo_form}>
      <FormProvider {...methods}>
        <Form className={styles.demo_form__container} layout="vertical">
          {step === 1 ? (
            <DemoFormStep1 />
          ) : step === 2 ? (
            <DemoFormStep2 />
          ) : step === 3 ? (
            <DemoFormStep3 />
          ) : (
            <DemoFormResults
              result={result}
              isLoading={isLoading}
              setStep={setStep}
            />
          )}
        </Form>

        {step !== -1 && (
          <DemoFormFooterButtons
            setStep={setStep}
            step={step}
            onSubmit={onSubmit}
          />
        )}
      </FormProvider>
    </div>
  );
};
