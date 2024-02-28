import { Button } from "antd";

export const DemoFormFooterButtons = ({ step, onSubmit, setStep }) => {
  const nextStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <div style={{ marginTop: "64px" }}>
      <Button
        onClick={prevStep}
        style={{
          marginRight: "16px",
        }}
        disabled={step === 1 ? true : false}
      >
        Назад
      </Button>

      <Button onClick={step === 3 ? onSubmit : nextStep} type="primary">
        {step === 3 ? "Сохранить" : "Дальше"}
      </Button>
    </div>
  );
};
