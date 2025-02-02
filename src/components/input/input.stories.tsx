import { Meta } from "@storybook/react";
import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
};

export default meta;

export const InputDefault = () => {
  return (
    <Input
      label="عنوان"
      status="default"
      styles={{ parentClassName: "!w-1/6" }}
    />
  );
};

export const InputSuccess = () => {
  return <Input label="عنوان" status="success" />;
};

export const InputError = () => {
  return <Input label="عنوان" status="error" />;
};
export const InputWarning = () => {
  return <Input label="عنوان" status="warning" />;
};

//ما میتوانیم در استوری بوک عنوان استوری های خود را تغییر دهیم

InputSuccess.storyName = "Input Access";

//میتوانیم ترتیب نمایش استوری هارا تغییر دهیم
