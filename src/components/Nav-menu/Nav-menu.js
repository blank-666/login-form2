import React from 'react';
import { MENU } from '../../App';
import { NavLink } from 'react-router-dom';
import { NavContainer } from '../styledComponents';

const NavMenu = () => {
    return (
        <NavContainer>
            {MENU.map((item) => (
                <NavLink className='menuItem' key={item.component} to={item.path}>{item.title}</NavLink>
            ))}
        </NavContainer>
    )
}

export default NavMenu;