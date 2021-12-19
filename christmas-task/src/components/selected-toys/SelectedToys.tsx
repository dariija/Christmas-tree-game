import React from "react";
import T_ToyCard from "../../types/T_ToyCard";
import SelectedToyCard from "../cards/SelectedToyCard";


type Props = {
    toysData: T_ToyCard[], 
    selectedToysNumbers: string[]
}

export default function SelectedToys( {toysData, selectedToysNumbers}: Props) {
    const selectedToys = toysData.filter( toy => {
        for (let i = 0;  i < selectedToysNumbers.length; i++) {
            if( toy.num === selectedToysNumbers[i]) return true
        }
    });

    return (
        <div className="selected-toys">
            <p className="selected-toys__title">Toys</p>
            <div className="selected-toys__content">
                {selectedToys.map( (toy, index) => <SelectedToyCard quantity={toy.count || ''} num={toy.num || ''} key={index} />)}
            </div>
        </div>
    )
}