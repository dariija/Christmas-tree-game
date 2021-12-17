import React from 'react';
import { useEffect } from 'react';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

type Props = {
    range: {
        name: string,
        min: number,
        max: number,
        value: number[],
        setValue: React.Dispatch<React.SetStateAction<number[]>>
    }
}

export default function DoubleRange({range}: Props) {
    const handleChange = (value: number[]) => {
        range.setValue(value)
    };

    useEffect( () => {
        if (!range.value.length) range.setValue([range.min, range.max])
    })

    return (
        <Range 
            allowCross={false} 
            min={range.min}   
            max={range.max} 
            step={1} 
            defaultValue={[range.min, range.max]}
            value={range.value}  
            marks = {{
                [range.min]:{
                    style: {
                        color: 'white',
                    },
                    label: `${range.value[0]}`,
                },
                [range.max]: {
                    style: {
                        color: 'white',
                    },
                    label: `${range.value[1]}`,
                }
            }}
            trackStyle={[{
                backgroundColor: "rgb(209 166 50)",            
            }]}
            handleStyle={[{
                borderColor: "rgb(209 166 50)",
                boxShadow: "none",
            }]}

            onChange={handleChange}
            />
    )
}