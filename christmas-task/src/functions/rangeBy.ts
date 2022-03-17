import TToyCard, { IToyCard } from '../types/TToyCard';

export default function rangeBy(rangeName: string, rangeValues: number[], array: IToyCard[]): TToyCard[] {
    return array.filter((toyCard) => {
        if (Number(toyCard[rangeName]) >= rangeValues[0] && Number(toyCard[rangeName]) <= rangeValues[1]) {
            return toyCard;
        }
        return false;
    });
}
