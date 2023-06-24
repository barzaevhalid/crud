import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    innerClassName: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ onClick, children, innerClassName, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} className={innerClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
