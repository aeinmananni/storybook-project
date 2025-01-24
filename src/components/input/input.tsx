import { forwardRef, InputHTMLAttributes } from "react";
import { StatusType } from "./model";
import { useChangeColorInput } from "./hook/hook";
type InputProps = {
  label?: string;
  status?: StatusType;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ status, ...props }, ref) => {
    const color = useChangeColorInput(status ?? "default");
    return (
      <div className="w-full flex flex-col gap-2  justify-center">
        <label style={{ color }} className="text-sm text-slate-400">
          {props.label}
        </label>
        <input
          style={{ outlineColor: color }}
          className={`border w-full py-1 px-3  focus:outline-2 outline-offset-4 rounded-md `}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
