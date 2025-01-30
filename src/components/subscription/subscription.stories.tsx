import { Meta } from "@storybook/react";
import { Success } from "../button/button.stories";
import { InputDefault } from "../input/input.stories";

const meta: Meta = {
  title: "Subscription",
};

export default meta;

export const DefaultSubscription = () => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Success />
      <InputDefault />
    </div>
  );
};
