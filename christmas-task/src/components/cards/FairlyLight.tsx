import React from 'react';

type Props = {
    colour: string;
};

export default function FairlyLight({ colour }: Props) {
    return (
        <label className="fairy-light" htmlFor={`fairy_light_${colour}`}>
            <input
                className="fairy-light__radio"
                id={`fairy_light_${colour}`}
                value={colour}
                type="radio"
                name="fairy-light-choice"
            />
            <span className={`fairy-light__view fairy-light__view_${colour}`} />
        </label>
    );
}
