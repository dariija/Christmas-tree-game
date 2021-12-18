import { I_Filters } from "../types/T_Filters"

export default function checkLocalStorage(data: I_Filters) {
  
    for (let [name, info] of Object.entries(data)) {
      if (localStorage.getItem(name)) {
        if ( typeof info.value === 'string') {
          data[name].setValue(localStorage.getItem(name))
        };
  
        if ( typeof info.value === 'object' ) {
          data[name].setValue(JSON.parse(localStorage.getItem(name) as string))
        }
      }
    };
  }