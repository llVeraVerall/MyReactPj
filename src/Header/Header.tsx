import React from 'react';
import './Header.css';
import './media__header.css';
import {Link} from 'react-router-dom';

const Header = () => (
    <div className='header-wrapper'>
        <div className='header-title'>My Pj</div>
        <Link to='/signin'className='logout'>Logout &#10144;</Link>
    </div>);

export default Header;