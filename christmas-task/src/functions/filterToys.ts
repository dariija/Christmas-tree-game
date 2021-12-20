import TFilters from '../types/TFilters';
import TToyCard from '../types/TToyCard';
import filterBy from './filterBy';
import rangeBy from './rangeBy';
import sortBy from './sortBy';

export default function filterToys(data: TToyCard[], filters: TFilters) {
    let filtered = data.filter((toy) => toy.name?.toLowerCase().includes(filters.search.value.toLowerCase()));
    filtered = filterBy(filters.shapes.name, filters.shapes.value, filtered);
    filtered = filterBy(filters.colours.name, filters.colours.value, filtered);
    filtered = filterBy(filters.sizes.name, filters.sizes.value, filtered);
    filtered = filterBy(filters.favourite.name, filters.favourite.value, filtered);
    filtered = rangeBy(filters.quantity.name, filters.quantity.value, filtered);
    filtered = rangeBy(filters.years.name, filters.years.value, filtered);
    filtered = sortBy(filters.sorting.value, filtered);
    return filtered;
}
