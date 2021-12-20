import React from 'react';

type Props = {
    className: string;
    text: string;
    handleChange: () => void;
};

export default function Button({ className, text, handleChange }: Props) {
    return (
        <button className={`${className}`} onClick={handleChange} type="button">
            {text}
        </button>
    );
}
