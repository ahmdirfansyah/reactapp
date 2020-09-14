import React from 'react'

import './navbar.css';

const Navbar = () => {
    return (
        <div class="topnavigation">
            <a class="active" href="#home"><b>Qtemu</b></a>
            <a href="#create">Create Meetup</a>
            <a href="#explore">Explore</a>
            <div class="topnavigation-right">
                <a href="#login">Login</a>
            </div>
            </div>
    );
}

export default Navbar;
