import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Form/Button",
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    onClick: () => console.log("My Button"),
    className: "w-1/6",
    varient: "primary",
    children: "Primary",
  },
};

export const LongPrimary: StoryObj<typeof Button> = {
  args: {
    ...Primary.args,
    children: <h1>my Long Button</h1>,
  },
};

export const Success = () => {
  return <Button varient="success">Success</Button>;
};
export const Error = () => {
  return <Button varient="error">Error</Button>;
};
export const Disable = () => {
  return <Button varient="disabled">Disable</Button>;
};
