import React from 'react';

interface IProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    innerClassName: string;
    children: React.ReactNode;
}
const Button: React.FC<IProp> = ({ innerClassName, children, ...rest }) => {
    return (
        <button className={innerClassName} {...rest}>
            {children}
        </button>
    );
};

export default Button;
