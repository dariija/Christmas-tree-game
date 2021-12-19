import React from "react";
import FairlyLight from "../cards/FairlyLight";

export default function FairyLights () {
    const coloursLights  = ['multi', 'red', 'yellow', 'green', 'blue'];

    return (
        <div className="fairy-lights">
            <p className="fairy-lights__title">Fairy-light</p>
            <div className="fairy-lights__content">
            { coloursLights.map( (colour, index) => <FairlyLight colour={colour} key={index}/>) }
            </div>

            <label className="switch">
                <input className="switch__checkbox" type="checkbox" />
                <span className="switch__slider"></span>
            </label>
        </div>
    )
}