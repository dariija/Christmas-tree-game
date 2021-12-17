import React from "react";

type Props = {
    colourOption: string,
    colours: {
        value: {
            [key: string]: boolean;
        };
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>;
    }
}

export default function ColourFilterItem({colourOption, colours}: Props) {

    const handleChange = ({target}: {target: HTMLInputElement}) => {
        const colour = target.value;
        const value = target.checked? true : false;
        colours.setValue({...colours.value, ...{[colour]: value}})
    }

    return (
        <label className="colour-filter__colour-group" htmlFor={`filter_${colourOption}`}>
            <input className="colour-filter__checkbox" checked={colours.value[colourOption]} id={`filter_${colourOption}`} value={colourOption} type="checkbox" name="" onChange={handleChange}/>
            <span className={`colour-filter__colour-item colour-filter__colour-item_${colourOption}`}></span>
        </label>
    )
}