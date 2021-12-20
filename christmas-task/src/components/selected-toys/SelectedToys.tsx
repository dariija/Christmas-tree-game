import React from 'react';
import TToyCard from '../../types/TToyCard';
import SelectedToyCard from '../cards/SelectedToyCard';

type Props = {
    toysData: TToyCard[];
    selectedToysNumbers: string[];
};

export default function SelectedToys({ toysData, selectedToysNumbers }: Props) {
    const selectedToys = toysData.filter((toy) => {
        for (let i = 0; i < selectedToysNumbers.length; i += 1) {
            if (toy.num === selectedToysNumbers[i]) return true;
        }
        return false;
    });

    return (
        <div className="selected-toys">
            <p className="selected-toys__title">Toys</p>
            <div className="selected-toys__content">
                {selectedToys.map((toy, index) => (
                    <SelectedToyCard quantity={toy.count || ''} num={toy.num || ''} key={index.toString()} />
                ))}
            </div>
        </div>
    );
}
