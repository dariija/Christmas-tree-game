import React from 'react'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    pageName: string,
    active: boolean,
    handleChangeActivePage: Dispatch<SetStateAction<string>>
}

export default function NavItem({ pageName, active, handleChangeActivePage}: Props) {
    const changeActivePage = () => {
        handleChangeActivePage(pageName)
    }
    
    return (
        <li className="nav__item">
            <a className={`nav__link ${active? 'nav__link_active' : ''}`} href={`#${pageName}`} onClick={changeActivePage}>{pageName}</a>
        </li>
    )
}