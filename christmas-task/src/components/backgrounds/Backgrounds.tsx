import React from 'react';
import ChoiceCard from '../cards/ChoiceCard';
import background from '../../data/backgrounds';

type Props = {
    settings: {
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default function Backgrounds({ settings }: Props) {
    const cardsType = 'background';

    return (
        <div className="backgrounds">
            <p className="backgrounds__title">Choose tree</p>
            <div className="backgrounds__content">
                {Object.entries(background).map(([num, src]) => (
                    <ChoiceCard name={cardsType} num={num} key={num} src={src} settings={settings} />
                ))}
            </div>
        </div>
    );
}
