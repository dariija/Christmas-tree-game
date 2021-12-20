import TToyCard, { IToyCard } from '../types/TToyCard';

export default function filterBy(
    filterName: string,
    filterValues: { [key: string]: boolean },
    array: IToyCard[]
): TToyCard[] {
    const values = Object.keys(filterValues).filter((key) => {
        if (filterValues[key]) return key;
        return false;
    });

    if (values.length) {
        let results: TToyCard[] = [];

        values.forEach((value) => {
            results = [
                ...results,
                ...array.filter((toyCard) => {
                    if (filterName === 'favorite') {
                        const booleanValue = value === 'true';
                        if (toyCard[filterName] === booleanValue) return toyCard;
                    } else if (toyCard[filterName] === value) {
                        return toyCard;
                    }
                    return false;
                }),
            ];
        });
        return results;
    }
    return array;
}
