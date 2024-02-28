import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form } from "antd";
import {
  DemoFormFooterButtons,
  DemoFormStep1,
  DemoFormStep2,
  DemoFormStep3,
} from "./libs";
import styles from "./styles.module.css";

export const DemoForm = () => {
  const [step, setStep] = useState(1);
  const methods = useForm();
  const { watch } = methods;

  const onSubmit = () => {
    const data = watch();

    console.log(data);
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
            <>final</>
          )}
        </Form>

        <DemoFormFooterButtons
          setStep={setStep}
          step={step}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </div>
  );
};
