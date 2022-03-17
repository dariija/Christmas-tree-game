import React from 'react';
import FairlyLightDecorPart from './FairlyLightDecorPart';

type Props = {
    colour: string;
};

export default function FairyLightDecor({ colour }: Props) {
    const partsQuantity = 7;
    const initialBulbsQuantity = 7;
    const interval = 100;

    return (
        <div className="fairly-light-decor">
            {Array.from(Array(partsQuantity).keys()).map((partNumber: number, index: number) => (
                <FairlyLightDecorPart
                    bulbQuantity={partNumber * initialBulbsQuantity}
                    interval={partNumber * interval}
                    colour={colour}
                    key={index.toString()}
                />
            ))}
        </div>
    );
}
