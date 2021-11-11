import React from "react";
import {Routes, Route, Link } from 'react-router-dom'
import './Nav.css'
import '../media.css'
import Home from "../Home/Home";

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
                        <Link to="/home"><li>Home</li></Link>
                        <a href="#"><li>Tasks</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Commits</li></a>
                    </ul>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </div>
            </nav>
        </div>
    )
}


export default Nav;