import React from "react"

type Props = {
    search: {
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>
    }
}

export default function Search(props: Props) {
    const handleChange = ({ target }: {target: HTMLInputElement}) => {
        props.search.setValue(target.value)
    }
    
    return (
        <input className="search" type="search" placeholder="Search for..." value={props.search.value} onChange={handleChange} autoFocus autoComplete="false"/>
    )
}