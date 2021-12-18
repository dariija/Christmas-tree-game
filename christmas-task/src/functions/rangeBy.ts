import T_ToyCard, { IToyCard } from "../types/T_ToyCard";

export default function rangeBy( rangeName: string, rangeValues: number[] , array: IToyCard[]): T_ToyCard[] {
    return array.filter( (toyCard) => {
      if ( Number(toyCard[rangeName]) >= rangeValues[0] && Number(toyCard[rangeName]) <= rangeValues[1] ) return toyCard
    })
  }
  