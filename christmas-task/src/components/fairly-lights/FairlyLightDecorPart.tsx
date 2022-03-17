import React from 'react';

type Props = {
    bulbQuantity: number;
    interval: number;
    colour: string;
};

type ColourChart = {
    [index: string]: string;
};

export default function FairlyLightDecorPart({ bulbQuantity, interval, colour }: Props) {
    const startAngle = 70;
    const endAngle = 110;
    const angleStep = (endAngle - startAngle) / (bulbQuantity - 1);

    const colourChart: ColourChart = {
        red: '#ff4c4c',
        yellow: '#ffff47',
        green: '#61f361',
        blue: '#0e9bff',
    };

    return (
        <ul className="fairly-light-decor-part">
            {Array.from(Array(bulbQuantity).keys()).map((value: number, index: number) => (
                <li
                    className={`fairly-light-decor-part__item ${colour ? 'animation_on' : ''} ${
                        colour === 'multi' ? 'multi' : ''
                    }`}
                    style={{
                        transform: `rotate(${startAngle + index * angleStep}deg) translate(${interval}px)`,
                        backgroundColor: `${colour === 'multi' ? '' : colourChart[colour]}`,
                    }}
                    key={index.toString()}
                />
            ))}
        </ul>
    );
}
