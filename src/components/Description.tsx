import React, { useState } from 'react';

const maxLengthDefaultValue = 150;

interface IProp {
    text: string;
    maxLength?: number;
}
const Description: React.FC<IProp> = ({ text, maxLength = maxLengthDefaultValue }) => {
    const [isVisible, setIsVisible] = useState(false);
    const desc = text.length > maxLength && !isVisible ? text.substr(0, maxLength) + '...' : text;
    return (
        <>
            {desc}
            {text.length > 150 && (
                <div>
                    <button onClick={() => setIsVisible(prevState => !prevState)}>
                        {isVisible ? 'hide details' : 'show details'}
                    </button>
                </div>
            )}
        </>
    );
};

export default Description;
