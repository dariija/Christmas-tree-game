import React from "react";
import ChoiceCard from "../cards/ChoiceCard";

export default function Backgrounds () {
    const cardsType = 'background';
    const bgQuantity = 10;

    return (
        <div className="backgrounds">
            <p className="backgrounds__title">Choose tree</p>
            <div className="backgrounds__content">
                { Array.from(Array(bgQuantity).keys()).map( (value) => <ChoiceCard name={cardsType} num={value} key={value.toString()}/>) }
            </div>
        </div>
    )
}
