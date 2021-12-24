import React, { useEffect, useRef, useState } from 'react';
import backgrounds from '../../data/backgrounds';
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

    // selectedToysNumbers = ['55', '6', '8', '2', '59', '1'];

    const [tree, setTree] = useState('');
    const [background, setBackground] = useState('');
    const [fairyLights, setFairyLights] = useState('');

    const treeSettings = {
        tree: {
            value: tree,
            setValue: setTree,
        },
        background: {
            value: background,
            setValue: setBackground,
        },
        fairyLights: {
            value: fairyLights,
            setValue: setFairyLights,
        },
    };

    // const currentToyPosition = useRef();

    return (
        <section className="tree-main main__tree-page ">
            <div className="tree-main__col">
                <Trees settings={treeSettings.tree} />
                <Backgrounds settings={treeSettings.background} />
                <FairyLights settings={treeSettings.fairyLights} />
            </div>

            <div className="tree-main__tree">
                <DecorTree settings={treeSettings} />
            </div>

            <div className="tree-main__col">
                <SelectedToys toysData={toysData} selectedToysNumbers={selectedToysNumbers} />
            </div>
        </section>
    );
}
