import TFilters from '../types/TFilters';
import TTreeSettings from '../types/TTreeSettings';

export default function saveToLocalStorage(data: TFilters | TTreeSettings) {
    Array.from(Object.entries(data)).forEach(([name, info]) => {
        if (name !== 'search') {
            localStorage.setItem(name, JSON.stringify(info.value));
        }
    });
}
