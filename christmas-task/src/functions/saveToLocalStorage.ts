import TFilters from '../types/TFilters';

export default function saveToLocalStorage(data: TFilters) {
    Array.from(Object.entries(data)).forEach(([name, info]) => {
        if (name !== 'search') {
            if (typeof info.value === 'string') {
                localStorage.setItem(name, info.value);
            }

            if (typeof info.value === 'object') {
                localStorage.setItem(name, JSON.stringify(info.value));
            }
        }
    });
}
