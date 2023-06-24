import React, { useState } from "react";
import Button from "../Button";
import s from "./description.module.css";

interface DescriptionProp {
    text: string;
    maxLength?: number;
}

const Description = ({ text, maxLength = 150 }: DescriptionProp) => {
    const [isVisible, setIsVisible] = useState(false);

    const onChangeVisible = () => {
        setIsVisible(prevState => !prevState);
    };

    const desc = text.length > maxLength && !isVisible ? text.substr(0, maxLength) + "..." : text;

    return (
        <p>
            {desc}
            {text.length > 150 && (
                <Button onClick={onChangeVisible} innerClassName={s.showText}>
                    {isVisible ? "<<<" : ">>>"}
                </Button>
            )}
        </p>
    );
};

export default Description;
