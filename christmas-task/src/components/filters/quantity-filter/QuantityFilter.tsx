import React from 'react';
import DoubleRange from '../../range/DoubleRange';

type Props = {
    quantityOptions: Set<string>;
    quantity: {
        name: string;
        min: number;
        max: number;
        value: number[];
        setValue: React.Dispatch<React.SetStateAction<number[]>>;
    };
};

export default function QuantityFilter({ quantityOptions, quantity }: Props) {
    const quantityValues = Array.from(quantityOptions, (value) => +value);
    quantity.min = Math.min(...quantityValues);
    quantity.max = Math.max(...quantityValues);

    return (
        <div className="quantity-filter">
            <p className="quantity-filter__title">Quantity</p>
            <DoubleRange range={quantity} />
        </div>
    );
}
