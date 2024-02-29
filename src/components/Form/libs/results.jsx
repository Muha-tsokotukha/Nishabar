import { Button } from "antd";

export const DemoFormResults = ({ result, isLoading, setStep }) => {
  if (isLoading) return <p>Анализируем, пожалуйста подождите</p>;

  const retry = () => setStep(1);

  return (
    <div>
      <p>{result}</p>
      <Button type="primary" onClick={retry}>
        &#x21bb;
      </Button>
    </div>
  );
};
