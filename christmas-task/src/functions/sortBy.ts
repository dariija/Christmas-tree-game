import T_ToyCard from "../types/T_ToyCard";

export default function sortBy(value: string, array: T_ToyCard[]):T_ToyCard[] {
  switch(value) {
    case 'min_to_max_name': 
      array.sort( (toyCard1, toyCard2) => {
        const name1 = toyCard1.name?.trim().toLowerCase() as string;
        const name2 = toyCard2.name?.trim().toLowerCase() as string;

        return name1 > name2? 1 :
               name1 < name2? -1 : 0
      });
      break;
    
    case 'max_to_min_name': 
      array.sort( (toyCard1, toyCard2) => {
        const name1 = toyCard1.name?.trim().toLowerCase() as string;
        const name2 = toyCard2.name?.trim().toLowerCase() as string;

        return name1 > name2? -1 :
              name1 < name2? 1 : 0
      });
      break;
    
    case 'min_to_max_year': 
      array.sort( (toyCard1, toyCard2) => {
        return Number(toyCard1.year) - Number(toyCard2.year)
      })
      break;
  
    case 'max_to_min_year': 
      array.sort( (toyCard1, toyCard2) => {
        return Number(toyCard2.year) - Number(toyCard1.year)
      })
      break;
  }
  return array
}