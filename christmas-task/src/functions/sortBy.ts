import TToyCard from '../types/TToyCard';

export default function sortBy(value: string, array: TToyCard[]): TToyCard[] {
    switch (value) {
        case 'min_to_max_name':
            array.sort((toyCard1, toyCard2) => {
                const name1 = toyCard1.name?.trim().toLowerCase() as string;
                const name2 = toyCard2.name?.trim().toLowerCase() as string;

                if (name1 > name2) return 1;
                if (name1 < name2) return -1;
                return 0;
            });
            break;

        case 'max_to_min_name':
            array.sort((toyCard1, toyCard2) => {
                const name1 = toyCard1.name?.trim().toLowerCase() as string;
                const name2 = toyCard2.name?.trim().toLowerCase() as string;

                if (name1 > name2) return -1;
                if (name1 < name2) return 1;
                return 0;
            });
            break;

        case 'min_to_max_year':
            array.sort((toyCard1, toyCard2) => {
                return Number(toyCard1.year) - Number(toyCard2.year);
            });
            break;

        case 'max_to_min_year':
            array.sort((toyCard1, toyCard2) => {
                return Number(toyCard2.year) - Number(toyCard1.year);
            });
            break;

        default:
            break;
    }
    return array;
}
