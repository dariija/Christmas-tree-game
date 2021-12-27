import React from 'react';

type Props = {
    handleChangeActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export default function MainStart({ handleChangeActivePage }: Props) {
    const changeActivePage = (event: React.MouseEvent) => {
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        handleChangeActivePage('toys');
    };

    return (
        <div className="main__start-page">
            <div className="tree-ball tree-ball_large" />
            <div className="tree-ball tree-ball_medium" />
            <div className="welcome-window">
                <div className="welcome-window__content">
                    <p className="welcome-window__text">Christmas game &#34;Decorate the tree&#34;</p>
                </div>
                <div className="button button_start-game">
                    <a className="link-start-game" onClick={changeActivePage} href="#toys">
                        Start game
                    </a>
                </div>
            </div>
        </div>
    );
}
