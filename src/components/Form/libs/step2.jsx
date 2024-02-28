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

      <Form.Item label="Склад">
        <Controller
          control={control}
          name="store"
          render={({ field }) => (
            <Input placeholder="Например 100 квадратных метров" {...field} />
          )}
        />
      </Form.Item>

      <Form.Item label="Ваши интересы и хобби">
        <Controller
          control={control}
          name="hobbies"
          render={({ field }) => (
            <Input placeholder="Например спорт, электроника" {...field} />
          )}
        />
      </Form.Item>
    </>
  );
};
