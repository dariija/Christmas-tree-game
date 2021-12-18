import { I_Filters } from "../types/T_Filters"

export default function saveToLocalStorage(data: I_Filters) {
    for (let [name, info] of Object.entries(data)) {
      if (name !== 'search') {
        if ( typeof info.value === 'string' ) {
          localStorage.setItem(name, info.value)
        };
  
        if ( typeof info.value === 'object' ) {
          localStorage.setItem(name, JSON.stringify(info.value))
        }
      }
    }
  }