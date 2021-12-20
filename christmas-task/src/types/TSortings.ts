import TToyCard from './TToyCard';

type TSortings = {
    [key: string]: () => TToyCard[];
};

export default TSortings;
