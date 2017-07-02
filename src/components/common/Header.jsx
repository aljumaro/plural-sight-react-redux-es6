import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <nav>
        <NavLink to="/" exact>Home</NavLink>{" | "}
        <NavLink to="/courses">Courses</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>
    </nav>
);

export default Header;