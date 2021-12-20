import React from 'react';
import DoubleRange from '../../range/DoubleRange';

type Props = {
    yearsOptions: Set<string>;
    years: {
        name: string;
        min: number;
        max: number;
        value: number[];
        setValue: React.Dispatch<React.SetStateAction<number[]>>;
    };
};

export default function PurchaseYearFilter({ yearsOptions, years }: Props) {
    const yearsValues = Array.from(yearsOptions, (value) => +value);
    years.min = Math.min(...yearsValues);
    years.max = Math.max(...yearsValues);

    return (
        <div className="purchase-year-filter">
            <p className="purchase-year-filter__title">Year of purchase</p>
            <DoubleRange range={years} />
        </div>
    );
}
