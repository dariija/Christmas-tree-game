export interface I_Filters {
    [key: string]: any
}

type T_Filters = {
    search: {
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>
    },

    sorting: {
        name: string,
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>
    },

    shapes: {
        name: string,
        value: {
            [key: string]: boolean
        },
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>
    },

    colours: {
        name: string,
        value: {
            [key: string]: boolean
        },
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>
    },

    sizes: {
        name: string,
        value: {
            [key: string]: boolean
        },
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>
    },

    favourite: {
        name: string,
        value: {
            [key: string]: boolean
        },
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>
    },

    quantity: {
        name: string,
        min: number,
        max: number,
        value: number[],
        setValue: React.Dispatch<React.SetStateAction<number[]>>
    },

    years: {
        name: string,
        min: number,
        max: number,
        value: number[],
        setValue: React.Dispatch<React.SetStateAction<number[]>>
    },

    select: {
        name: string
        value: string[]
        setValue: React.Dispatch<React.SetStateAction<string[]>>,
        setLogoValue: React.Dispatch<React.SetStateAction<number>>
    }
    

}

export default  T_Filters