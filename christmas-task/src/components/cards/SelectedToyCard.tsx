import React, { useState } from 'react';
import images from '../../data/images';
import missingImg from '../../assets/svg/missing.svg';

type Props = {
    quantity: string;
    num: string;
    id: string;
};

export default function SelectedToyCard({ quantity, num, id }: Props) {
    const [toysQuantity, setToysQuantity] = useState(Number(quantity));
    const cardChangeQuantity = () => {
        const toyCard = document.getElementById(id) as HTMLElement;
        setToysQuantity(toyCard.childElementCount - 1);
    };

    const handleDragStart = (event: React.DragEvent<HTMLImageElement>, toyId: string) => {
        const e = event;
        e.dataTransfer.effectAllowed = 'move';
        const toyMeasuremenrs = (e.target as HTMLImageElement).getBoundingClientRect();
        const toyOptions = {
            id: toyId,
            toyDimensions: {
                toyShiftY: event.clientY - toyMeasuremenrs.y,
                toyShiftX: event.clientX - toyMeasuremenrs.x,
            },
        };

        e.dataTransfer.setData('toyData', JSON.stringify(toyOptions));
    };

    const handlerDragEnd = (event: React.DragEvent<HTMLImageElement>) => {
        event.preventDefault();
        const target = event.target as HTMLElement;

        if (target.dataset.inTargetZone === 'false') {
            const toyCard = document.getElementById(id) as HTMLElement;
            const toy = document.getElementById(target.id) as HTMLElement;

            toy.style.top = '';
            toy.style.left = '';
            toyCard.append(toy);
        }
        cardChangeQuantity();
    };

    const onDrag = (event: React.DragEvent) => {
        const targetEelement = document.getElementById('tree_map');
        const elemBelow = document.elementFromPoint(event.pageX, event.pageY) as Element;
        const toy = event.target as HTMLElement;

        if (targetEelement === elemBelow) {
            toy.dataset.inTargetZone = 'true';
        } else toy.dataset.inTargetZone = 'false';
    };

    return (
        <div className="selected-toys-card" id={id}>
            {Array.from(Array(Number(quantity)).keys()).map((index) => (
                <img
                    className="selected-toys-card__img"
                    src={num ? images[num] : missingImg}
                    alt={`selected-toy-${num}`}
                    key={index.toString()}
                    id={`${num}_${index}`}
                    draggable
                    onDragStart={(event) => handleDragStart(event, `${num}_${index}`)}
                    onDragEnd={handlerDragEnd}
                    onDrag={onDrag}
                />
            ))}

            <span className="selected-toys-card__value">{toysQuantity}</span>
        </div>
    );
}
