import React from 'react';

type Props = {
    bulbQuantity: number;
    interval: number;
    colour: string;
};

export default function FairlyLightDecorPart({ bulbQuantity, interval, colour }: Props) {
    const startAngle = 70;
    const endAngle = 110;
    const angleStep = (endAngle - startAngle) / (bulbQuantity - 1);

    return (
        <ul className="fairly-light-decor-part">
            {Array.from(Array(bulbQuantity).keys()).map((value: number, index: number) => (
                <li
                    className={`fairly-light-decor-part__item ${colour ? 'animation_on' : ''} ${
                        colour === 'multi' ? 'multi' : ''
                    }`}
                    style={{
                        transform: `rotate(${startAngle + index * angleStep}deg) translate(${interval}px)`,
                        backgroundColor: `${colour === 'multi' ? '' : colour}`,
                    }}
                    key={index.toString()}
                />
            ))}
        </ul>
    );
}
