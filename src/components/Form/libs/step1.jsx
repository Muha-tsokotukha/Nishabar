import { useFormContext } from "react-hook-form";
import { Form, Input } from "antd";
import { MaskedInput } from "antd-mask-input";

export const DemoFormStep1 = () => {
  const { register } = useFormContext();

  return (
    <>
      <Form.Item label="Имя">
        <Input
          placeholder="Например Маргулан Сейсембаев"
          {...register("name")}
        />
      </Form.Item>

      <Form.Item label="Телефон">
        <MaskedInput mask="+7 (700) 000 00 00" {...register("phone")} />
      </Form.Item>

      <Form.Item label="Страна">
        <Input placeholder="Например Казахстан" {...register("country")} />
      </Form.Item>
    </>
  );
};
