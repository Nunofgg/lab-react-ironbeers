import React from "react";
import { NavLink } from "react-router-dom";
import home from '../assets/home.png';

function Navbar(){
    return (
        <nav className="nav-bar">
            <NavLink exact to="/">
                <img width="50" src={home} alt="Home Page" />
            </NavLink>
        </nav>
    );
}

export default Navbar;