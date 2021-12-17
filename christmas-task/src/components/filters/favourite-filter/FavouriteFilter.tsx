import React from "react";

type Props = {
    favourite: {
        value: {
            [key: string]: boolean
        },
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>
    }
}

export default function FavouriteFilter({favourite}: Props) {
    
    const handleChange = ({target}: {target: HTMLInputElement}) => {
        let value = target.checked? true : false;
        let name = value? 'true' : 'false';
        favourite.setValue( {[name]: value})
    }

    return (
        <div className="favourite-filter">
            <label className="favourite-filter__group" htmlFor="filter_favourite">
                <input className="favourite-filter__checkbox" checked={favourite.value['true']} id="filter_favourite" value="" type="checkbox" name="favourite" onChange={handleChange}/>
                <span className="favourite-filter__item"></span>
                Only favourite
            </label>
        </div>
    )
}