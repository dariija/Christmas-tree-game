import React, { useEffect, useState } from 'react';
import { checkLocalStorageTreeSettings } from '../../functions/checkLocalStorage';
import saveToLocalStorage from '../../functions/saveToLocalStorage';
import TToyCard from '../../types/TToyCard';
import TTreeSettings from '../../types/TTreeSettings';
import Backgrounds from '../backgrounds/Backgrounds';
import DecorTree from '../decor-tree/DecorTree';
import FairyLights from '../fairly-lights/FairyLights';
import ResetTreeSettings from '../filters/reset/ResetTreeSettings';
import SelectedToys from '../selected-toys/SelectedToys';
import Snow from '../snow/Snow';
import Trees from '../trees/Trees';

type Props = {
    toysData: TToyCard[];
    selectedToysNumbers: string[];
    music: {
        name: string;
        value: boolean;
        setValue: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export default function MainTree({ toysData, selectedToysNumbers, music }: Props) {
    const [tree, setTree] = useState('');
    const [background, setBackground] = useState('');
    const [fairyLights, setFairyLights] = useState('');
    const [snow, setSnow] = useState(false);

    const treeSettings: TTreeSettings = {
        tree: {
            name: 'tree',
            value: tree,
            setValue: setTree,
        },
        background: {
            name: 'background',
            value: background,
            setValue: setBackground,
        },
        fairyLights: {
            name: 'fairyLights',
            value: fairyLights,
            setValue: setFairyLights,
        },
        snow: {
            name: 'snow',
            value: snow,
            setValue: setSnow,
        },
        music,
    };

    window.onunload = () => {
        saveToLocalStorage(treeSettings);
    };

    window.onpopstate = () => {
        saveToLocalStorage(treeSettings);
    };

    useEffect(() => {
        checkLocalStorageTreeSettings(treeSettings);
    }, []);

    return (
        <section className="tree-main main__tree-page ">
            <div className="tree-main__col tree-main__col_left">
                <Trees settings={treeSettings.tree} />
                <Backgrounds settings={treeSettings.background} />
                <FairyLights settings={treeSettings.fairyLights} />
                <Snow settings={treeSettings.snow} />
                <ResetTreeSettings settings={treeSettings} />
            </div>

            <DecorTree settings={treeSettings} />

            <div className="tree-main__col tree-main__col_right">
                <SelectedToys toysData={toysData} selectedToysNumbers={selectedToysNumbers} />
            </div>
        </section>
    );
}
