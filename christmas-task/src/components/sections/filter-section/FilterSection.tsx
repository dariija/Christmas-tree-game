import React from 'react'

import Search from '../../filters/search/Search'
import Sorting from '../../filters/sorting/Sorting'
import SizeFilter from '../../filters/size-filter/SizeFilter'
import ShapeFilter from '../../filters/shape-filter/ShapeFilter'
import ColourFilter from '../../filters/colour-filter/ColourFilter'
import ResetFilters from '../../filters/reset-filters/ResetFilters'
import QuantityFilter from '../../filters/quantity-filter/QuantityFilter'
import FavouriteFilter from '../../filters/favourite-filter/FavouriteFilter'
import PurchaseYearFilter from '../../filters/purchase-year-filter/PurchaseYearFilter'
import T_ToyCard from '../../../types/T_ToyCard'
import T_Filters from '../../../types/T_Filters'

type Props = {
    toysData: T_ToyCard[],
    filters: T_Filters,
}

export default function FilterSection({toysData, filters}: Props) {
    
    const shapesOptions = new Set<string>();
    const coloursOptions = new Set<string>();
    const sizesOptions = new Set<string>();
    const quantityOptions = new Set<string>();
    const yearsOptions = new Set<string>();

    for (let toy of toysData) {
        if (toy.shape) shapesOptions.add(toy.shape);
        if (toy.color) coloursOptions.add(toy.color);
        if (toy.size) sizesOptions.add(toy.size);
        if (toy.count) quantityOptions.add(toy.count);
        if (toy.year) yearsOptions.add(toy.year);
    };

    return (
        <section className="filter">
            <div className="filter__content">
                <Search search={filters.search}/>
                <Sorting sorting={filters.sorting}/>

                <ShapeFilter shapesOptions={shapesOptions} shapes={filters.shapes}/>
                <ColourFilter coloursOptions={coloursOptions} colours={filters.colours}/>
                <SizeFilter sizesOptions={sizesOptions} sizes={filters.sizes}/>

                <QuantityFilter quantityOptions={quantityOptions} quantity={filters.quantity}/>
                <PurchaseYearFilter yearsOptions={yearsOptions} years={filters.years}/>

                <FavouriteFilter favourite={filters.favourite}/>
                <ResetFilters filters={filters}/>
            </div> 
        </section>
    )
}