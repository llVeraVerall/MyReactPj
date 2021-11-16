import React from 'react';
import './Header.css';
import './media__header.css';

const Header = () => (
    <div className='header-wrapper'>
        <div className='header-title'>My Pj</div>
        <a href='#' className='logout'>Logout &#10144;</a>
    </div>);

export default Header;