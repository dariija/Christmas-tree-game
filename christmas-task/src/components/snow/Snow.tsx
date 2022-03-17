import React from 'react';

type Props = {
    settings: {
        name: string;
        value: boolean;
        setValue: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export default function Snow({ settings }: Props) {
    const handlerChange = () => {
        settings.setValue(!settings.value);
    };

    // useEffect(() => {
    //     if (settings.value) {
    //         setSwitchBtn(true);
    //     } else setSwitchBtn(false);
    // });

    return (
        <div className="snow">
            <p className="snow__title">Snow</p>

            <label className="snow-option" htmlFor="snow">
                <input
                    className="snow-option__checkbox"
                    checked={settings.value}
                    id="snow"
                    value=""
                    type="checkbox"
                    name=""
                    onChange={handlerChange}
                />
                <span className="snow-option__view" />
            </label>
        </div>
    );
}
