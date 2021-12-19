import React from "react";
import images from '../../data/images'
import missingImg from '../../assets/svg/missing.svg'

type Props = {
    quantity: string,
    num: string
}

export default function SelectedToyCard ( {quantity, num}: Props) {

    return (
        <div className="selected-toys-card">
            { quantity? Array.from(Array(Number(quantity)).keys()).map( () => <img className="selected-toys-card__img" src={num? images[num] : missingImg}></img>): 
                        <img className="selected-toys-card__img" src={num? images[num] : missingImg}></img>
            }
            <span className="selected-toys-card__value">{quantity}</span>
        </div>
    )
}