import React from 'react';
import ChoiceCard from '../cards/ChoiceCard';
import tree from '../../data/trees';

type Props = {
    settings: {
        name: string;
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default function Trees({ settings }: Props) {
    return (
        <div className="trees">
            <p className="trees__title ">Choose tree</p>
            <div className="trees__content">
                {Object.entries(tree).map(([num, src]) => (
                    <ChoiceCard num={num} key={num} src={src} settings={settings} />
                ))}
            </div>
        </div>
    );
}
