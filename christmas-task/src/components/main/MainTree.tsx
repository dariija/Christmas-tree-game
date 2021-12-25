import React, { useEffect, useRef, useState } from 'react';
import backgrounds from '../../data/backgrounds';
import TToyCard from '../../types/TToyCard';
import Backgrounds from '../backgrounds/Backgrounds';
import DecorTree from '../decor-tree/DecorTree';
import FairyLights from '../fairly-lights/FairyLights';
import SelectedToys from '../selected-toys/SelectedToys';
import Snow from '../snow/Snow';
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
    const [snow, setSnow] = useState(false);

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
        snow: {
            value: snow,
            setValue: setSnow,
        },
    };

    // const currentToyPosition = useRef();

    return (
        <section className="tree-main main__tree-page ">
            <div className="tree-main__col tree-main__col_left">
                <Trees settings={treeSettings.tree} />
                <Backgrounds settings={treeSettings.background} />
                <FairyLights settings={treeSettings.fairyLights} />
                <Snow settings={treeSettings.snow}/>
            </div>

            <DecorTree settings={treeSettings} />

            <div className="tree-main__col tree-main__col_right">
                <SelectedToys toysData={toysData} selectedToysNumbers={selectedToysNumbers} />
            </div>
        </section>
    );
}
