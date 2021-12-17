import React from "react";

type Props = {
    shapeOption: string,
    shapes: {
        value: {
            [key: string]: boolean;
        };
        setValue: React.Dispatch<React.SetStateAction<{[key:string]: boolean}>>;
    }
}

export default function ShapeFilterItem({shapeOption, shapes}: Props) {

    const handleChange = ({target}: {target: HTMLInputElement}) => {
        const shape = target.value;
        const value = target.checked? true : false;
        shapes.setValue({...shapes.value, ...{[shape]: value}})
    }

    return (
        <label className="shape-filter__shape-group" htmlFor={`shape_${shapeOption}`}>
            <input className="shape-filter__checkbox" checked={shapes.value[shapeOption]} id={`shape_${shapeOption}`} value={shapeOption} type="checkbox" name="" onChange={handleChange}/>
            <span className={`shape-filter__shape-item shape-filter__shape-item_${shapeOption}`}></span>
            <span className="shape-filter__shape-name">{shapeOption}</span>
        </label>
    )
}