import React from 'react';
import TToyCard from '../../types/TToyCard';
import Backgrounds from '../backgrounds/Backgrounds';
import DecorTree from '../decor-tree/DecorTree';
import FairyLights from '../fairly-lights/FairyLights';
import SelectedToys from '../selected-toys/SelectedToys';
import Trees from '../trees/Trees';

type Props = {
    toysData: TToyCard[];
    selectedToysNumbers: string[];
};

export default function MainTree({ toysData, selectedToysNumbers }: Props) {
    return (
        <section className="tree-main main__tree-page ">
            <div className="tree-main__col">
                <Trees />
                <Backgrounds />
                <FairyLights />
            </div>

            <div className="tree-main__tree">
                <DecorTree />
            </div>

            <div className="tree-main__col">
                <SelectedToys toysData={toysData} selectedToysNumbers={selectedToysNumbers} />
            </div>
        </section>
    );
}
