import React from 'react';
import SizeFilterItem from './size-filter-item/SizeFilterItem';

type Props = {
    sizesOptions: Set<string>;
    sizes: {
        value: {
            [key: string]: boolean;
        };
        setValue: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    };
};

export default function SizeFilter({ sizesOptions, sizes }: Props) {
    return (
        <div className="size-filter">
            <p className="size-filter__title">Size</p>
            <div className="size-filter__sizes">
                {Array.from(sizesOptions).map((size, index) => (
                    <SizeFilterItem sizeOption={size} sizes={sizes} key={index.toString()} />
                ))}
            </div>
        </div>
    );
}
