import React from 'react';
import TTreeSettings from '../../../types/TTreeSettings';
import Button from '../../button/Button';

type Props = {
    settings: TTreeSettings;
};

export default function ResetTreeSettings({ settings }: Props) {
    const onResetSettings = () => {
        settings.tree.setValue('');
        settings.background.setValue('');
        settings.fairyLights.setValue('');
        settings.snow.setValue(false);
        settings.music.setValue(false);
        localStorage.clear();
    };

    return (
        <div className="buttons-filter">
            <Button className="button button_reset-options" text="Reset all settings" handleChange={onResetSettings} />
        </div>
    );
}
