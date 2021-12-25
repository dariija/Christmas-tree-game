import React, { useEffect, useState } from 'react';
import FairlyLight from '../cards/FairlyLight';

type Props = {
    settings: {
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default function FairyLights({ settings }: Props) {
    const coloursLights = ['multi', 'red', 'yellow', 'green', 'blue'];
    const [switchBtn, setSwitchBtn] = useState(false);

    const handlerChange = () => {
        if (!switchBtn) {
            settings.setValue('multi');
        } else settings.setValue('');
        setSwitchBtn(!switchBtn);
    };

    useEffect(() => {
        if (settings.value) {
            setSwitchBtn(true);
        } else setSwitchBtn(false);
    });

    return (
        <div className="fairy-lights">
            <p className="fairy-lights__title">Fairy-light</p>
            <div className="fairy-lights__content">
                <div className="fairy-lights__lights">
                    {coloursLights.map((colour, index) => (
                        <FairlyLight colour={colour} key={index.toString()} settings={settings} />
                    ))}
                </div>

                <label className="switch" htmlFor="switch">
                    <input
                        className="switch__checkbox"
                        type="checkbox"
                        id="switch"
                        onChange={handlerChange}
                        checked={switchBtn}
                    />
                    <span className="switch__slider" />
                </label>
            </div>
        </div>
    );
}
