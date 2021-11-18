import React, {useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './Nav.css';
import './media__nav.css';
import Home from '../Home/Home';
import Tasks from '../Tasks/Tasks';
import { CrossIcon } from './CrossIcon';


const Nav = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div>
            <button onClick={() =>  setIsOpened(!isOpened)} className="nav__button">
                <CrossIcon isOpened={isOpened} />
            </button>
            <div className={'menu' + isOpened ? ' isOpened' : ''}>
                <nav role="navigation">
                    <div className="menuToggle">
                        { isOpened &&
                            <ul className="menu">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/tasks">Tasks</Link></li>
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
        </div>
    );
};


export default Nav;