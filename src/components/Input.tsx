import React, { useState } from "react";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  innerClassName?: string;
  defaultValue?: string;
  value?: string;
  onInputValueChange: (text: string) => void;
  onBlur?: () => void;
}
const Input = ({ onInputValueChange, innerClassName, value, defaultValue, onBlur, ...props }: InputProp) => {
  const [innerValue, setInnerValue] = useState<string>(value ?? defaultValue ?? "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onInputValueChange(e.target.value);
  };
  return <input value={innerValue} onChange={handleChange} onBlur={onBlur} className={innerClassName} {...props} />;
};

export default Input;
