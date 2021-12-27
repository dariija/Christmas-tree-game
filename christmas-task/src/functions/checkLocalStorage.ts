import TFilters from '../types/TFilters';
import { ITreeSettings } from '../types/TTreeSettings';

export default function checkLocalStorage(data: TFilters) {
    Array.from(Object.keys(data) as [keyof TFilters]).forEach((filter) => {
        if (localStorage.getItem(filter)) {
            data[filter].setValue(JSON.parse(localStorage.getItem(filter) as string));
        }
    });
}

function checkLocalStorageTreeSettings(data: ITreeSettings) {
    Array.from(Object.keys(data)).forEach((filter) => {
        if (localStorage.getItem(filter)) {
            data[filter].setValue(JSON.parse(localStorage.getItem(filter) as string));
        }
    });
}

function checkLocalStorageSelectedToys(name: string): string[] {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name) as string);
    }
    return [];
}

function checkLocalStorageMusic(name: string): boolean {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name) as string);
    }
    return false;
}

export { checkLocalStorageSelectedToys, checkLocalStorageTreeSettings, checkLocalStorageMusic };
