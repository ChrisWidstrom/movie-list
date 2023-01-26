import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            <h1>Movie List</h1>
            <NavLink to="/database" className={({ isActive }) => (isActive ? 'menu-item-active' : 'menu-item')}>Search</NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-item-active' : 'menu-item')}>My List</NavLink>
        </div>
        
    )
}

export default Header;