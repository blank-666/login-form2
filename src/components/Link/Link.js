import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from '../styledComponents';

function Link({ right, path, text }) {
    return (
        <LinkContainer right={right}>
            <NavLink className='menuItem' to={path}>{text}</NavLink>
        </LinkContainer>
    );
}

export default Link;