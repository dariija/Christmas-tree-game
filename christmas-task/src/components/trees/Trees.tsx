import React from "react";
import ChoiceCard from "../cards/ChoiceCard";

export default function Trees () {
    const cardsType = 'tree';
    const imgQuantity = 6;

    return (
        <div className="trees">
            <p className="trees__title ">Choose tree</p>
            <div className="trees__content">
                { Array.from(Array(imgQuantity).keys()).map( (value) => <ChoiceCard name={cardsType} num={value} key={value.toString()}/>) }
            </div>
        </div>
    )
}