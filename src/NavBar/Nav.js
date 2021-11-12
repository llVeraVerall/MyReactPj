import React from "react";
import {Routes, Route, Link } from 'react-router-dom'
import './Nav.css'
import '../media.css'
import Home from "../Home/Home";
import Tasks from "../Tasks/Tasks";

const Nav = () => {
    return (
        <div>
            <Home/>
            {/*<nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <Link to="/home">Home</Link>
                        <Link to="#"><li>Tasks</li></Link>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Commits</li></a>
                    </ul>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/tasks' element={<Tasks />}/>
                    </Routes>
                </div>
            </nav>
            */}
        </div>
    )
}


export default Nav;