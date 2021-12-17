import React from 'react'
import { useEffect, useState } from 'react'

import T_ToyCard from '../../types/T_ToyCard'
import images from '../../data/images'
import missingImg from '../../assets/svg/missing.svg'

type Props = {
    toyData: T_ToyCard,
    select: {
        value: string[]
        setValue: React.Dispatch<React.SetStateAction<string[]>>,
        setLogoValue: React.Dispatch<React.SetStateAction<number>>
    }
}

ToyCard.defaultProps = {
    num: '-',
    name: '-',
    count: '-',
    year: '-',
    shape: '-',
    color: '-',
    size: '-',
    favorite: '-'
}


export default function ToyCard({toyData, select}: Props) {
    const [toyCardWarning, setToyCardWarning] = useState<boolean>(false);

    const showWarning = (event: any) => {
        const hasToy = select.value.includes(event.currentTarget.htmlFor);
        if(select.value.length === 20 && !hasToy) {
            setToyCardWarning(true);
        }
    }

    const hideWarning = () => {
        setToyCardWarning(false);
    }

    const handlerChange = ({target}: {target: HTMLInputElement}) => {
        if (target.checked) {
            if (select.value.length < 20) {
                select.setValue([...select.value, ...[target.id]]);
                toyData.selected = true;
            }
        } else {
            const selectedToysWithoutThis = select.value.filter( (selected) => selected !== target.id);
            select.setValue(selectedToysWithoutThis);
            toyData.selected = false
        };
    }

    useEffect(() => {select.setLogoValue(select.value.length);});

    return (
        <div className="toy-card">
            <p className="toy-card__title">{toyData.name}</p>
            <div className="toy-card__content">
                <img className="toy-card__picture" src={toyData.num? images[toyData.num] : missingImg}></img>
                <ul className="toy-card__info toy-info">
                    <li className="toy-info__count toy-info__item">Quantity: {toyData.count}</li>
                    <li className="toy-info__purchase-year toy-info__item">Year of purchase: {toyData.year}</li>
                    <li className="toy-info__shape toy-info__item">Shape: {toyData.shape}</li>
                    <li className="toy-info__colour toy-info__item">Colour: {toyData.color}</li>
                    <li className="toy-info__size toy-info__item">Size: {toyData.size}</li>
                    <li className="toy-info__favourite toy-info__item">Favourite: {toyData.favorite? 'yes' : 'no'}</li>
                </ul>
            </div>

            <div className={`toy-card-warning ${toyCardWarning? "show" : "hide"}`}>
                <p className="toy-card-warning__text">Sorry, all slots are full</p>
            </div>

            <label className="bookmark" htmlFor={toyData.num} onMouseMove={showWarning} onMouseOut={hideWarning}>
                <input className="bookmark__checkbox" checked={select.value.includes(`${toyData.num}`)} id={toyData.num} name="" type="checkbox" onChange={handlerChange}/> 
                <span className="bookmark__view"></span>
            </label>
        </div>
    )
}
