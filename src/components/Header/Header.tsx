import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'red'});

    return <>
        <h1>Agreement Manager</h1>
        Menu: <NavLink style={colorOfLink} to="/agreement">Zlecenia</NavLink> | <NavLink style={colorOfLink} to="/employee">Pracownicy</NavLink>
        <hr/>
    </>
}