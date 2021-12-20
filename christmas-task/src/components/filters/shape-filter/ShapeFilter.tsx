import React from 'react';
import ShapeFilterItem from './shape-filter-item/ShapeFilterItem';

type Props = {
    shapesOptions: Set<string>;
    shapes: {
        value: {
            [key: string]: boolean;
        };
        setValue: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    };
};

export default function ShapeFilter({ shapesOptions, shapes }: Props) {
    return (
        <div className="shape-filter">
            <p className="shape-filter__title">Shape</p>
            <div className="shape-filter__shapes">
                {Array.from(shapesOptions).map((shape, index) => (
                    <ShapeFilterItem shapeOption={shape} shapes={shapes} key={index.toString()} />
                ))}
            </div>
        </div>
    );
}
