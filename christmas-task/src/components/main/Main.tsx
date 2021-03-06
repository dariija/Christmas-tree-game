import React, { useEffect, useState } from 'react';

import ToySection from '../sections/toy-section/ToySection';
import FilterSection from '../sections/filter-section/FilterSection';
import TToyCard from '../../types/TToyCard';
import TFilters from '../../types/TFilters';
import filterToys from '../../functions/filterToys';
import saveToLocalStorage from '../../functions/saveToLocalStorage';
import checkLocalStorage from '../../functions/checkLocalStorage';

type Props = {
    toysData: TToyCard[];
    selectToys: {
        name: string;
        value: string[];
        setValue: React.Dispatch<React.SetStateAction<string[]>>;
        setLogoValue: React.Dispatch<React.SetStateAction<number>>;
    };
};

export default function MainToys({ toysData, selectToys }: Props) {
    const [search, setSearch] = useState<string>('');
    const [sorting, setSorting] = useState<string>('-');
    const [shapes, setShapes] = useState({});
    const [colours, setColours] = useState({});
    const [sizes, setSizes] = useState({});
    const [favourite, setFavourite] = useState({});
    const [quantity, setQuantity] = useState<number[]>([]);
    const [years, setYears] = useState<number[]>([]);

    const filters: TFilters = {
        search: {
            name: 'search',
            value: search,
            setValue: setSearch,
        },
        sorting: {
            name: 'sorting',
            value: sorting,
            setValue: setSorting,
        },
        shapes: {
            name: 'shape',
            value: shapes,
            setValue: setShapes,
        },
        colours: {
            name: 'color',
            value: colours,
            setValue: setColours,
        },
        sizes: {
            name: 'size',
            value: sizes,
            setValue: setSizes,
        },
        favourite: {
            name: 'favorite',
            value: favourite,
            setValue: setFavourite,
        },
        quantity: {
            name: 'count',
            min: 0,
            max: 0,
            value: quantity,
            setValue: setQuantity,
        },
        years: {
            name: 'year',
            min: 0,
            max: 0,
            value: years,
            setValue: setYears,
        },

        select: selectToys,
    };

    useEffect(() => {
        checkLocalStorage(filters);
    }, []);

    window.onunload = () => {
        saveToLocalStorage(filters);
    };

    window.onpopstate = () => {
        saveToLocalStorage(filters);
    };

    const filteredToysData = filterToys(toysData, filters);

    return (
        <div className="main__toys-page">
            <FilterSection toysData={toysData} filters={filters} />
            <ToySection toysData={filteredToysData} select={filters.select} />
        </div>
    );
}
