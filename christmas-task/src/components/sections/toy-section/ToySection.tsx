import React from "react";
import ToyCard from "../../toy-card/ToyCard";
import T_ToyCard from '../../../types/T_ToyCard'

type Props = {
    toysData: T_ToyCard[],
    select: {
        value: string[]
        setValue: React.Dispatch<React.SetStateAction<string[]>>,
        setLogoValue: React.Dispatch<React.SetStateAction<number>>
    }
}

export default function ToySection({toysData, select}: Props) {

    return (
        <section className="toys">
            {toysData.length? toysData.map( (toyData, index) => <ToyCard toyData={toyData} select={select} key={index}/>) : <p className="no-matches">Sorry, no matches found</p>}
        </section>
    )
}