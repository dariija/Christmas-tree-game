import React, { Dispatch, SetStateAction } from 'react';
import Nav from '../navigation/Navigation';
import Music from '../music/Music';

type Props = {
    activePage: string;
    handleChangeActivePage: Dispatch<SetStateAction<string>>;
    selectedToysLogo: number;
    audio: {
        audioIsPlaying: boolean;
        setAudioIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export default function Header({ activePage, handleChangeActivePage, selectedToysLogo, audio }: Props) {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__content">
                    <Nav activePage={activePage} handleChangeActivePage={handleChangeActivePage} />

                    <div className="header__tools">
                        <Music audio={audio} />
                        <div className="selected-toys-logo">
                            <span className="selected-toys-logo__quantity">{selectedToysLogo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
