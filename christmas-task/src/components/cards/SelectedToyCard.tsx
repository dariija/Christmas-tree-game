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
        const element = document.elementFromPoint(event.pageX, event.pageY);
        if (element && element.id !== 'tree_map') {
            const toyCard = document.getElementById(id);
            // console.log(toyCard);
            // console.log(target.id);
            const toy = document.getElementById(target.id) as HTMLElement;
            toy.style.top = '';
            toy.style.left = '';
            toyCard?.append(toy);
        };
        cardChangeQuantity()
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
                    // onDrag={onDrag}
                    onDragEnd={handlerDragEnd}
                />
            ))}

            <span className="selected-toys-card__value">{toysQuantity}</span>
        </div>
    );
}
