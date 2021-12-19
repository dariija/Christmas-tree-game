import React from "react";

type Props = {
    name: string,
    num: number,
}

export default function ChoiceCard ( {name, num}: Props) {
    const ext = name === 'background'? 'jpg' : 'png';
    const src = name === 'decorated-tree'? '' : `../../assets/${name}/${num}.${ext}`;

    return (
        <label className={`${name}-card`} htmlFor={`${name}_${num}`}>
            <input className={`${name}-card__radio`} id={`${name}_${num}`} value={num} type="radio" name={`${name}-choice`} />
            <img className={`${name}-card___img`} src={src} alt={name} />
        </label>        
    )
}