import React, {useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './Nav.css';
import './media__nav.css';
import Home from '../Home/Home';
import Tasks from '../Tasks/Tasks';

const Nav = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="menu">
            <nav role="navigation">
                <div className="menuToggle">
                    <button onClick={() => {return setIsOpened(!isOpened);}} className="nav__button">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    { isOpened &&
                        <ul className="menu">
                            <Link to="/home">Home</Link>
                            <Link to="/tasks">
                                <li>Tasks</li>
                            </Link>
                            <a href="#">
                                <li>Info</li>
                            </a>
                            <a href="#">
                                <li>Commits</li>
                            </a>
                        </ul>
                    }
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/tasks' element={<Tasks />}/>
                    </Routes>
                </div>
            </nav>
        </div>
    );
};


export default Nav;