import { useFormContext, Controller } from "react-hook-form";
import { Form, Input } from "antd";

export const DemoFormStep2 = () => {
  const { control } = useFormContext();

  return (
    <>
      <Form.Item label="Стартовый капитал">
        <Controller
          control={control}
          name="seedMoney"
          render={({ field }) => (
            <Input placeholder="Например 5млн тенге" {...field} />
          )}
        />
      </Form.Item>
    </>
  );
};
