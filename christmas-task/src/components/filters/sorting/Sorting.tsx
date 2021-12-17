import React from "react";

type Props = {
    sorting: {
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>
    }
}

export default function Sorting({sorting}: Props) {
    const handleChange = ({ target }: {target: HTMLSelectElement}) => {
        sorting.setValue(target.value);
    }

    return (
        <div className="sorting">
            <p className="sorting__title">Sort by</p>
            <select className="sorting__select-group" value={sorting.value} name="" onChange={handleChange}>
                <option className="sorting__select-option" value="-">-</option>
                <option className="sorting__select-option" value="min_to_max_name" >Name: 'A' to 'Z'</option>
                <option className="sorting__select-option" value="max_to_min_name" >Name: 'Z' to 'A'</option>
                <option className="sorting__select-option" value="min_to_max_year" >Year of purchase: Low to High</option>
                <option className="sorting__select-option" value="max_to_min_year" >Year of purchase: High to Low</option>
            </select>
        </div>
    )
}