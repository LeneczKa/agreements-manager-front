import React from "react";
import {NavLink} from "react-router-dom";

import './Header.scss'

export const Header = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'cadetblue' : 'rgb(95, 158, 160, 0.6)'});

    return <div className='header'>
        <h1>agreement manager</h1>
        <div className='menu-links-container'>
            <NavLink className='menu-link' style={colorOfLink} to="/agreement">
                zlecenia
            </NavLink>
            <NavLink className='menu-link' style={colorOfLink} to="/employee">pracownicy</NavLink>
        </div>
    </div>
}