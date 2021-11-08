import React from "react";
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Tasks</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Commits</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Nav;