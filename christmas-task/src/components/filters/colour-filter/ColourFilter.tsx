import React from "react"
import ColourFilterItem from "./colour-filter-item/ColourfilterItem"

type Props = {
    coloursOptions: Set<string>,
    colours: {
        value: {
            [key: string]: boolean;
        };
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>;
    }
}
export default function ColourFilter({coloursOptions, colours}: Props) {

    return (
        <div className="colour-filter">
            <p className="colour-filter__title">Colour</p>
            <div className="colour-filter__colours">
                {Array.from(coloursOptions).map( (colour, index) => <ColourFilterItem colourOption={colour} colours={colours} key={index}/>)}
            </div>
        </div>
    )
}