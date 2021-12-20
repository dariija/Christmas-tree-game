import { IFilters } from '../types/TFilters';

export default function checkLocalStorage(data: IFilters) {
    Array.from(Object.entries(data)).forEach(([name, info]) => {
        if (localStorage.getItem(name)) {
            if (typeof info.value === 'string') {
                if (localStorage.getItem(name)) {
                    data[name].setValue(localStorage.getItem(name)) as string;
                }
            }

            if (typeof info.value === 'object') {
                data[name].setValue(JSON.parse(localStorage.getItem(name) as string));
            }
        }
    });
}
