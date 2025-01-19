import { Meta } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

export const Success = () => {
  return <Button varient="success">Success</Button>;
};
export const Error = () => {
  return <Button varient="error">Error</Button>;
};
export const Disable = () => {
  return <Button varient="disabled">Disable</Button>;
};
export const Primary = () => {
  return <Button varient="primary">Primary</Button>;
};
