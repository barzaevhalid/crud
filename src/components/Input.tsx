import React, { useState } from 'react';

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
    innerClassName?: string;
    title?: string;
    defaultValue?: string;
    onInputValueChange: (text: string) => void;
}
const Input: React.FC<IProp> = ({ onInputValueChange, innerClassName, value, defaultValue, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
        onInputValueChange(e.target.value);
    };
    return <input value={innerValue} onChange={handleChange} className={innerClassName} {...rest} />;
};

export default Input;
