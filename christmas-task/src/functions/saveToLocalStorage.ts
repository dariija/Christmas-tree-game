import TFilters from '../types/TFilters';

export default function saveToLocalStorage(data: TFilters) {
    Array.from(Object.entries(data)).forEach(([name, info]) => {
        if (name !== 'search') {
            localStorage.setItem(name, JSON.stringify(info.value));
        }
    });
}
