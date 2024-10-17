import {forwardRef, useImperativeHandle, useRef} from "react";

export type CustomInput = {
  focus: () => void;
  clear: () => void;
};

export const CustomInput = forwardRef<CustomInput>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current?.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return <input type="text" className="custom-input" ref={inputRef} />;
});
