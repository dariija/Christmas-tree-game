import React from 'react';
import trees from '../../data/trees';
import backgrounds from '../../data/backgrounds';
import FairlyLightDecor from '../fairly-lights/FairyLightDecor';

type Props = {
    settings: {
        tree: {
            value: string;
            setValue: React.Dispatch<React.SetStateAction<string>>;
        };
        background: {
            value: string;
            setValue: React.Dispatch<React.SetStateAction<string>>;
        };
        fairyLights: {
            value: string;
            setValue: React.Dispatch<React.SetStateAction<string>>;
        };
        snow: {
            value: boolean;
            setValue: React.Dispatch<React.SetStateAction<boolean>>;
        };
    };
};

export default function DecorTree({ settings }: Props) {
    return (
        <div className="tree-main__tree" style={{ backgroundImage: `url(${backgrounds[settings.background.value]})` }}>
            <div className={`snow-decor ${settings.snow.value ? 'animation_on' : ''}`} />

            <div className="tree">
                <img className="tree__img" src={trees[settings.tree.value]} useMap="#tree-map" alt="" />

                <map className="tree-map" name="tree-map">
                    <area
                        target=""
                        alt=""
                        title=""
                        href="#"
                        coords="4,581,97,693,263,713,391,697,461,658,493,539,404,218,309,64,261,0,229,0,105,211,22,435,0,546"
                        shape="poly"
                        aria-label="decorate-tree-map"
                    />
                </map>

                <FairlyLightDecor colour={settings.fairyLights.value} />
            </div>
        </div>
    );
}
