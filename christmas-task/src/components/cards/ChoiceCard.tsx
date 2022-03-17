import React from 'react';

type Props = {
    num: string;
    src: string;
    settings: {
        name: string;
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default function ChoiceCard({ num, src, settings }: Props) {
    const handlerChange = ({ target }: { target: HTMLInputElement }) => {
        settings.setValue(target.value);
    };

    return (
        <label className={`${settings.name}-card`} htmlFor={`${settings.name}_${num}`}>
            <input
                className={`${settings.name}-card__radio`}
                id={`${settings.name}_${num}`}
                value={num}
                type="radio"
                name={`${settings.name}-choice`}
                onChange={handlerChange}
            />
            <img className={`${settings.name}-card__img`} src={src} alt={settings.name} />
        </label>
    );
}
