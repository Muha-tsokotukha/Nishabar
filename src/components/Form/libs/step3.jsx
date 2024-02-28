import { useFormContext } from "react-hook-form";
import { Form, Input } from "antd";

export const DemoFormStep3 = () => {
  const { register } = useFormContext();

  return (
    <>
      <Form.Item label="asdfsdf">
        <Input placeholder="asdfasd" {...register("asdasd")} />
      </Form.Item>
    </>
  );
};
