import React, { Dispatch, SetStateAction } from 'react';
import NavItem from './navigation-item/NavigationItem';

type Props = {
    activePage: string;
    handleChangeActivePage: Dispatch<SetStateAction<string>>;
};

export default function Nav({ activePage, handleChangeActivePage }: Props) {
    const pages = ['toys', 'tree'];

    return (
        <ul className="nav">
            <li className="nav__item">
                <span className="tree-logo" />
            </li>
            {pages.map((pageName, index) => (
                <NavItem
                    pageName={pageName}
                    key={index.toString()}
                    active={activePage === pageName}
                    handleChangeActivePage={handleChangeActivePage}
                />
            ))}
        </ul>
    );
}
