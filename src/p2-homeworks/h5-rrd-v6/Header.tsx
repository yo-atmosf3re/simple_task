import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { PATH } from './Pages'

function Header() {
    return (
        <div>
            <div className={style.block}>
                <span>
                    <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                </span>
                <span>
                    <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                </span>
                <span>
                    <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
                </span>
            </div>
        </div>
    )
}

export default Header
