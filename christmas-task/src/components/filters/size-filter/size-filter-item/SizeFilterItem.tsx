import React from "react";

type Props = {
    sizeOption: string,
    sizes: {
        value: {
            [key: string]: boolean;
        };
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>;
    }
}

export default function SizeFilterItem({sizeOption, sizes}: Props) {
    
    const handleChange = ({target}: {target: HTMLInputElement}) => {
        const size = target.value;
        const value = target.checked? true : false;
        sizes.setValue({...sizes.value, ...{[size]: value}})
    }

    return (
        <label className="size-filter__size-group" htmlFor={`toy_size_${sizeOption}`}>
            <input className="size-filter__checkbox" checked={sizes.value[sizeOption]} id={`toy_size_${sizeOption}`} value={sizeOption} type="checkbox" name="" onChange={handleChange}/>
            <span className="size-filter__size-item"></span>
            {sizeOption}
        </label> 
    )
}