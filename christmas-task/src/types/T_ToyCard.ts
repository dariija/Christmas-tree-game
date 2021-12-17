export interface IToyCard {
    [key: string]: string | boolean;
}

type T_ToyCard = {
    num?: string,
    name?: string,
    count?: string,
    year?: string,
    shape?: string,
    color?: string,
    size?: string,
    favorite?: boolean,
    selected?: boolean
}

export default T_ToyCard