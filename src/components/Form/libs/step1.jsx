import { useFormContext, Controller } from "react-hook-form";
import { Form, Input } from "antd";
import { MaskedInput } from "antd-mask-input";

export const DemoFormStep1 = () => {
  const { control } = useFormContext();

  return (
    <>
      <Form.Item label="Имя">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input placeholder="Например Маргулан Сейсембаев" {...field} />
          )}
        />
      </Form.Item>

      <Form.Item label="Телефон">
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <MaskedInput mask="+7 (700) 000 00 00" {...field} />
          )}
        />
      </Form.Item>

      <Form.Item label="Страна">
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <Input placeholder="Например Казахстан" {...field} />
          )}
        />
      </Form.Item>
    </>
  );
};
