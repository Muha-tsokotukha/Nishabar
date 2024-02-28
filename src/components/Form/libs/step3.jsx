import { useFormContext, Controller } from "react-hook-form";
import { Form, Input } from "antd";

export const DemoFormStep3 = () => {
  const { control } = useFormContext();

  return (
    <>
      <Form.Item label="Ваше отношение к экологии">
        <Controller
          control={control}
          name="ecology"
          render={({ field }) => (
            <Input
              placeholder="Например без разницы, озабочен и т.д."
              {...field}
            />
          )}
        />
      </Form.Item>

      <Form.Item label="Готовность к конкуренции">
        <Controller
          control={control}
          name="competition"
          render={({ field }) => (
            <Input
              placeholder="Например без разницы, не могу, могу и т.д."
              {...field}
            />
          )}
        />
      </Form.Item>
    </>
  );
};
