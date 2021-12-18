import T_ToyCard, { IToyCard } from "../types/T_ToyCard";

export default function filterBy( filterName: string, filterValues: {[key: string]: boolean} , array: IToyCard[]): T_ToyCard[] {
    const values = Object.keys(filterValues).filter( (key) => {
      if (filterValues[key]) return key
    });
  
    if(values.length) {
      let results:T_ToyCard[] = [];
  
      values.forEach( (value) => {
        results = [...results, ...array.filter( toyCard => {
  
          if (filterName === 'favorite') {
            const booleanValue = value === 'true'? true : false;
            if (toyCard[filterName] === booleanValue) return toyCard
  
          } else {
            if (toyCard[filterName] == value) return toyCard
          }
        })]
      });
      return results
    } else return array
}
  