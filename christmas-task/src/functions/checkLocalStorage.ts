import TFilters from '../types/TFilters';

export default function checkLocalStorage(data: TFilters) {
    Array.from(Object.keys(data) as [keyof TFilters]).forEach((filter) => {
        if (localStorage.getItem(filter)) {
            data[filter].setValue(JSON.parse(localStorage.getItem(filter) as string));
        }
    });
}
