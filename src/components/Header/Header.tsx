import React, {useEffect} from 'react';
import './Header.css';
import './media__header.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IState} from '../../store/reducers/';
import {logOut} from '../../api/utils/handleAuthError';

const Header = () => {
    //достаем данные из стора
    const hasToken = useSelector((state: IState) => !!state.tokenR.token);
    console.log(hasToken);

    return (
        <div className='header-wrapper'>
            <div className='header-title'>My Pj</div>
            {hasToken && (
                <Link to='/signin' className='logout' onClick={logOut}>Logout &#10144;</Link>
            )}
        </div>);
};

export default Header;