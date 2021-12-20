import React from 'react';
import ToyCard from '../../cards/ToyCard';
import TToyCard from '../../../types/TToyCard';

type Props = {
    toysData: TToyCard[];
    select: {
        value: string[];
        setValue: React.Dispatch<React.SetStateAction<string[]>>;
        setLogoValue: React.Dispatch<React.SetStateAction<number>>;
    };
};

export default function ToySection({ toysData, select }: Props) {
    return (
        <section className="toys">
            {toysData.length ? (
                toysData.map((toyData, index) => <ToyCard toyData={toyData} select={select} key={index.toString()} />)
            ) : (
                <p className="no-matches">Sorry, no matches found</p>
            )}
        </section>
    );
}
