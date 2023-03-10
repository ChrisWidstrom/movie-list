import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <h1>My Movie List</h1>
            <div className='linkGroup'>
                <NavLink to="/search" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>Search</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>My List</NavLink>
            </div>
        </div>
        
    )
}

export default Header;