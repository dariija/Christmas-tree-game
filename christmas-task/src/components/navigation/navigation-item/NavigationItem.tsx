import React, { Dispatch, SetStateAction } from 'react';

type Props = {
    pageName: string;
    active: boolean;
    handleChangeActivePage: Dispatch<SetStateAction<string>>;
};

export default function NavItem({ pageName, active, handleChangeActivePage }: Props) {
    const changeActivePage = (event: React.MouseEvent) => {
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        handleChangeActivePage(pageName);
    };

    return (
        <li className="nav__item">
            <a
                className={`nav__link ${active ? 'nav__link_active' : ''} ${pageName === '' ? 'nav__link_logo' : ''}`}
                href={pageName === '' ? '' : `#${pageName}`}
                onClick={changeActivePage}
            >
                {pageName === '' ? <span className="tree-logo" /> : pageName}
            </a>
        </li>
    );
}
