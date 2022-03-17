import React from 'react';

type Props = {
    colour: string;
    settings: {
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default function FairlyLight({ colour, settings }: Props) {
    const handlerChange = ({ target }: { target: HTMLInputElement }) => {
        settings.setValue(target.value);
    };

    return (
        <label className="fairy-light" htmlFor={`fairy_light_${colour}`}>
            <input
                className="fairy-light__radio"
                id={`fairy_light_${colour}`}
                value={colour}
                type="radio"
                name="fairy-light-choice"
                onChange={handlerChange}
                checked={settings.value === colour}
            />
            <span className={`fairy-light__view fairy-light__view_${colour}`} />
        </label>
    );
}
