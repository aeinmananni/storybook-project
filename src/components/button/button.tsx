import { ButtonHTMLAttributes } from "react";
import { VarientType } from "./model";
import { useChangeBackgroundColor } from "./hooks";
type ButtonType = {
  varient?: VarientType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ varient, ...props }: ButtonType) {
  const { backgroundColor } = useChangeBackgroundColor(varient);
  return (
    <button
      {...props}
      className={`${backgroundColor} text-white py-1 w-full rounded-md duration-500 active:scale-90 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
