import { useFormContext } from "react-hook-form";
import { Form, Input } from "antd";

export const DemoFormStep2 = () => {
  const { register } = useFormContext();

  return (
    <>
      <Form.Item label="Стартовый капитал">
        <Input placeholder="Например 5млн тенге" {...register("seedMoney")} />
      </Form.Item>
    </>
  );
};
