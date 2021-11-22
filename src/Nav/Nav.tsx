import React, {useEffect, useState} from 'react';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import './Nav.css';
import './media__nav.css';
import { CrossIcon } from './CrossIcon';

const Nav = () => {
    const [isOpened, setIsOpened] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsOpened(false);
    }, [location]);
    
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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/tasks">Tasks</Link></li>
                                <a href="#">
                                    <li>Info</li>
                                </a>
                                <a href="#">
                                    <li>Commits</li>
                                </a>
                                <li><Link to="/signup">Sign Up</Link></li>
                                <li><Link to="/signin">Sign In</Link></li>
                            </ul>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};


export default Nav;