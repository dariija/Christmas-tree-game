import React from 'react';
import TToyCard from '../../types/TToyCard';
import SelectedToyCard from '../cards/SelectedToyCard';

type Props = {
    toysData: TToyCard[];
    selectedToysNumbers: string[];
};

export default function SelectedToys({ toysData, selectedToysNumbers }: Props) {
    let selectedToys: TToyCard[] = [];
    if (selectedToysNumbers.length === 0) {
        selectedToys = toysData.slice(0, 20);
    } else {
        selectedToys = toysData.filter((toy) => {
            for (let i = 0; i < selectedToysNumbers.length; i += 1) {
                if (toy.num === selectedToysNumbers[i]) return true;
            }
            return false;
        });
    }

    // const [toyQuantity, setToyQuantity] = useState(quantity);
    // useEffect(() => setToyQuantity(test.length));

    return (
        <div className="selected-toys">
            <p className="selected-toys__title">Toys</p>
            <div className="selected-toys__content">
                {selectedToys.map((toy, index) => (
                    <SelectedToyCard
                        quantity={toy.count || ''}
                        num={toy.num || ''}
                        key={index.toString()}
                        id={`selected_toy_card_${toy.num}`}
                    />
                ))}
            </div>
        </div>
    );
}
