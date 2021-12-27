import React, { Dispatch, SetStateAction } from 'react';

type Props = {
    pageName: string;
    active: boolean;
    handleChangeActivePage: Dispatch<SetStateAction<string>>;
};

export default function NavItem({ pageName, active, handleChangeActivePage }: Props) {
    const changeActivePage = (event: React.MouseEvent, href: string) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        handleChangeActivePage(pageName);
    };

    return (
        <li className="nav__item">
            <a
                className={`nav__link ${active ? 'nav__link_active' : ''} ${pageName === '' ? 'nav__link_logo' : ''}`}
                href={`/${pageName}`}
                onClick={(event) => changeActivePage(event, `/${pageName}`)}
            >
                {pageName === '' ? <span className="tree-logo" /> : pageName}
            </a>
        </li>
    );
}
