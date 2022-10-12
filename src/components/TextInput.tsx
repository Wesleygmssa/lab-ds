import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children?: ReactNode;
}
function TextInputRoot(props: TextInputRootProps) {
  <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full outline-none focus-within:ring-2 ring-cyan-300">
    {props.children}
  </div>;
}

// function TextInputIcon() {}
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      )}
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
};
